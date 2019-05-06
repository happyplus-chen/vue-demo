# demo2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### workspaceSetting
``` json
{
    //.vue文件template格式化支持，并使用js-beautify-html插件
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    //js-beautify-html格式化配置，属性强制换行
    //文档：https://github.com/beautify-web/js-beautify#css--html
    "vetur.format.defaultFormatterOptions": {
      "js-beautify-html": {
        "wrap_attributes": "force-aligned"
      }
    },
    //根据文件后缀名定义vue文件类型
    "files.associations": {
      "*.vue": "vue"
    },
    //保存时eslint自动修复错误
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      {
        "language": "vue",
        "autoFix": true
      }
    ],
    "eslint.autoFixOnSave": true,
    "[html]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    // "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    // "typescript.format.insertSpaceBeforeFunctionParenthesis": true
  }
```