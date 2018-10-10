# sample-webpack

## ENV
```
$ npm -v
6.4.1

$ node -v
v8.11.3
```

## COMMAND
```
$ npm run dev
$ npm run prod
```

## Image Process with nodejs
```
$ node src/js/jimp.js
```

## Modules

### CSS
* [style-loader](https://www.npmjs.com/package/style-loader)
* [css-loader](https://www.npmjs.com/package/css-loader)

### SCSS
* [sass-loader](https://github.com/webpack-contrib/sass-loader)

### Image
* [file-loader](https://www.npmjs.com/package/file-loader)
* [image-webpack-loader](https://www.npmjs.com/package/image-webpack-loader)

### csv
* [csv-loader](https://www.npmjs.com/package/csv-loader)
* [papaparse](https://www.npmjs.com/package/papaparse)

### Yaml
* [yaml-loader](https://www.npmjs.com/package/yaml-loader)

### Json(Support for JSON is actually built-in)
* [json-loader](https://www.npmjs.com/package/json-loader)

### Pug
* [pug](https://www.npmjs.com/package/pug)
* [pug-loader](https://www.npmjs.com/package/pug-loader)

### Image Process
* [jimp](https://www.npmjs.com/package/jimp)

### Util
* [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)
* [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)
* [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)
* [optimize-css-assets-webpack-plugin](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin)
* [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)

## TODO
* [ ] Load fontawesome with webpack
* [x] Separate config for development adn production
* [x] Pass args to pug template
* [x] Put css files separate from js files
* [x] Minify CSS
* [x] Minify JS
* [ ] Use CSS Grid
* [ ] Rewrite code following webpack4
* [ ] Debug webpack.config.js
* [ ] Use jimp inside webpack process

## TASK
* [x] [Getting Started](https://webpack.js.org/guides/getting-started/)
* [x] [Asset Management](https://webpack.js.org/guides/asset-management/)
* [x] [DevServer](https://webpack.js.org/configuration/dev-server/)
* [x] [Production](https://webpack.js.org/guides/production/)
* [x] [Mode](https://webpack.js.org/concepts/mode/)

## REF
* [npm package.json 日本語版 取扱説明書](http://liberty-technology.biz/PublicItems/npm/package.json.html)
* [Webpack Module Methods](https://webpack.js.org/api/module-methods/)
* [JSON Example](https://json.org/example.html)
* [CSS Grid Layout を極める！（基礎編）](https://qiita.com/kura07/items/e633b35e33e43240d363)
* [Pug](https://pugjs.org/api/getting-started.html)
* [Pug option](https://pugjs.org/api/reference.html)
* [DefinePlugin](https://webpack.js.org/plugins/define-plugin/)
* [Module not found: Error: Can't resolve 'fs'](https://github.com/webpack-contrib/css-loader/issues/447)
