webpackJsonp([133],{798:function(n,t,e){var s=e(15),r=e(45),a=e(286).PageRenderer;a.__esModule&&(a=a.default);var c=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:e(955)}},componentWillMount:function(){},render:function(){return s.createElement(a,Object.assign({},this.props,{content:this.state.content}))}});c.__catalog_loader__=!0,n.exports=c},955:function(n,t){n.exports="# ensureSymlink(srcpath, dstpath, [type, callback])\n\nEnsures that the symlink exists. If the directory structure does not exist, it is created.\n\n- `srcpath` `<String>`\n- `dstpath` `<String>`\n- `type` `<String>`\n- `callback` `<Function>`\n\n## Example:\n\n```js\nconst fs = require('fs-extra')\n\nconst srcpath = '/tmp/file.txt'\nconst dstpath = '/tmp/this/path/does/not/exist/file.txt'\nfs.ensureSymlink(srcpath, dstpath, err => {\n  console.log(err) // => null\n  // symlink has now been created, including the directory it is to be placed in\n})\n\n// With Promises:\nfs.ensureSymlink(srcpath, dstpath)\n.then(() => {\n  console.log('success!')\n})\n.catch(err => {\n  console.error(err)\n})\n```\n"}});
//# sourceMappingURL=133.d4b6ada7.chunk.js.map