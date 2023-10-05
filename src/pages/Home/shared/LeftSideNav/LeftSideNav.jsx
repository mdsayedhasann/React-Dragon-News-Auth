import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2 className='text-2xl font-bold'>
                All Categories
            </h2>
            <div className='mt-4'>
                {
                    categories.map(category => <li className='list-none w-full px-4 py-3 bg-slate-50 mb-1 rounded-md hover:font-bold' key={category.id}> <Link to={`category/${category.id}`} >{category.name}</Link>  </li>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;