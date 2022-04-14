// ! React 17.0 之前的版本， babel会将jsx转义为React.createElement()，会生成一个vnode提供给ReactDom.render函数使用
// * React 17.0 之后的版本， babel直接引入jsx的编译函数进行转换，会生成一个vnode提供给ReactDom.render函数使用
function createElement(type, config, ...children) {
    if (config) {
        delete config.__self;
        delete config.__source;
    }
    // key 、ref 先不考虑
    const props = {
        ...config,
        children
    };

    return {
        type,
        props
    };
}

export default { createElement };
