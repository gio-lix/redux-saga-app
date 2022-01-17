import axios from "axios";

export const getUserPost = {
    async getPost() {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        return data
    },
    async getPostById(postId) {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${postId}/posts`)
        return data
    },
    async getAlbums(id) {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
        return data
    }

    // async getPostId(id) {
    //     const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    //     return data
    // },

}