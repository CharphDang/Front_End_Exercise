import { useLayoutEffect } from 'react';
import { useStore } from './Context';
import useForceUpdate from './useForceUpdate';
export default function useDispatch() {
    const store = useStore();
    const { dispatch, subscribe } = store;
    const forceUpdate = useForceUpdate();
    useLayoutEffect(() => {
        const unsubscribe = subscribe(() => {
            forceUpdate();
        });
        return () => {
            unsubscribe();
        };
    }, []);
    return dispatch;
}
