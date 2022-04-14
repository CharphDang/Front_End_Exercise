# Context 

1. 主要适用于高阶组件，耗性能，要慎用，不能滥用。

2. 如何使用context

    ```jsx
    // step1 创建一个context对象
    export const UserContext = React.createContext();
    export const UserProvider = UserContext.Provider;
    export const UserConsumer = UserContext.Consumer;
    
    // step2 最外层提供要跨层级传递的数据 Provider （生产者）
    import {UserProvider} from "../Context";
    <UserProvider value={user}>
        <ContextTypePage />
        <UseContextPage />
        <ConsumerPage />
    </UserProvider>
    
    // setp3 哪些组件可以使用context value ，Consumer （消费者）
    // 1） contextType 只能用在类组件当中 , 只能订阅单一的context来源
    // 2） useContext 只能用在函数组件和自定义hook中
    // 3)  Consumer 可以用在函数组件和类组件中，也能订阅多个context来源
    import {UserConsumer} from "../Context";
    <UserConsumer>
        {userContext => <p>user: {userContext.name}</p>}
    </UserConsumer>
    ```

    

3. 函数组件中适用： Hook API `useContext`
    ```js
        import React, {useContext} from "react";
        import {ThemeContext, UserContext} from "../Context";
    
        export default function UseContextPage(props) {
            const {themeColor} = useContext(ThemeContext);
            const {name} = useContext(UserContext);
            return (
                <div className="border">
                <h3 className={themeColor}>UseContextPage</h3>
                <p>user: {name}</p>
                </div>
            );
        }
    
    ```

4. 类组建中适用：` static contextType`
    ```js
    
        import React, {Component} from "react";
        import {ThemeContext, UserContext} from "../Context";
    
        export default class ContextTypePage extends Component {
            static contextType = ThemeContext;
            static contextType = UserContext;
            render() {
                const {themeColor, name} = this.context;
                return (
                <div className="border">
                    天哪
                    <h3 className={themeColor}>ContextTypePage</h3>
                    <p>user: {name}</p>
                </div>
                );
            }
        }
    ```

4.  *contextType* 和 *useContext* 区别
   1. *useContext*  只能用于函数组件或自定义hook中
   2. contextType 只能用于类组件中，并且只能定于单一的context来源
5. *Consumer* 
   1. 可以用在函数组件和类组件中，也能订阅多个context来源

 