import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header className='px-10 bg-green-50'>
            <nav className='w-full h-14 '>
                <ul className='h-full flex space-x-10 items-center'>
                    <li>
                        <Link href='/' >
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/albums' >
                            <a>Albums</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/posts' >
                            <a>Posts</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
