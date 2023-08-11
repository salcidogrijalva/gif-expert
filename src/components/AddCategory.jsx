import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (event) => setInputValue(event.target.value);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length >= 2){
            onNewCategory(inputValue.trim());
            setInputValue('');
        }
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>{inputValue}</h1>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    );
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}