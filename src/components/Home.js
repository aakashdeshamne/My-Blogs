// import React, { useState,useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Index = () => {
 
    const {data:blogs,isPending}=useFetch('http://localhost:8000/blogs ');

    return(
        <div className="home">
            {isPending && <div>Loading Data.....</div>}
        {blogs &&<BlogList blogs={blogs} title="All Blogs!"/> } 
        </div>
    );
     }
export default Index;