const list = [];
export default function cartReducer(state = [...list], { type, payload }) {
    switch (type) {
        case 'SET':
            return [...payload];
        default:
            return state;
    }
}
