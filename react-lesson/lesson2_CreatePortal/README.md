# createPortal 

1. 传送门, 可以将DOM渲染到任意位置：
    > 两个参数， 第一个参数： 想要渲染的DOM元素； 第二个参数： 想要渲染的地方（DOM节点）

    ```jsx
        import {createPortal} from "react-dom";
        render() {
            return createPortal(
                <div className="dialog">
                    <h3>Dialog</h3>
                </div>,
                nodeElement
            );
        }
    ```

 