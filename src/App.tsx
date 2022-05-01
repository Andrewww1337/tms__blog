import React from 'react';
import './components/input/input.css'

import './App.css';
import { NameForm } from './components/input';
import { NameTextarea } from './components/textarea';
import { PostCard } from './components/postCard';
import Space from './components/postCard/img/Rectangle 39.png'
import SpaceMedium from './components/postCard/img/Rectangle 39  med.png'
import SpaceSmall from './components/postCard/img/Rectangle 39 small.png'
import { PostList } from './components/postList';

const postsFromSer= [
  {
      size:"big",
      cardName:"Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
      text:"Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      img:"https://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
      time:"29 April,2022",


  },
  {
      size:"big",
      cardName:"Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
      text:"Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      img:"https://276709.selcdn.ru/proektoria/professions/2020/04/29/c22abfa379f38b5b0411bc11fa9bf92f/2020-04-29_12-33-02.jpg",
      time:"29 April,2022",


  },{
      size:"big",
      cardName:"Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
      text:"Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      img:"https://naukatehnika.com/files/vse_zhurnaly/2019/12.19/img-6.jpg",
      time:"29 April,2022",


  }
 
]


function App() {
  return (
    <div className="App">

<NameForm inputType="password" placeholder='' label='Password' disabled={false}/>

<NameForm inputType="email" placeholder='' label='Email' disabled={true}/>

<NameForm inputType="text" placeholder='' label='Text' disabled={false}/>

<NameTextarea rows={10} cols={22} id="textarea" placeholder='It was a dark and stormy night...' label='Text Area'/>

<PostCard size='big' 
cardName='Astronauts prep for new solar arrays on nearly seven-hour spacewalk' 
text='Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.' 
img={Space} time='April 20,2021'/>

<PostCard size='medium'
cardName='Astronauts prep for new solar arrays on nearly seven-hour spacewalk' 
text='' 
img={SpaceMedium} time='April 20,2021'/>

<PostCard size='small'
cardName='Astronauts prep for new solar arrays on nearly seven-hour spacewalk' 
text='' 
img={SpaceSmall} time='April 20,2021'/>


<PostList PostsFrom={postsFromSer}/>
    </div>
  );
}

export default App;