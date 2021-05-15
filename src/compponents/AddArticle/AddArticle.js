import React,{ useContext, useState } from 'react';
import { ArticleContext } from '../../context/articleContext';
import "./AddArticle.css";

const AddArticle = () => {
    const { saveArticle } = useContext(ArticleContext)
    const [ article, setArticle ] = useState();

    const handleArticleData = e => {
        setArticle({
            ...article,
            [e.target.id]: e.target.value
        });
    };

    const addNewArticle = e => {
        e.preventDefault();
        saveArticle(article);

        document.getElementById("AddArticleForm").reset();//clear form data
    }
    

    return ( 
        <form onSubmit = {addNewArticle} className="add-article" id="AddArticleForm">
            <input type="text" id="title" placeholder="Title" 
            onChange={handleArticleData}></input>

            <input type="text" id="body" placeholder="Body"  
            onChange={handleArticleData}></input>

            <button >Add article</button>
        </form>
     );
}
 
export default AddArticle;