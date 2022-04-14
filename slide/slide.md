---
marp: true
theme: default
paginate: true
style: |
  section.flex-start {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  section.flex-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
header: ''
footer: 'Charph.Dang@activenetwork.com'
---

<!-- _class: flex-center -->
![bg](./img/bg.jpeg)

# Webpack

- What is webpack ?
- Why use webpack ?


---

<style>
  section.lead h1 {
  text-align: center;
}
</style>
<!-- _class: flex-start -->

# Main configuration

- mode
- entry point
- output
- plugin

---
<!-- _class: flex-start -->

# set correct loader for your special files

- [babel-loader](https://webpack.js.org/loaders/babel-loader/)
- [style-loader](https://webpack.js.org/loaders/style-loader/)
- [less-loader](https://webpack.js.org/loaders/less-loader/)
- [url-loader](https://v4.webpack.js.org/loaders/url-loader/)
- [file-loader](https://v4.webpack.js.org/loaders/file-loader/)
...

---
<!-- _class: flex-start -->
# set needed plugin for your project

- [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/)
- [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin)
- [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)
- [copy-webpack-plugin](https://webpack.js.org/plugins/copy-webpack-plugin/)
- [hard-source-webpack-plugin](https://github.com/mzgoddard/hard-source-webpack-plugin)

---
<!-- _class: flex-start -->

# config dev environment

- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- webpack.HotModuleReplacementPlugin
- [react-hot-loader](https://github.com/gaearon/react-hot-loader)

---
<!-- _class: flex-center -->

# End

## Q/A