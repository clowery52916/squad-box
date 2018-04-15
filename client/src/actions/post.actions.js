export function  increment (index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}
export function  addPost (postId, author, comment) {
    return {
        type: 'ADD_POST',
        postId,
        author,
        comment
    }
}

export function editPost (postId, i) {
    return {
        type: 'EDIT_POST',
        postId,
        i
    }
}

export function togglePost (postId, i) {
    return {
        type: 'TOGGLE_POST',
        postId,
        i
    }
}


export function deletePost (postId, i) {
    return {
        type: 'DELETE_POST',
        postId,
        i
    }
}
