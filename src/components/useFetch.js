import { useState,useEffect } from "react";
const useFetch = (url) => {
    const [data,setData]=useState(null);
    const [isPending,setisPending]=useState(true);
    useEffect(()=>{
        const abortCont=new AbortController();
        setTimeout(()=>{
            fetch(url,{signal:abortCont.signal})
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setData(data); 
            setisPending(false);
        })
        .catch(err=>{
            if(err.name==='AbortError'){
                console.log('fetch aborted');
            }
        })
        }, 5000)
        return()=>abortCont.abort();
    },[url])
    return {data,isPending}
}
export default useFetch;
 
