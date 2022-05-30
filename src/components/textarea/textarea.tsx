import React, {useState} from 'react';
import './textarea.css'
type TextareaProps = {
  rows:number
  cols:number
  id:string
  placeholder:string
  label:string

};

export const NameTextarea = ({rows,cols,id,placeholder,label}: TextareaProps) => {


    const [TextareaValue, setTextareaValue] = useState('')
    
    const handleChange = (event: { target: { value: any; }; }) => {
      setTextareaValue(event.target.value)
    }
      
  
    const handleSubmit = (event: { preventDefault: () => void; }) => {
      alert('Отправленное имя: ' + TextareaValue);
      event.preventDefault();
    }
  
    return (
<form onSubmit={handleSubmit}>
  <label >{label}
    <textarea id={id} rows={rows} cols={cols} value={TextareaValue} placeholder={placeholder} onChange={handleChange} disabled={true}>
      
    </textarea>
  </label>
</form>
    );
  }