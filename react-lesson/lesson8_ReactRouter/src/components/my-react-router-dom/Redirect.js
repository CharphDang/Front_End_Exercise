import React, { Component } from 'react';
import { RouterContext } from './RouterContext';
import LifeCycle from './LifeCycle';
// export default class Redirect extends Component {
//     render() {
//         return (
//             <RouterContext.Consumer>
//                 {context => {
//                     const { history } = context;
//                     const { to, push = false } = this.props;
//                     return (
//                         <LifeCycle
//                             onMount={() => {
//                                 push ? history.push(to) : history.replace(to);
//                             }}
//                         />
//                     );
//                 }}
//             </RouterContext.Consumer>
//         );
//     }
// }

// * 个人实现， 本质原理还是LifeCycel上去做跳转 ，只是少一层组件包裹
export default class Redirect extends Component {
    static contextType = RouterContext;
    componentDidMount() {
        const { history } = this.context;
        const { to, push = false } = this.props;
        push ? history.push(to) : history.replace(to);
    }
    render() {
        return null;
    }
}
