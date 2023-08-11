import React, {useState} from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Superman']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h2>Gif Expert App (React Demo)</h2>
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />
            <hr />

            {
                categories.map(category => <GifGrid key={category} category={category}></GifGrid>)
            }
        </>
    )
}
