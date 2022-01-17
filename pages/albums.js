import React from 'react';
import Layout from "../components/Layout";
import {wrapper} from "../redux/store";
import {getAlbumsData} from "../redux/actions";
import {END} from "redux-saga";

const Albums = () => {
    return (
        <Layout>
            <div>
                <p>Albums</p>
            </div>
        </Layout>
    );
};

export default Albums;
export const getStaticProps = wrapper.getStaticProps(store => async (ctx ) => {
    store.dispatch(getAlbumsData(1))
    store.dispatch(END)
    await store.sagaTask.toPromise()
})
