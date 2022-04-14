const { createContext, useContext } = require('react');

export const Context = createContext();
export const ContextProvider = Context.Provider;

export const useStore = () => {
    const store = useContext(Context);
    return store;
};
