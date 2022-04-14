import { useStore } from './Context';

export default function useSelector(selector) {
    const store = useStore();
    const { getState } = store;
    return selector(getState());
}
