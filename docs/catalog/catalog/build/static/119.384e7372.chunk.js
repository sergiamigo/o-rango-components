webpackJsonp([119],{812:function(e,n,t){var o=t(15),r=t(45),s=t(286).PageRenderer;s.__esModule&&(s=s.default);var a=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(969)}},componentWillMount:function(){},render:function(){return o.createElement(s,Object.assign({},this.props,{content:this.state.content}))}});a.__catalog_loader__=!0,e.exports=a},969:function(e,n){e.exports="# writeJsonSync(file, object, [options])\n\nWrites an object to a JSON file.\n\n**Alias:** `writeJSONSync()`\n\n- `file` `<String>`\n- `object` `<Object>`\n- `options` `<Object>`\n  - `spaces` `<Number|String>` Number of spaces to indent; or a string to use for indentation (i.e. pass `'\\t'` for tab indentation). See [the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_space_argument) for more info.\n  - `EOL` `<String>` Set EOL character. Default is `\\n`.\n  - `replacer` [JSON replacer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter)\n  - Also accepts [`fs.writeFileSync` options](https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options)\n\n## Example:\n\n```js\nconst fs = require('fs-extra')\n\nfs.writeJsonSync('./package.json', {name: 'fs-extra'})\n```\n---\n\n**See also:** [`outputJsonSync()`](outputJson-sync.md)\n"}});
//# sourceMappingURL=119.384e7372.chunk.js.map