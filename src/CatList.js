import React from 'react';

const CatList = props => {
    const catImages = (props.catPics || []).map((cat, idx) => {
        return <li key={idx}><img src={cat.url} alt=""/></li>;
    });
    
    return <ul>{catImages}</ul>; 
}

export default CatList;







