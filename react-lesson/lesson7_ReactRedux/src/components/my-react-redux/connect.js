import { useContext, useLayoutEffect } from 'react';
import bindActionCreator from './bindActionCreators';
import { Context } from './Context';
import useForceUpdate from './useForceUpdate';

export default function connect(mapStateToProps = state => state, mapDispatchToProps) {
    return Cmp => props => {
        const store = useContext(Context);
        const { getState, dispatch, subscribe } = store;
        const stateProps = { ...mapStateToProps(getState()) };
        // 默认会将 dispatch 传递下去
        let dispatchProps = { dispatch };
        // 适配 object 和 function 的场景分支
        if (typeof mapDispatchToProps === 'object') {
            dispatchProps = bindActionCreator(mapDispatchToProps, dispatch);
        } else if (typeof mapDispatchToProps === 'function') {
            dispatchProps = mapDispatchToProps(dispatch);
        }
        const forceUpdate = useForceUpdate();
        useLayoutEffect(() => {
            const unsubscribe = subscribe(() => {
                forceUpdate();
            });
            return () => {
                unsubscribe();
            };
        }, []);
        return <Cmp {...props} {...stateProps} {...dispatchProps} />;
    };
}
