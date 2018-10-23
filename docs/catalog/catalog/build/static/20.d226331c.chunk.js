webpackJsonp([20],{1068:function(n,e){n.exports="# Punycode.js [![Build status](https://travis-ci.org/bestiejs/punycode.js.svg?branch=master)](https://travis-ci.org/bestiejs/punycode.js) [![Code coverage status](http://img.shields.io/codecov/c/github/bestiejs/punycode.js.svg)](https://codecov.io/gh/bestiejs/punycode.js) [![Dependency status](https://gemnasium.com/bestiejs/punycode.js.svg)](https://gemnasium.com/bestiejs/punycode.js)\n\nPunycode.js is a robust Punycode converter that fully complies to [RFC 3492](https://tools.ietf.org/html/rfc3492) and [RFC 5891](https://tools.ietf.org/html/rfc5891).\n\nThis JavaScript library is the result of comparing, optimizing and documenting different open-source implementations of the Punycode algorithm:\n\n* [The C example code from RFC 3492](https://tools.ietf.org/html/rfc3492#appendix-C)\n* [`punycode.c` by _Markus W. Scherer_ (IBM)](http://opensource.apple.com/source/ICU/ICU-400.42/icuSources/common/punycode.c)\n* [`punycode.c` by _Ben Noordhuis_](https://github.com/bnoordhuis/punycode/blob/master/punycode.c)\n* [JavaScript implementation by _some_](http://stackoverflow.com/questions/183485/can-anyone-recommend-a-good-free-javascript-for-punycode-to-unicode-conversion/301287#301287)\n* [`punycode.js` by _Ben Noordhuis_](https://github.com/joyent/node/blob/426298c8c1c0d5b5224ac3658c41e7c2a3fe9377/lib/punycode.js) (note: [not fully compliant](https://github.com/joyent/node/issues/2072))\n\nThis project was [bundled](https://github.com/joyent/node/blob/master/lib/punycode.js) with Node.js from [v0.6.2+](https://github.com/joyent/node/compare/975f1930b1...61e796decc) until [v7](https://github.com/nodejs/node/pull/7941) (soft-deprecated).\n\nThe current version supports recent versions of Node.js only. It provides a CommonJS module and an ES6 module. For the old version that offers the same functionality with broader support, including Rhino, Ringo, Narwhal, and web browsers, see [v1.4.1](https://github.com/bestiejs/punycode.js/releases/tag/v1.4.1).\n\n## Installation\n\nVia [npm](https://www.npmjs.com/):\n\n```bash\nnpm install punycode --save\n```\n\nIn [Node.js](https://nodejs.org/):\n\n```js\nconst punycode = require('punycode');\n```\n\n## API\n\n### `punycode.decode(string)`\n\nConverts a Punycode string of ASCII symbols to a string of Unicode symbols.\n\n```js\n// decode domain name parts\npunycode.decode('maana-pta'); // 'ma\xf1ana'\npunycode.decode('--dqo34k'); // '\u2603-\u2318'\n```\n\n### `punycode.encode(string)`\n\nConverts a string of Unicode symbols to a Punycode string of ASCII symbols.\n\n```js\n// encode domain name parts\npunycode.encode('ma\xf1ana'); // 'maana-pta'\npunycode.encode('\u2603-\u2318'); // '--dqo34k'\n```\n\n### `punycode.toUnicode(input)`\n\nConverts a Punycode string representing a domain name or an email address to Unicode. Only the Punycoded parts of the input will be converted, i.e. it doesn\u2019t matter if you call it on a string that has already been converted to Unicode.\n\n```js\n// decode domain names\npunycode.toUnicode('xn--maana-pta.com');\n// \u2192 'ma\xf1ana.com'\npunycode.toUnicode('xn----dqo34k.com');\n// \u2192 '\u2603-\u2318.com'\n\n// decode email addresses\npunycode.toUnicode('\u0434\u0436\u0443\u043c\u043b\u0430@xn--p-8sbkgc5ag7bhce.xn--ba-lmcq');\n// \u2192 '\u0434\u0436\u0443\u043c\u043b\u0430@\u0434\u0436p\u0443\u043c\u043b\u0430\u0442\u0435\u0441\u0442.b\u0440\u0444a'\n```\n\n### `punycode.toASCII(input)`\n\nConverts a lowercased Unicode string representing a domain name or an email address to Punycode. Only the non-ASCII parts of the input will be converted, i.e. it doesn\u2019t matter if you call it with a domain that\u2019s already in ASCII.\n\n```js\n// encode domain names\npunycode.toASCII('ma\xf1ana.com');\n// \u2192 'xn--maana-pta.com'\npunycode.toASCII('\u2603-\u2318.com');\n// \u2192\xa0'xn----dqo34k.com'\n\n// encode email addresses\npunycode.toASCII('\u0434\u0436\u0443\u043c\u043b\u0430@\u0434\u0436p\u0443\u043c\u043b\u0430\u0442\u0435\u0441\u0442.b\u0440\u0444a');\n// \u2192 '\u0434\u0436\u0443\u043c\u043b\u0430@xn--p-8sbkgc5ag7bhce.xn--ba-lmcq'\n```\n\n### `punycode.ucs2`\n\n#### `punycode.ucs2.decode(string)`\n\nCreates an array containing the numeric code point values of each Unicode symbol in the string. While [JavaScript uses UCS-2 internally](https://mathiasbynens.be/notes/javascript-encoding), this function will convert a pair of surrogate halves (each of which UCS-2 exposes as separate characters) into a single code point, matching UTF-16.\n\n```js\npunycode.ucs2.decode('abc');\n// \u2192 [0x61, 0x62, 0x63]\n// surrogate pair for U+1D306 TETRAGRAM FOR CENTRE:\npunycode.ucs2.decode('\\uD834\\uDF06');\n// \u2192 [0x1D306]\n```\n\n#### `punycode.ucs2.encode(codePoints)`\n\nCreates a string based on an array of numeric code point values.\n\n```js\npunycode.ucs2.encode([0x61, 0x62, 0x63]);\n// \u2192 'abc'\npunycode.ucs2.encode([0x1D306]);\n// \u2192 '\\uD834\\uDF06'\n```\n\n### `punycode.version`\n\nA string representing the current Punycode.js version number.\n\n## Author\n\n| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias \"Follow @mathias on Twitter\") |\n|---|\n| [Mathias Bynens](https://mathiasbynens.be/) |\n\n## License\n\nPunycode.js is available under the [MIT](https://mths.be/mit) license.\n"},911:function(n,e,o){var t=o(15),s=o(45),a=o(286).PageRenderer;a.__esModule&&(a=a.default);var c=s({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:o(1068)}},componentWillMount:function(){},render:function(){return t.createElement(a,Object.assign({},this.props,{content:this.state.content}))}});c.__catalog_loader__=!0,n.exports=c}});
//# sourceMappingURL=20.d226331c.chunk.js.map