import React, { useState } from "react";
import Like from './img/Icon-Thumbs-Up.svg'
import DisLike from './img/Icon-Thumbs-Down.svg'
import Book from './img/Icon-Bookmark.svg'
import Dots from './img/dots.svg'
import './likeBar.css'




export const LikeBar = () => {
    
    const [likeValue, setLikeValue] = useState(0)
    const [dislikeValue, setDislikeValue] = useState(0)
    const [bookValue, setBookValue] = useState(false)
    
    function SetLike(): void{
        setLikeValue(+1)
        setDislikeValue(-1)
    }
    function SetDisLike():void{
        setDislikeValue(+1)
        setLikeValue(-1)
    }
    function more():void{
        alert('А ничего нет')
    }
    function menu():void{
        setBookValue(true)
       
    }

    return (
        <div className='likeBar'>

                <div className='gradeBar'>

                    <button onClick={SetLike} className='gradeButton'>
                        <img src={Like} alt="no"/>
                    </button>

                    <p className="grade">{likeValue > 0 && likeValue}</p>

                    <button onClick={SetDisLike} className='gradeButton'>
                        <img src={DisLike} alt="no" />
                    </button>

                    <p className="grade">{dislikeValue > 0 && dislikeValue}</p> 

                </div>
 
                <div className='gradeBar'>

                <button onClick={menu} className='gradeButton'>
                        <img src={Book} alt="no" />
                    </button>

                    <button onClick={more} className='gradeButton'>
                        <img src={Dots} alt="no" />
                    </button>

                </div>
                
            </div>
    )
}