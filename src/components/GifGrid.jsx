// External imports
import React from 'react'
// Internal imports
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {isLoading && <p className='animate__animated animate__flash'>Loading...</p>}
            <div className='card-grid'>
                {
                    images.map(image => (
                        <GifGridItem 
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
