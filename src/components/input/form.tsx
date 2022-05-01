
import React, {useState} from 'react';
import './input.css'

type InputProps = {
  inputType:string
  placeholder:string
  disabled:boolean
  label:string

};

export const NameForm = ({inputType ,label, disabled, placeholder}: InputProps) => {



    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState('')
    const handleChange = (event: { target: { value: any; }; }) => {
      setInputValue(event.target.value)
      if (
        (event.target.value).length < 5 
      && inputType==="password"){
        setError('error')
      }else{
        setError('')
      }
    }
  
    
    
    const handleSubmit = (event: { preventDefault: () => any; }) => {
      
      alert('Отправленная строка: ' + inputValue + error);
      event.preventDefault();
     
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          <p className='labelText'>{label}</p>
          <input type={inputType} placeholder={inputType} className={`${inputType} ${error}`} value={inputValue} onChange={handleChange} disabled={disabled}/>
          <p className={error&&'errorP'}>{error}</p>
        </label>
        
      </form>
    );
  }