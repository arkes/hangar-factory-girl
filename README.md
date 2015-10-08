# Hangar Factory Girl

Library to use Hangar with Protractor

This is only useful with [Hangar](https://github.com/faradayio/hangar).
Read more about hanger [here](hangar: http://www.faraday.io/blog/hangar-use-your-factorygirl-factories-for-your-front-end-tests).

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
    /* 
    *  method create
    *  1st param is factory's name
    *  2nd param is factory's attributes that you want to override
    *  3rd param is include option when you want model to return it's association
    */
    var user = factory.create('user');

    /* 
    *  method build
    *  1st param is factory's name
    *  2nd param is factory's attributes that you want to override
    */
    var comment = factory.build('comment', { user_id: user.id });

    browser.get('/accounts/' + user.id);
  });

});
```
## Options

By default the waiting time used in http-sync is set to 4000. You can override it as:

```javascript
var hangar = require('hangar-factory-girl');
var factory = new hangar({ wait_time: 5000 });
```

## License

MIT
