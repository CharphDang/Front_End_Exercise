# react-redux

1. 本质上就是Context的运用，封装出来了Provider和connect等组件和方法。

2. 知识点
    - 函数组件中，想使用和类组件中一样的this.forceUpdate()，可以使用自定义hook，在其中运用useReducer 或者 useState来返回更新函数（forceUpdate），然后再其对应的函数组件中引用即可。
    - 函数组件中， useSelector 和 useDispatch 封装，内部也是调用了useContext, 获取到其中的store，在分别处理state 和 dispatch
    - Provider 和 connect 的 Context 要保持一致，所以 react-redux 和 my-react-redux 要切换的话，在入口处和使用处需要同时更换
    - connect 和 useDispatch 中使用 useLayoutEffect，而不是useEffect，是因为 useEffect是DOM渲染完毕后，在一个延迟事件中调用的，万一延迟的过程中将，store发生了改变， 那么此时组件还未订阅，自然不会更新，会引发致命bug。 所以使用useLayoutEffect，它会在DOM发生改变的时候，直接进行调用，不用等浏览器渲染绘制完成，更加及时。
    - 任何使用订阅（subscribe）的地方，都需要定义解绑订阅的服务(unsubscribe)， 它是由 subscribe 返回的函数