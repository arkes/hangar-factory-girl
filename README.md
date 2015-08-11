# Hangar Factory Girl

Library to use Hangar with Protractor

This is only usefull with [Hangar](https://github.com/faradayio/hangar).
More info about hangar: http://faraday.io/2014/09/24/hangar-using-factorygirl-factories-from-your-frontend-tests

## Installation

```javascript
npm install hangar-factory-girl
```

### dependencies:

[http-sync](https://github.com/dhruvbird/http-sync)
[pluralize](https://github.com/blakeembrey/pluralize)

## Usage

```javascript
var hangar = require('hangar-factory-girl');
var factory = new hangar();

describe('My Page', function() {

  afterEach(function() {
    factory.clear();
  });

  it("does something", function() {
    var user = factory.create('user');
    var comment = factory.build('comment', { user_id: user.id });

    browser.get('/accounts/' + user.id);
  });

});
```
## Options

By default the waiting time used in http-sync is set to 2000. You can override it as:

```javascript
var hangar = require('hangar-factory-girl');
var factory = new hangar({ wait_time: 3000 });
```

## License

MIT
