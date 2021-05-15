import React, { createContext, useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { reducer } from './reducer';

export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {    
    const [articles, dispatch] = useReducer(reducer, [
        { id: 1, title: "post 1", body:"Quisque cursus, metus vitae pharetra" },
        { id: 2, title: "post 2", body:"Quisque cursus, metus vitae pharetra" },
    ]);

    return ( 
        <ArticleContext.Provider value={{ articles, dispatch }}>
            {children}
        </ArticleContext.Provider>
    );
};
 
export default ArticleProvider;