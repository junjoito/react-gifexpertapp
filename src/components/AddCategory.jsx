import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setinputValue] = useState('')
    const handleInputChange = (e) =>{
        setinputValue(e.target.value)
    }

    const handleSumit = (e) =>{
        e.preventDefault()
        if(inputValue.trim().length > 1){
            setCategories(item => [ inputValue, ...item])
            setinputValue('');
        }        
    }
    return(
        <form onSubmit={handleSumit}>
        
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                placeholder="Search all the GIFs and Stickers"
            />
        </form>
    )
    
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
};
