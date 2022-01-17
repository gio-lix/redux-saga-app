import React from 'react';
import Layout from "../components/Layout";
import {wrapper} from "../redux/store";
import {loadDataId, postsFetchDataById} from "../redux/actions";
import {END} from "redux-saga";
import {useDispatch} from "react-redux";

const Post = () => {
    const dispatch = useDispatch()
    const handleClickPosts = () => {
        dispatch(postsFetchDataById({postId: 1}))
        dispatch(postsFetchDataById({postId: 1}))
        dispatch(postsFetchDataById({postId: 1}))
        dispatch(postsFetchDataById({postId: 1}))
        dispatch(postsFetchDataById({postId: 1}))
    }
    return (
        <Layout>
            <div>
                <h1>Posts</h1>
            </div>
            <div className='flex justify-center mt-20'>
                <button onClick={handleClickPosts} className='w-36 h-10 bg-indigo-500 text-white font=semibold'>Add Post</button>
            </div>
        </Layout>
    );
};

export default Post;
// export const getStaticProps = wrapper.getStaticProps(store => async (ctx ) => {
//     store.dispatch(postsFetchDataById(1))
//     store.dispatch(END)
//     await store.sagaTask.toPromise()
// })
