webpackJsonp([53],{1035:function(e,n){e.exports="# moveSync(src, dest, [options])\n\nMoves a file or directory, even across devices.\n\n- `src` `<String>`\n- `dest` `<String>`\n- `options` `<Object>`\n  - `overwrite` `<boolean>`: overwrite existing file or directory, default is `false`.\n\n## Example:\n\n```js\nconst fs = require('fs-extra')\n\nfs.moveSync('/tmp/somefile', '/tmp/does/not/exist/yet/somefile')\n```\n\n**Using `overwrite` option**\n\n```js\nconst fs = require('fs-extra')\n\nfs.moveSync('/tmp/somedir', '/tmp/may/already/existed/somedir', { overwrite: true })\n```\n"},878:function(e,n,t){var o=t(15),r=t(45),s=t(286).PageRenderer;s.__esModule&&(s=s.default);var i=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(1035)}},componentWillMount:function(){},render:function(){return o.createElement(s,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,e.exports=i}});
//# sourceMappingURL=53.b07866d8.chunk.js.map