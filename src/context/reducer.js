import { v4 as uuidv4 } from 'uuid';

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ARTICLE":
            return [
                ...state,
                {
                    id: uuidv4(),
                    title: action.article.title,
                    body: action.article.body
                }
            ]
        default:
            return state;
    }
}