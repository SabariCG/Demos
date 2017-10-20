'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 3000;

_app2.default.listen(PORT, function () {
  console.log('Running on port ' + PORT + '..');
});

console.log('Babel is working!!!');
//# sourceMappingURL=index.js.map