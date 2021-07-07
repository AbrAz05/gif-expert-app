import React,{useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputchange = ( e ) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2){
      setCategories(categorias => [inputValue, ...categorias]);
      setInputValue('');
    }
    // console.log('Submit Hecho');
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type = 'text'
        value = { inputValue }
        onChange = { handleInputchange }

        />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
  
}

