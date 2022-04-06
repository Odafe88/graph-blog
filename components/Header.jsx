import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';



const Header = () => {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        getCategories()
            .then((newCategories) => {
                setCategories(newCategories);
            });
    }, []);

    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-purple-400 py-4 lg:py-8">
                <div className="text-center md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-2xl text-purple-700 lg:4xl">
                            GraphBlog
                        </span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {
                        categories.map((category, index) => (
                            <Link key={category.slug} href={`/categories/${category.slug}`}>
                                <span className="md:float-right mt-2.5 align-middle text-white ml-4 font-semibold cursor-pointer">
                                    {category.name}
                                </span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Header