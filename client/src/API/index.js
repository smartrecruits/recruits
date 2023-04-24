export const getAssessments = () => {
    return fetch('https://dummyjson.com/posts').then(res => res.json())

};

export const getComments = () => {
    return fetch('https://dummyjson.com/comments').then(res => res.json())
};