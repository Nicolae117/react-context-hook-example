import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {    
    const [articles, setArticles] = useState([
        { id: 1, title: "post 1", body:"Quisque cursus, metus vitae pharetra" },
        { id: 2, title: "post 2", body:"Quisque cursus, metus vitae pharetra" },
    ])

    const saveArticle = article => {
        

        const newArticle = {
            id: uuidv4(),
            title: article.title,
            body: article.body
        };

        console.log(newArticle.body);

        setArticles([ ...articles, newArticle ]);

        
    };

    return ( 
        <ArticleContext.Provider value={{ articles, saveArticle }}>
            {children}
        </ArticleContext.Provider>
     );
}
 
export default ArticleProvider;