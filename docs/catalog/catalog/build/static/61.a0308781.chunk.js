webpackJsonp([61],{1027:function(n,e){n.exports="# ensureDir(dir, [callback])\n\nEnsures that the directory exists. If the directory structure does not exist, it is created. Like `mkdir -p`.\n\n**Aliases:** `mkdirs()`, `mkdirp()`\n\n- `dir` `<String>`\n- `callback` `<Function>`\n\n## Example:\n\n```js\nconst fs = require('fs-extra')\n\nconst dir = '/tmp/this/path/does/not/exist'\nfs.ensureDir(dir, err => {\n  console.log(err) // => null\n  // dir has now been created, including the directory it is to be placed in\n})\n\n// With Promises:\nfs.ensureDir(dir)\n.then(() => {\n  console.log('success!')\n})\n.catch(err => {\n  console.error(err)\n})\n```\n"},870:function(n,e,t){var r=t(15),i=t(45),s=t(286).PageRenderer;s.__esModule&&(s=s.default);var o=i({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(1027)}},componentWillMount:function(){},render:function(){return r.createElement(s,Object.assign({},this.props,{content:this.state.content}))}});o.__catalog_loader__=!0,n.exports=o}});
//# sourceMappingURL=61.a0308781.chunk.js.map