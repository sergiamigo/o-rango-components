webpackJsonp([56],{1032:function(t,n){t.exports="# ensureSymlinkSync(srcpath, dstpath, [type])\n\nEnsures that the symlink exists. If the directory structure does not exist, it is created.\n\n- `srcpath` `<String>`\n- `dstpath` `<String>`\n- `type` `<String>`\n\n## Example:\n\n```js\nconst fs = require('fs-extra')\n\nconst srcpath = '/tmp/file.txt'\nconst dstpath = '/tmp/this/path/does/not/exist/file.txt'\nfs.ensureSymlinkSync(srcpath, dstpath)\n// symlink has now been created, including the directory it is to be placed in\n```\n"},875:function(t,n,e){var s=e(15),r=e(45),i=e(286).PageRenderer;i.__esModule&&(i=i.default);var a=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:e(1032)}},componentWillMount:function(){},render:function(){return s.createElement(i,Object.assign({},this.props,{content:this.state.content}))}});a.__catalog_loader__=!0,t.exports=a}});
//# sourceMappingURL=56.f3cc6771.chunk.js.map