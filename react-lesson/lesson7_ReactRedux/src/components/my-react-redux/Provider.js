import React from 'react';
import { ContextProvider } from './Context';
function Provider({ store, children }) {
    return (
        <div>
            <ContextProvider value={store}>{children}</ContextProvider>
        </div>
    );
}

export default Provider;
