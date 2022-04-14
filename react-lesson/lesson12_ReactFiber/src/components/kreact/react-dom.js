// vnode 虚拟dom节点
// node 真实dom节点

// 下一个fiber任务
let nextUnitOfWork = null;
// wip  work in progress 正在进行当中的 ，数据结构fiber root
let wipRoot = null;

// * 执行运行，任务循环
requestIdleCallback(workLoop);

function workLoop(deadline) {
    console.log('第二步会进入requestIdleCallback方法'); // charph-log
    console.log(deadline.timeRemaining(), 'timeRemaining');
    while (nextUnitOfWork && deadline.timeRemaining() > 0) {
        // 执行当前单元任务，并且返回下一个任务
        console.log('第三步进入workloop中，拿到根节点（下一个fiber任务），去执行', nextUnitOfWork); // charph-log
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    }

    // 当没有单元任务执行了，并且存在work in progress的 root， 进行提交
    if (!nextUnitOfWork && wipRoot) {
        // commit
        commitRoot();
    }
}

// 执行单元任务， 参数是fiber节点
function performUnitOfWork(workInProgress) {
    // * 执行当前fiber
    const { type } = workInProgress;
    if (typeof type === 'function') {
        type.prototype.isReactComponent
            ? updateClassComponent(workInProgress)
            : updateFunctionComponent(workInProgress);
    } else {
        // 原生标签
        updateHostComponent(workInProgress);
    }

    // * 返回下一个fiber节点 （王朝的故事）
    let fiber = workInProgress;

    if (fiber.child) {
        return fiber.child;
    }

    while (fiber) {
        if (fiber.sibling) {
            return fiber.sibling;
        }
        fiber = fiber.return;
    }
}

function updateHostComponent(workInProgress) {
    if (!workInProgress.stateNode) {
        workInProgress.stateNode = createNode(workInProgress);
    }

    reconcileChildren(workInProgress, workInProgress.props.children);
}

function updateFunctionComponent(workInProgress) {
    const { type, props } = workInProgress;

    const children = type(props);
    reconcileChildren(workInProgress, children);
}

function updateClassComponent(workInProgress) {
    const { type, props } = workInProgress;
    const instance = new type(props);
    const children = instance.render();
    reconcileChildren(workInProgress, children);
}

// ReactDom.render 中的饿render方法。
function render(vnode, container) {
    console.log('第一步会进入render方法， 为wipRoot和nextUnitOfWork赋值'); // charph-log
    wipRoot = {
        stateNode: container,
        props: { children: vnode }
    };

    nextUnitOfWork = wipRoot;
}

// 将vnode创建成真实的dom节点
function createNode(workInProgress) {
    let node = null;
    const { type, props } = workInProgress;

    if (typeof type === 'string') {
        node = document.createElement(type);
    }

    updateNode(node, props);
    return node;
}

// 更新属性
function updateNode(node, nextVal) {
    Object.keys(nextVal).forEach(k => {
        if (k === 'children') {
            if (typeof nextVal.children === 'string') {
                const textNode = document.createTextNode(nextVal.children);
                node.appendChild(textNode);
                // node.textContent = nextVal.children;
            }
        } else {
            node[k] = nextVal[k];
        }
    });
}

function reconcileChildren(workInProgress, children) {
    console.log('创建当下的workInProgress生成fiber架构', workInProgress); // charph-log
    if (typeof children === 'string') {
        return;
    }
    let newChildren = Array.isArray(children) ? children : [children];
    let previousNewFiber = null;
    newChildren.forEach((child, index) => {
        let newFiber = null;
        newFiber = {
            type: child.type,
            props: child.props,
            child: null,
            sibling: null,
            return: workInProgress,
            stateNode: null
        };

        if (index === 0) {
            workInProgress.child = newFiber;
        } else {
            previousNewFiber.sibling = newFiber;
        }
        previousNewFiber = newFiber;
    });
}

function commitRoot() {
    commotWorker(wipRoot.child);
    wipRoot = null;
}

function commotWorker(workInProgress) {
    if (!workInProgress) {
        return;
    }
    // * step1: commit workInProgress
    let parentNodeFiber = workInProgress.return;
    while (!parentNodeFiber.stateNode) {
        parentNodeFiber = parentNodeFiber.return;
    }

    // 父（祖先）dom节点
    const parentNode = parentNodeFiber.stateNode;
    if (workInProgress.stateNode) {
        parentNode.appendChild(workInProgress.stateNode);
    }

    // step2: commit workInProgress.child
    commotWorker(workInProgress.child);
    // step1: commit workInProgress.sibling
    commotWorker(workInProgress.sibling);
}

export default { render };
