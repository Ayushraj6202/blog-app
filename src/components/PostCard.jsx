import React,{ useEffect, useId, useState } from "react";
import { forwardRef } from "react";
import { Link } from 'react-router-dom'
import authService from "../appWrite/configure";

function PostCard({ $id,title,featuredImage }) {

    const [url , setUrl] = useState('')
    useEffect(()=>{
        authService.getFilePreview(featuredImage).then((data)=>{
            console.log(data.pathname);
            setUrl(data.href)
        })
    },[])
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    
                    <img src={url} height={100} width={100} alt={title}
                    className='rounded-xl' />
    
                </div>
                <h2
                className='text-xl font-bold'
                >{title}</h2>
            </div>
        </Link>
      )
}
export default PostCard;