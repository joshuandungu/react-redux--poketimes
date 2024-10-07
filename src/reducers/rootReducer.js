const initState = {
    
        posts: [
            { id: '1', title: 'Squirtle laid an egg', body:'lorem ipsum...'},
            { id: '2', title: 'I am in party', body:'lorem ipsum...'},
            { id: '3', title: 'Love learning', body:'lorem ipsum...'}
        ]
}


const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id

        })
        return {
            ...state,
            post: newPosts
        }
    }
    return state;
}
export default rootReducer;