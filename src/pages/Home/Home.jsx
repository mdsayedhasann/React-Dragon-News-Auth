import React from 'react';
import Header from './shared/Header/Header';
import Navbar from './shared/Navbar/Navbar';
import LeftSideNav from './shared/LeftSideNav/LeftSideNav';
import RightSideNav from './shared/RightSideNav/RightSideNav';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            
            <div className='grid md:grid-cols-4 gap-6 '>
                <div className='border'> <LeftSideNav></LeftSideNav> </div>
                <div className='md:col-span-2 text-center border'> This Is Content </div>
                <div className='shadow-md px-4 py-4 rounded-md'> <RightSideNav></RightSideNav> </div>
            </div>
        </div>
    );
};

export default Home;