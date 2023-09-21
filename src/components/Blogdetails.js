import {useParams} from "react-router-dom";
import useFetch from "./useFetch";
const Blogdetails = (props) => {
    const {id}=useParams();
    const {data:blog,isPending}=useFetch('http://localhost:8000/blogs/'+id)
    return ( 
        <div className="blog-details">
           {isPending &&<div>Loading Data...</div>}
           {blog &&(
            <article>
                <h2>{blog.title}</h2>
                <p>written by {blog.auther}</p>
                <div>{blog.body}</div>
            </article>
           )}
        </div>
     );
}
 
export default Blogdetails;