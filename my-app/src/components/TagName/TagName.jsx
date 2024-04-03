import "./TagName.scss"
import React from 'react';


function TagName(props) {
    return (
        <div className="tagName">
            <ul className='tagName__container'>
                {props.tags.map((tag, index) => {
                    return <li className='tag' key={index}>{tag}</li>;
                })}
            </ul>
        </div>
        
    );    
}

export default TagName;