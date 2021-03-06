var url       = require('url');
var httpSync  = require('http-sync');
var pluralize = require('pluralize');

function hangarFactoryGirl(options) {
  this._options = options || {};

  this._wait_time = this._options['wait_time'] || 4000;

  var result = url.parse(this._options['url'] || browser.baseUrl);
  this._baseUrl  = result.href;
  this._protocol = result.protocol;
  this._hostname = result.hostname;
  this._port     = result.port;
}

hangarFactoryGirl.prototype = {
  create: function(name, attributes, include) {
    this._name   = name;
    this._path   =  '/' + this.pluralizeName();
    this._method = 'POST';

    this.formatData(attributes, include);

    return this.request();
  },
  build: function(name, attributes) {
    this._name   = name;
    this._path   =  '/' + this.pluralizeName() + '/new';
    this._method = 'GET';

    this.formatData(attributes);
    return this.request();
  },
  clear: function() {
    this._path   =  '/';
    this._method = 'DELETE';

    return this.request();
  },
  pluralizeName: function() {
    return pluralize(this._name);
  },
  formatData: function(attributes, include) {
    this._data = {};

    if (attributes !== undefined) {
      this._data[this._name] = attributes;
    }

    if (include !== undefined) {
      this._data["include"] = include;
    }
  },
  request: function() {
    var request =  httpSync.request({
      headers: {
        'Factory':      'hangar',
        'Content-type': 'application/json',
        'Accept':       'application/json'
      },
      method:   this._method,
      protocol: this._protocol,
      host:     this._hostname,
      port:     this._port,
      path:     this._path,
      body:     JSON.stringify(this._data)
    });

    var timedout = false;
    request.setTimeout(this._wait_time, function() {
      console.log("error: timeout");
      timedout = true;
    });

    var response = request.end();
    if (!timedout && response.body) {
      if (response.statusCode == 200) {
        return JSON.parse(response.body);  
      }
      console.log('hangarFactory: (' + response.statusCode + ') ' + response.body);
      return undefined;
    }
  }
};

module.exports = hangarFactoryGirl;