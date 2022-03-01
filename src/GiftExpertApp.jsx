import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GiftExpertApp = () => {
    
    const [categories, setCategories] = useState(['Luffy']);

    return <>
        <header>
            <h2>GiftExpertApp</h2>
        </header>
    
        <AddCategory setCategories={ setCategories }/>
        <ol className='grid'>
            {
                categories.map( category =>                    
                    <GiftGrid 
                        key={ category }
                        category={ category }
                    />
                )
            }
        </ol>
    </>;
}
export default GiftExpertApp;
