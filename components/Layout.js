import React from 'react';
import Head from 'next/head'
import Header from "./Header";

const Layout = ({children, title, keywords, description}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords}/>
                <meta name='description' content={description}/>
            </Head>
            <Header />
            <div>
                {children}
            </div>
        </div>
    );
};

export default Layout;
Layout.defaultProps = {
    title: 'SAGA',
    description: 'Redux-Sage'
}
