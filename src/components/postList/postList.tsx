import { type } from '@testing-library/user-event/dist/type';
import { time } from 'console';
import React, {useCallback, useEffect, useMemo, useState} from 'react'
import { parseIsolatedEntityName } from 'typescript';
import { PostCard } from '../postCard';


type Posts={
    size:string
    cardName:string
    text:string
    img:string
    time:string
}
 

type PostListProps = {
    PostsFrom:any
  
  };


 export const PostList =({PostsFrom}:PostListProps) =>{
    const [posts, setPosts]:any[]= useState([])

    useEffect(() => {
        setTimeout(() => {
            setPosts(PostsFrom)
        }, 1000)
    }, [])



    return(
       <div className='postList'>
           {posts.map(({size,cardName,text,img,time}:Posts) =>(
               <PostCard size={size} cardName={cardName} text={text} img={img} time={time}/>
           ))}
       </div>
    )
 }