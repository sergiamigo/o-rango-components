webpackJsonp([2],{1086:function(n,e){n.exports="# wrappy\n\nCallback wrapping utility\n\n## USAGE\n\n```javascript\nvar wrappy = require(\"wrappy\")\n\n// var wrapper = wrappy(wrapperFunction)\n\n// make sure a cb is called only once\n// See also: http://npm.im/once for this specific use case\nvar once = wrappy(function (cb) {\n  var called = false\n  return function () {\n    if (called) return\n    called = true\n    return cb.apply(this, arguments)\n  }\n})\n\nfunction printBoo () {\n  console.log('boo')\n}\n// has some rando property\nprintBoo.iAmBooPrinter = true\n\nvar onlyPrintOnce = once(printBoo)\n\nonlyPrintOnce() // prints 'boo'\nonlyPrintOnce() // does nothing\n\n// random property is retained!\nassert.equal(onlyPrintOnce.iAmBooPrinter, true)\n```\n"},929:function(n,e,r){var t=r(15),o=r(45),a=r(286).PageRenderer;a.__esModule&&(a=a.default);var i=o({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:r(1086)}},componentWillMount:function(){},render:function(){return t.createElement(a,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,n.exports=i}});
//# sourceMappingURL=2.0e865426.chunk.js.map