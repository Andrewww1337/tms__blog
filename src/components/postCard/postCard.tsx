import React from "react";
import { LikeBar } from "./likeBar";
import './postCard.css'

type PostCardProps = {
    size:string
    cardName: string
    text:string
    img:string
    time:string

}
let cardSize=""
let imgSize=""
let contentSize=""
let nameCard=""
let textSize=""
let articleSize=""
 export const PostCard =({size,cardName,text,img,time}: PostCardProps) =>{
    if(size === "big"){
        cardSize="bigCard"
        imgSize="bigImg"
        contentSize="bigContent"
        nameCard="bigName"
        textSize="bigText"
        articleSize="bigArt"
    }else if(size==="medium"){
        cardSize="mediumCard"
        imgSize="mediumImg"
        contentSize="mediumContent"
        nameCard="mediumName"
        textSize="mediumText"
        articleSize="mediumArt"
    }else if(size==="small"){
        cardSize="smallCard"
        imgSize="smallImg"
        contentSize="smallContent"
        nameCard="smallName"
        textSize="smallText"
        articleSize="smallArt"
    }else{
        cardSize=""
        imgSize=""
        contentSize=""
        nameCard=""
        textSize=""
        
        
    }

    return(
       < div className={cardSize}>
           <div className={contentSize}>
           
            <div className={articleSize}>
               <h4 className="time">{time}</h4>
               <h1 className={nameCard}>{cardName}</h1>
               <p className={textSize}>{text}</p>
            </div>
               <img src={img} alt="no" className={imgSize}/>
           </div>
           <LikeBar/>
       </div>
    )
 }