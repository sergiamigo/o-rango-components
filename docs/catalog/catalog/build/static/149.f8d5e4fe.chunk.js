webpackJsonp([149],{782:function(n,e,t){var s=t(15),a=t(45),o=t(286).PageRenderer;o.__esModule&&(o=o.default);var i=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(939)}},componentWillMount:function(){},render:function(){return s.createElement(o,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,n.exports=i},939:function(n,e){n.exports="# ![common-tags](media/logo.svg)\n\n\ud83d\udd16 A set of **well-tested**, commonly used template literal tag functions for use in ES2015+.\n\n\ud83c\udf1f Plus some extra goodies for easily making your own tags.\n\n## Example\n\n```js\nimport { html } from 'common-tags';\n\nhtml`\n  <div id=\"user-card\">\n    <h2>${user.name}</h2>\n  </div>\n`\n```\n\n## Project Status\n\n| Info       | Badges                                   |\n| ---------- | ---------------------------------------- |\n| Version    | [![github release](https://img.shields.io/github/release/declandewet/common-tags.svg?style=flat-square)](https://github.com/declandewet/common-tags/releases/latest) [![npm version](https://img.shields.io/npm/v/common-tags.svg?style=flat-square)](http://npmjs.org/package/common-tags) |\n| License    | [![npm license](https://img.shields.io/npm/l/common-tags.svg?style=flat-square)](https://github.com/declandewet/common-tags/blob/master/license.md) |\n| Popularity | [![npm downloads](https://img.shields.io/npm/dm/common-tags.svg?style=flat-square)](http://npm-stat.com/charts.html?package=common-tags) |\n| Testing    | [![Build status](https://ci.appveyor.com/api/projects/status/75eiommx0llt3sgd?svg=true)](https://ci.appveyor.com/project/declandewet/common-tags) [![build status](https://img.shields.io/travis/declandewet/common-tags.svg?style=flat-square)](https://travis-ci.org/declandewet/common-tags) [![codecov.io](https://img.shields.io/codecov/c/gh/declandewet/common-tags.svg?style=flat-square)](https://codecov.io/gh/declandewet/common-tags?branch=master) |\n| Quality    | [![bitHound Overall Score](https://www.bithound.io/github/declandewet/common-tags/badges/score.svg)](https://www.bithound.io/github/declandewet/common-tags) [![dependency status](https://img.shields.io/david/declandewet/common-tags.svg?style=flat-square)](https://david-dm.org/declandewet/common-tags) [![dev dependency status](https://img.shields.io/david/dev/declandewet/common-tags.svg?style=flat-square)](https://david-dm.org/declandewet/common-tags#info=devDependencies) |\n| Style      | [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) |\n\n\x3c!-- START doctoc generated TOC please keep comment here to allow auto update --\x3e\n\x3c!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE --\x3e\n## Table of Contents\n\n- [Introduction](#introduction)\n- [Why You Should Care](#why-you-should-care)\n- [See Who Is Using `common-tags`](#see-who-is-using-common-tags)\n- [Installation](#installation)\n  - [Requirements](#requirements)\n  - [Instructions](#instructions)\n  - [With unpkg](#with-unpkg)\n- [Usage](#usage)\n  - [Imports](#imports)\n  - [Available Tags](#available-tags)\n    - [`html`](#html)\n      - [Aliases: `source`, `codeBlock`](#aliases-source-codeblock)\n    - [`safeHtml`](#safehtml)\n    - [`oneLine`](#oneline)\n    - [`oneLineTrim`](#onelinetrim)\n    - [`stripIndent`](#stripindent)\n    - [`stripIndents`](#stripindents)\n    - [`inlineLists`](#inlinelists)\n    - [`oneLineInlineLists`](#onelineinlinelists)\n    - [`commaLists`](#commalists)\n    - [`commaListsOr`](#commalistsor)\n    - [`commaListsAnd`](#commalistsand)\n    - [`oneLineCommaLists`](#onelinecommalists)\n    - [`oneLineCommaListsOr`](#onelinecommalistsor)\n    - [`oneLineCommaListsAnd`](#onelinecommalistsand)\n- [Advanced Usage](#advanced-usage)\n  - [Tail Processing](#tail-processing)\n  - [Using Tags on Regular String Literals](#using-tags-on-regular-string-literals)\n  - [Type Definitions](#type-definitions)\n  - [Make Your Own Template Tag](#make-your-own-template-tag)\n    - [Class is in Session: TemplateTag](#class-is-in-session-templatetag)\n    - [The Anatomy of a Transformer](#the-anatomy-of-a-transformer)\n    - [Plugin Transformers](#plugin-transformers)\n    - [Plugin Pipeline](#plugin-pipeline)\n    - [Returning Other Values from a Transformer](#returning-other-values-from-a-transformer)\n    - [List of Built-in Transformers](#list-of-built-in-transformers)\n      - [`trimResultTransformer([side])`](#trimresulttransformerside)\n      - [`stripIndentTransformer([type='initial'])`](#stripindenttransformertypeinitial)\n      - [`replaceResultTransformer(replaceWhat, replaceWith)`](#replaceresulttransformerreplacewhat-replacewith)\n      - [`replaceSubstitutionTransformer(replaceWhat, replaceWith)`](#replacesubstitutiontransformerreplacewhat-replacewith)\n      - [`replaceStringTransformer(replaceWhat, replaceWith)`](#replacestringtransformerreplacewhat-replacewith)\n      - [`inlineArrayTransformer(opts)`](#inlinearraytransformeropts)\n      - [`splitStringTransformer(splitBy)`](#splitstringtransformersplitby)\n- [How to Contribute](#how-to-contribute)\n- [License](#license)\n- [Other ES2015 Template Tag Modules](#other-es2015-template-tag-modules)\n\n\x3c!-- END doctoc generated TOC please keep comment here to allow auto update --\x3e\n\n## Introduction\n\n`common-tags` initially started out as two template tags I'd always find myself writing - one for stripping indents, and one for trimming multiline strings down to a single line. In it's prime, I was an avid user of [CoffeeScript](http://coffeescript.org), which had this behaviour by default as part of it's block strings feature. I also started out programming in Ruby, which has a similar mechanism called Heredocs.\n\nOver time, I found myself needing a few more template tags to cover edge cases - ones that supported including arrays, or ones that helped to render out tiny bits of HTML not large enough to deserve their own file or an entire template engine. So I packaged all of these up into this module.\n\nAs more features were proposed, and I found myself needing a way to override the default settings to cover even more edge cases, I realized that my initial implementation wouldn't be easy to scale.\n\nSo I re-wrote this module on top of a core architecture that makes use of transformer plugins which can be composed, imported independently and re-used.\n\n## Why You Should Care\n\nTagged templates in ES2015 are a welcome feature. But, they have their downsides. One such downside is that they preserve all whitespace by default - which makes multiline strings in source code look terrible.\n\nSource code is not just for computers to interpret. Humans have to read it too \ud83d\ude01. If you care at all about how neat your source code is, or come from a [CoffeeScript](http://coffeescript.org/) background and miss the [block string syntax](http://coffeescript.org/#strings), then you will love `common-tags`, as it was initially intended to bring this feature \"back\" to JS since it's [initial commit](https://github.com/declandewet/common-tags/commit/2595288d6c276439d98d1bcbbb0aa113f4f7cd86).\n\n`common-tags` also [exposes a means of composing pipelines of dynamic transformer plugins](#plugin-transformers). As someone with a little experience writing tagged templates, I can admit that it is often the case that one tag might need to do the same thing as another tag before doing any further processing; for example - a typical tag that renders out HTML could strip initial indents first, then worry about handling character escapes. Both steps could easily be useful as their own separate template tags, but there isn't an immediately obvious way of composing the two together for maximum re-use. `common-tags` offers not [one](#tail-processing), but [two](#plugin-pipeline) ways of doing this.\n\nFurthermore, I try to keep this project as transparently stable and updated as frequently as I possibly can. As you may have already seen by the [project status table](#project-status), `common-tags` is linted, well tested, tests are well covered, tests pass on both Unix and Windows operating systems, the popularity bandwidth is easily referenced and dependency health is in plain sight \ud83d\ude04. `common-tags` is also already [used in production on a number of proprietary sites and dependent projects](#see-who-is-using-common-tags), and [contributions are always welcome](#how-to-contribute), as are [suggestions](issues).\n\n## See Who Is Using `common-tags`\n\n- **[Slack](https://slack.com/)** ([ref](https://slack.com/libs/desktop))\n- **[Discord](https://discordapp.com)** ([ref](https://discordapp.com/acknowledgements))\n- **[CircleCI](https://circleci.com)** ([ref](https://circleci.com/docs/2.0/open-source/))\n- **[Confluent](https://www.confluent.io/)** ([ref](https://www.confluent.io/third_party_software/))\n- **[Tessel](https://tessel.io/)** ([ref](https://github.com/tessel/t2-cli/blob/575ddb23f432d10f86b76f5cdca866d1146dedf5/package.json#L56))\n- **[Ember.js](https://www.emberjs.com/)** ([ref](https://github.com/emberjs/ember.js/blob/cacefee49ea4be2621a0ced3e4ceb0010d6cd841/package.json#L93))\n- **[Angular](https://angularjs.org/)** ([ref](https://github.com/angular/angular-cli/blob/90e2e805aae6e0bd2e00e52063221736a8d9cb0c/package.json#L50))\n- **[Prettier](https://prettier.io/)** ([ref](https://github.com/prettier/prettier-eslint/blob/49b762b57b7e7af3b06bd933050c614a91b6742d/package.json#L18))\n- **[Apollo](https://www.apollographql.com)** ([ref](https://github.com/apollographql/apollo-codegen/blob/b9b9a2afd851fa3cba786b26684b26378b1a6f53/package.json#L48))\n- **[Workbox](https://developers.google.com/web/tools/workbox/)** ([ref](https://github.com/GoogleChrome/workbox/blob/d391a0cb51b3e89121c5274fb15f05988233b57e/package.json#L64))\n- **[Gatsby](https://www.gatsbyjs.org/)** ([ref](https://github.com/gatsbyjs/gatsby/blob/3af191c9961b6da1cc04e9cb0a03787af25878db/packages/gatsby-cli/package.json#L16))\n- **[Storybook](https://storybook.js.org/)** ([ref](https://github.com/storybooks/storybook/blob/c275e5c508714bd1a49342e51ddf00bbdb54d277/app/react/package.json#L46))\n- **[Cypress](https://www.cypress.io/)** ([ref](https://github.com/cypress-io/cypress/blob/5d761630f233abb30b9b2e3fede9a4c4887cf880/cli/package.json#L44))\n- **[stylelint](http://stylelint.io/)** ([ref](https://github.com/stylelint/stylelint/blob/5dc5db5599a00cabc875cf99c56d60f93fbbbd2d/package.json#L82))\n- **[pnpm](https://pnpm.js.org/)** ([ref](https://github.com/pnpm/pnpm/blob/36be3d3f0c75992a1f3ff14b60c99115547d0fcc/package.json#L36))\n- **[jss](http://cssinjs.org/)** ([ref](https://github.com/cssinjs/jss/blob/7b9c1222893495c585b4b61d7ca9af05077cefec/package.json#L44))\n\n## Installation\n\n### Requirements\n\nThe official recommendation for running `common-tags` is as follows:\n\n- [Node.js](https://nodejs.org/en/download/) v5.0.0 or higher\n- In order to use `common-tags`, your environment will also need to support ES2015 tagged templates ([pssst\u2026 check Babel out](http://babeljs.io))\n- You might also want to [polyfill some features](https://github.com/zloirock/core-js) if you plan on supporting older browsers: `Array.prototype.includes`\n\nIt might work with below versions of Node, but this is not a guarantee.\n\n### Instructions\n\n`common-tags` is a [Node](https://nodejs.org/) module. So, as long as you have Node.js and NPM installed, installing `common-tags` is as simple as running this in a terminal at the root of your project:\n\n```sh\nnpm install common-tags\n```\n\n### With unpkg\n\n`common-tags` is also available at [unpkg](https://unpkg.com/common-tags). Just put this code in your HTML:\n\n```html\n<script src=\"https://unpkg.com/common-tags\"><\/script>\n```\n\nThis will make the library available under a global variable `commonTags`.\n\n## Usage\n\n### Imports\n\nLike all modules, `common-tags` begins with an `import`. In fact, `common-tags` supports two styles of import:\n\n**Named imports:**\n\n```js\nimport {stripIndent} from 'common-tags'\n```\n\n**Direct module imports:**\n\n*(Useful if your bundler doesn't support [tree shaking](https://medium.com/@roman01la/dead-code-elimination-and-tree-shaking-in-javascript-build-systems-fb8512c86edf#.p30lbjm94) but you still want to only include modules you need).*\n\n```js\nimport stripIndent from 'common-tags/lib/stripIndent'\n```\n\n### Available Tags\n\n`common-tags` exports a bunch of wonderful pre-cooked template tags for your eager consumption. They are as follows:\n\n#### `html`\n\n##### Aliases: `source`, `codeBlock`\n\nYou'll often find that you might want to include an array in a template. Typically, doing something like `${array.join(', ')}` would work - but what if you're printing a list of items in an HTML template and want to maintain the indentation? You'd have to count the spaces manually and include them in the `.join()` call - which is a bit *ugly* for my taste. This tag properly indents arrays, as well as newline characters in string substitutions, by converting them to an array split by newline and re-using the same array inclusion logic:\n\n```js\nimport {html} from 'common-tags'\nlet fruits = ['apple', 'orange', 'watermelon']\nhtml`\n  <div class=\"list\">\n    <ul>\n      ${fruits.map(fruit => `<li>${fruit}</li>`)}\n      ${'<li>kiwi</li>\\n<li>guava</li>'}\n    </ul>\n  </div>\n`\n```\n\nOutputs:\n\n```html\n<div class=\"list\">\n  <ul>\n    <li>apple</li>\n    <li>orange</li>\n    <li>watermelon</li>\n    <li>kiwi</li>\n    <li>guava</li>\n  </ul>\n</div>\n```\n\n#### `safeHtml`\n\nA tag very similar to `html` but it does safe HTML escaping for strings coming from substitutions. When combined with regular `html` tag, you can do basic HTML templating that is safe from XSS (Cross-Site Scripting) attacks.\n\n```js\nimport {html, safeHtml} from 'common-tags'\nlet userMessages = ['hi', 'what are you up to?', '<script>alert(\"something evil\")<\/script>']\nhtml`\n  <div class=\"chat-list\">\n    <ul>\n      ${userMessages.map(message => safeHtml`<li>${message}</li>`)}\n    </ul>\n  </div>\n`\n```\n\nOutputs:\n\n```html\n<div class=\"chat-list\">\n  <ul>\n    <li>hi</li>\n    <li>what are you up to?</li>\n    <li>&lt;script&gt;alert(&quot;something evil&quot;)&lt;/script&gt;</li>\n  </ul>\n</div>\n```\n\n#### `oneLine`\n\nAllows you to keep your single-line strings under 80 characters without resorting to crazy string concatenation.\n\n```js\nimport {oneLine} from 'common-tags'\n\noneLine`\n  foo\n  bar\n  baz\n`\n// \"foo bar baz\"\n```\n\n#### `oneLineTrim`\n\nAllows you to keep your single-line strings under 80 characters while trimming the new lines:\n\n```js\nimport {oneLineTrim} from 'common-tags'\n\noneLineTrim`\n  https://news.com/article\n  ?utm_source=designernews.co\n`\n// https://news.com/article?utm_source=designernews.co\n```\n\n#### `stripIndent`\n\nIf you want to strip the initial indentation from the beginning of each line in a multiline string:\n\n```js\nimport {stripIndent} from 'common-tags'\n\nstripIndent`\n  This is a multi-line string.\n  You'll ${verb} that it is indented.\n  We don't want to output this indentation.\n    But we do want to keep this line indented.\n`\n// This is a multi-line string.\n// You'll notice that it is indented.\n// We don't want to output this indentation.\n//   But we do want to keep this line indented.\n```\n\nImportant note: this tag will not indent multiline strings coming from the substitutions. If you want that behavior, use the `html` tag (aliases: `source`, `codeBlock`).\n\n#### `stripIndents`\n\nIf you want to strip *all* of the indentation from the beginning of each line in a multiline string:\n\n```js\nimport {stripIndents} from 'common-tags'\n\nstripIndents`\n  This is a multi-line string.\n  You'll ${verb} that it is indented.\n  We don't want to output this indentation.\n    We don't want to keep this line indented either.\n`\n// This is a multi-line string.\n// You'll notice that it is indented.\n// We don't want to output this indentation.\n// We don't want to keep this line indented either.\n```\n\n#### `inlineLists`\n\nAllows you to inline an array substitution as a list:\n\n```js\nimport {inlineLists} from 'common-tags'\n\ninlineLists`\n  I like ${['apples', 'bananas', 'watermelons']}\n  They're good!\n`\n// I like apples bananas watermelons\n// They're good!\n```\n\n#### `oneLineInlineLists`\n\nAllows you to inline an array substitution as a list, rendered out on a single line:\n\n```js\nimport {oneLineInlineLists} from 'common-tags'\n\noneLineInlineLists`\n  I like ${['apples', 'bananas', 'watermelons']}\n  They're good!\n`\n// I like apples bananas watermelons They're good!\n```\n\n#### `commaLists`\n\nAllows you to inline an array substitution as a comma-separated list:\n\n```js\nimport {commaLists} from 'common-tags'\n\ncommaLists`\n  I like ${['apples', 'bananas', 'watermelons']}\n  They're good!\n`\n// I like apples, bananas, watermelons\n// They're good!\n```\n\n#### `commaListsOr`\n\nAllows you to inline an array substitution as a comma-separated list, the last of which is preceded by the word \"or\":\n\n```js\nimport {commaListsOr} from 'common-tags'\n\ncommaListsOr`\n  I like ${['apples', 'bananas', 'watermelons']}\n  They're good!\n`\n// I like apples, bananas or watermelons\n// They're good!\n```\n\n#### `commaListsAnd`\n\nAllows you to inline an array substitution as a comma-separated list, the last of which is preceded by the word \"and\":\n\n```js\nimport {commaListsAnd} from 'common-tags'\n\ncommaListsAnd`\n  I like ${['apples', 'bananas', 'watermelons']}\n  They're good!\n`\n// I like apples, bananas and watermelons\n// They're good!\n```\n\n#### `oneLineCommaLists`\n\nAllows you to inline an array substitution as a comma-separated list, and is rendered out on to a single line:\n\n```js\nimport {oneLineCommaLists} from 'common-tags'\n\noneLineCommaLists`\n  I like ${['apples', 'bananas', 'watermelons']}\n  They're good!\n`\n// I like apples, bananas or watermelons They're good!\n```\n\n#### `oneLineCommaListsOr`\n\nAllows you to inline an array substitution as a comma-separated list, the last of which is preceded by the word \"or\", and is rendered out on to a single line:\n\n```js\nimport {oneLineCommaListsOr} from 'common-tags'\n\noneLineCommaListsOr`\n  I like ${['apples', 'bananas', 'watermelons']}\n  They're good!\n`\n// I like apples, bananas or watermelons They're good!\n```\n\n#### `oneLineCommaListsAnd`\n\nAllows you to inline an array substitution as a comma-separated list, the last of which is preceded by the word \"and\", and is rendered out on to a single line:\n\n```js\nimport {oneLineCommaListsAnd} from 'common-tags'\n\noneLineCommaListsAnd`\n  I like ${['apples', 'bananas', 'watermelons']}\n  They're good!\n`\n// I like apples, bananas and watermelons They're good!\n```\n\n## Advanced Usage\n\n### Tail Processing\n\nIt's possible to pass the output of a tagged template to another template tag in pure ES2015+:\n\n```js\nimport {oneLine} from 'common-tags'\n\noneLine`\n  ${String.raw`\n    foo\n    bar\\nbaz\n  `}\n`\n// \"foo bar\\nbaz\"\n```\n\nWe can make this neater. Every tag `common-tags` exports can delay execution if it receives a function as it's first argument. This function is assumed to be a template tag, and is called via an intermediary tagging process before the result is passed back to our tag. Use it like so (this code is equivalent to the previous code block):\n\n```js\nimport {oneLine} from 'common-tags'\n\noneLine(String.raw)`\n  foo\n  bar\\nbaz\n`\n// \"foo bar\\nbaz\"\n```\n\n### Using Tags on Regular String Literals\n\nSometimes you might want to use a tag on a normal string (e.g. for stripping the indentation). For that purpose just call a tag as a function with the passed string:\n\n```js\nimport {stripIndent} from 'common-tags'\n\nstripIndent(\"  foo\\n    bar\")\n// \"foo\\n  bar\"\n```\n\n### Type Definitions\n\nThere are third-party type definitions for `common-tags` on [npm](https://www.npmjs.com/package/@types/common-tags). Just install them like so:\n\n```sh\nnpm install @types/common-tags\n```\n\nPlease note that these type definitions are not officially maintained by the authors of\n`common-tags` - they are maintained by the TypeScript community.\n\n### Make Your Own Template Tag\n\n`common-tags` exposes an interface that allows you to painlessly create your own template tags.\n\n#### Class is in Session: TemplateTag\n\n`common-tags` exports a `TemplateTag` class. This class is the foundation of `common-tags`. The concept of the class works on the premise that transformations occur on a template either when the template is finished being processed (`onEndResult`), or when the tag encounters a string (`onString`) or a substitution (`onSubstitution`). Any tag produced by this class supports [tail processing](#tail-processing).\n\nThe easiest tag to create is a tag that does nothing:\n\n```js\nimport {TemplateTag} from 'common-tags'\n\nconst doNothing = new TemplateTag()\n\ndoNothing`foo bar`\n// 'foo bar'\n```\n\n#### The Anatomy of a Transformer\n\n`TemplateTag` receives either an array or argument list of `transformers`. A `transformer` is just a plain object with three optional methods - `onString`, `onSubstitution` and `onEndResult` - it looks like this:\n\n```js\n{\n  onString (str) {\n    // optional. Called when the tag encounters a string.\n    // (a string is whatever's not inside \"${}\" in your template literal)\n    // `str` is the value of the current string\n  },\n  onSubstitution (substitution, resultSoFar) {\n    // optional. Called when the tag encounters a substitution.\n    // (a substitution is whatever's inside \"${}\" in your template literal)\n    // `substitution` is the value of the current substitution\n    // `resultSoFar` is the end result up to the point of this substitution\n  },\n  onEndResult (endResult) {\n    // optional. Called when all substitutions have been parsed\n    // `endResult` is the final value.\n  }\n}\n```\n\n#### Plugin Transformers\n\nYou can wrap a transformer in a function that receives arguments in order to create a dynamic plugin:\n\n```js\nconst substitutionReplacer = (oldValue, newValue) => ({\n  onSubstitution(substitution, resultSoFar) {\n    if (substitution === oldValue) {\n      return newValue\n    }\n    return substitution\n  }\n})\n\nconst replaceFizzWithBuzz = new TemplateTag(substitutionReplacer('fizz', 'buzz'))\n\nreplaceFizzWithBuzz`foo bar ${\"fizz\"}`\n// \"foo bar buzz\"\n```\n\n> **note** - if you call `new TemplateTag(substitutionReplacer)`, `substitutionReplacer` will automatically be initiated with no arguments.\n\n#### Plugin Pipeline\n\nYou can pass a list of transformers, and `TemplateTag` will call them on your tag in the order they are specified:\n\n```js\n// note: passing these as an array also works\nconst replace = new TemplateTag(\n  substitutionReplacer('fizz', 'buzz'),\n  substitutionReplacer('foo', 'bar')\n)\n\nreplace`${\"foo\"} ${\"fizz\"}`\n// \"bar buzz\"\n```\n\nWhen multiple transformers are passed to `TemplateTag`, they will be iterated three times - first, all transformer `onString` methods will be called. Once they are done processing, `onSubstitution` methods will be called. Finally, all transformer `onEndResult` methods will be called.\n\n#### Returning Other Values from a Transformer\n\nThis is super easy. Transformers are just objects, after all. They have full access to `this`:\n\n```js\nconst listSubs = {\n  onString(str) {\n    this.ctx = this.ctx || { strings: [], subs: [] }\n    this.ctx.strings.push(str);\n    return str\n  },\n  onSubstitution(sub, res) {\n    this.ctx.subs.push({ sub, precededBy: res })\n    return sub\n  },\n  onEndResult(res) {\n    return this.ctx\n  }\n}\n\nconst toJSON = {\n  onEndResult(res) {\n    return JSON.stringify(res, null, 2)\n  }\n}\n\nconst log = {\n  onEndResult(res) {\n    console.log(res)\n    return res\n  }\n}\n\nconst process = new TemplateTag([listSubs, toJSON, log])\n\nprocess`\n  foo ${'bar'}\n  fizz ${'buzz'}\n`\n// {\n//  \"strings\": [\n//    \"\\n  foo \",\n//    \"\\n  foo bar\\n  fizz \",\n//    \"\\n\" \n//  ],\n//  \"subs\": [\n//    {\n//      \"sub\": \"bar\",\n//      \"precededBy\": \"\\n  foo \"\n//    },\n//    {\n//      \"sub\": \"buzz\",\n//      \"precededBy\": \"\\n  foo bar\\n  fizz \"\n//    }\n//  ]\n// }\n```\n\n#### List of Built-in Transformers\n\nSince `common-tags` is built on the foundation of this TemplateTag class, it comes with its own set of built-in transformers:\n\n##### `trimResultTransformer([side])`\n\nTrims the whitespace surrounding the end result. Accepts an optional `side` (can be `\"start\"` or `\"end\"` or alternatively `\"left\"` or `\"right\"`) that when supplied, will only trim whitespace from that side of the string.\n\n##### `stripIndentTransformer([type='initial'])`\n\nStrips the indents from the end result. Offers two types: `all`, which removes all indentation from each line, and `initial`, which removes the shortest indent level from each line. Defaults to `initial`.\n\n##### `replaceResultTransformer(replaceWhat, replaceWith)`\n\nReplaces a value or pattern in the end result with a new value. `replaceWhat` can be a string or a regular expression, `replaceWith` is the new value.\n\n##### `replaceSubstitutionTransformer(replaceWhat, replaceWith)`\n\nReplaces the result of all substitutions (results of calling `${ ... }`) with a new value. Same as for `replaceResultTransformer`, `replaceWhat` can be a string or regular expression and `replaceWith` is the new value.\n\n##### `replaceStringTransformer(replaceWhat, replaceWith)`\n\nReplaces the result of all strings (what's not in `${ ... }`) with a new value. Same as for `replaceResultTransformer`, `replaceWhat` can be a string or regular expression and `replaceWith` is the new value.\n\n##### `inlineArrayTransformer(opts)`\n\nConverts any array substitutions into a string that represents a list. Accepts an options object:\n\n```js\nopts = {\n  separator: ',', // what to separate each item with (always followed by a space)\n  conjunction: 'and', // replace the last separator with this value\n  serial: true // should the separator be included before the conjunction? As in the case of serial/oxford commas\n}\n```\n\n##### `splitStringTransformer(splitBy)`\n\nSplits a string substitution into an array by the provided `splitBy` substring, **only** if the string contains the `splitBy` substring.\n\n## How to Contribute\n\nPlease see the [Contribution Guidelines](contributing.md).\n\n## License\n\nMIT. See [license.md](license.md).\n\n## Other ES2015 Template Tag Modules\n\nIf `common-tags` doesn't quite fit your bill, and you just can't seem to find what you're looking for - perhaps these might be of use to you?\n\n- [tage](https://www.npmjs.com/package/tage) - make functions work as template tags too\n- [is-tagged](https://www.npmjs.com/package/is-tagged) - Check whether a function call is initiated by a tagged template string or invoked in a regular way\n- [es6-template-strings](https://www.npmjs.com/package/es6-template-strings) - Compile and resolve template strings notation as specified in ES6\n- [t7](https://github.com/trueadm/t7) - A light-weight virtual-dom template library\n- [html-template-tag](https://www.npmjs.com/package/html-template-tag) - ES6 Tagged Template for compiling HTML template strings.\n- [clean-tagged-string](https://www.npmjs.com/package/clean-tagged-string) - A simple utility function to clean ES6 template strings.\n- [multiline-tag](https://www.npmjs.com/package/multiline-tag) - Tags for template strings making them behave like coffee multiline strings\n- [deindent](https://www.npmjs.com/package/deindent) - ES6 template string helper for deindentation.\n- [heredoc-tag](https://www.npmjs.com/package/heredoc-tag) - Heredoc helpers for ES2015 template strings\n- [regx](https://www.npmjs.com/package/regx) - Tagged template string regular expression compiler.\n- [regexr](https://www.npmjs.org/package/regexr) - Provides an ES6 template tag function that makes it easy to compose regexes out of template strings without double-escaped hell.\n- [url-escape-tag](https://www.npmjs.com/package/url-escape-tag) - A template tag for escaping url parameters based on ES2015 tagged templates.\n- [shell-escape-tag](https://www.npmjs.com/package/shell-escape-tag) - An ES6+ template tag which escapes parameters for interpolation into shell commands.\n- [sql-tags](https://www.npmjs.com/package/sql-tags) - ES6 tagged template string functions for SQL statements.\n- [sql-tag](https://www.npmjs.com/package/sql-tag) - A template tag for writing elegant sql strings.\n- [sequelize-sql-tag](https://www.npmjs.com/package/sequelize-sql-tag) - A sequelize plugin for sql-tag\n- [pg-sql-tag](https://www.npmjs.com/package/pg-sql-tag) - A pg plugin for sql-tag\n- [sql-template-strings](https://www.npmjs.com/package/sql-template-strings) - ES6 tagged template strings for prepared statements with mysql and postgres\n- [sql-composer](https://www.npmjs.com/package/sql-composer) - Composable SQL template strings for Node.js\n- [pg-template-tag](https://www.npmjs.com/package/pg-template-tag) - ECMAScript 6 (2015) template tag function to write queries for node-postgres.\n- [digraph-tag](https://www.npmjs.com/package/digraph-tag) - ES6 string template tag for quickly generating directed graph data\n- [es2015-i18n-tag](https://www.npmjs.com/package/es2015-i18n-tag) - ES2015 template literal tag for i18n and l10n translation and localization\n"}});
//# sourceMappingURL=149.f8d5e4fe.chunk.js.map