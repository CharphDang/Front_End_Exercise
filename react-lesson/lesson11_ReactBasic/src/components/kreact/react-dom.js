// vnode 虚拟dom节点
// node 真实dom节点

/**
 * @author Charph Dang
 * @param {*} vnode
 * @param {*} container
 * @description // ReactDom.render 中的饿render方法。
 * @return {*}
 */
function render(vnode, container) {
    console.log('vnode', vnode, container); //sy-log

    // step1 : vnode->node
    const node = createNode(vnode);
    //step2: container.appnedChild(node)
    container.appendChild(node);
}

/**
 * @author Charph Dang
 * @param {*} vnode
 * @description 将vnode创建成真实的dom节点
 * @return {*}
 */
function createNode(vnode) {
    const { type, props } = vnode;
    const { children, ...restProp } = props;
    let node = null;
    // todo vnode->node

    if (typeof type === 'string') {
        node = createNativeNode(type, children);
    } else if (typeof type === 'function') {
        node = type.prototype.isReactComponent
            ? createClassComponent(type, props)
            : createFunctionComponent(type, props);
    } else {
        node = createFragment(children);
    }
    addAttributeToNode(node, restProp);
    return node;
}

/**
 * @author Charph Dang
 * @param {*} type
 * @param {*} children string(text), array([]vnode), object(vnode)
 * @param {*} restProp
 * @description
 * @return {*}
 */
function createNativeNode(type, children) {
    const node = document.createElement(type);
    if (typeof children === 'string') {
        node.textContent = children;
    } else {
        reconcileChildren(node, children);
    }
    return node;
}

/**
 * @author Charph Dang
 * @param {*} node
 * @param {*} children
 * @description 将children节点渲染出来append到父节点上
 * @return {*}
 */
function reconcileChildren(node, children) {
    if (Array.isArray(children)) {
        children.forEach(vnode => {
            render(vnode, node);
        });
    } else {
        render(children, node);
    }
}

/**
 * @author Charph Dang
 * @param {*} type
 * @param {*} props
 * @description 创建函数组件， 就是执行函数， 拿到vnode之后，再创建node
 * @return {*}
 */
function createFunctionComponent(type, props) {
    const vnode = type(props);
    const node = createNode(vnode);
    return node;
}

/**
 * @author Charph Dang
 * @param {*} type
 * @param {*} props
 * @description 创建类组件，先new 一个实例， 然后执行render函数， 拿到vnode之后，再创建node
 * @return {*}
 */
function createClassComponent(type, props) {
    const instance = new type(props);
    const vnode = instance.render();
    const node = createNode(vnode);
    return node;
}

/**
 * @author Charph Dang
 * @param {*} props
 * @param {*} children
 * @description 创建一个文档片段，然后将其子节点渲染出来。 最后返回这个文档片段。
 * @return {*}
 */
function createFragment(children) {
    // * 源码中现在没有用createDocumentFragment，而是用的fiber节点
    const fragment = document.createDocumentFragment();
    reconcileChildren(fragment, children);
    return fragment;
}

/**
 * @author Charph Dang
 * @param {*} restProp 除去children之外的props对象
 * @description
 */
function addAttributeToNode(node, restProp) {
    Object.keys(restProp).forEach(prop => {
        // * 并不是直接将属性渲染到原生节点上，只是挂载属性
        // node.setAttribute(prop, restProp[prop]);
        node[prop] = restProp[prop];
    });
}

export default { render };
