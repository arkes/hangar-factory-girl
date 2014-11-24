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
var factoryGirl = require('hangar-factory-girl');

describe('My Page', function() {

  afterEach(function() {
    factoryGirl().clear();
  });

  it("does something", function() {
    var user = factoryGirl().create('user');
    var comment = factoryGirl().build('comment', { user_id: user.id });
  });

});
```

## License

MIT
