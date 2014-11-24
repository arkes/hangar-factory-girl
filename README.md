# Hangar Factory Girl

Library to use Hangar with protractor

This is only usefull with [Hangar](https://github.com/faradayio/hangar).

http://faraday.io/2014/09/24/hangar-using-factorygirl-factories-from-your-frontend-tests


## Installation

```javascript
npm install hangar-factory-girl
```

## Usage

```javascript
var factoryGirl = require('hangar-factory-girl');

describe('Login page', function() {

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
