
import React from "react";

import "./App.css";
import "./components/Button/Button.css";
import { Button } from "./components/Button";
import iconLike from "./components/Icon/Up.svg"
import iconBook from "./components/Icon/Bookmark.svg"
import iconDisLike from "./components/Icon/Down.svg"




function App() {
  return (
    <div className="App">

      <Button text=''  onClick = {()=> console.log('Text')} className='buttonLike' disabled={false} image={iconLike} />
      <Button text=''  onClick = {()=> console.log('Text')} className='buttonDisLike' disabled={false} image={iconDisLike}  />
      <Button text='Button with icon'  onClick = {()=> console.log('Text')} className='buttonWithIcon' disabled={false} image={iconBook}  />
      <Button text='Secondary 2'  onClick = {()=> console.log('Text')} className='secondary2' disabled={false}  />
      <Button text='Secondary'  onClick = {()=> console.log('Text')} className='secondary' disabled={false}  />
      <Button text='Primary'  onClick = {()=> console.log('Text')} className='primary' disabled={false}  />
    </div>
  );
}

export default App;
