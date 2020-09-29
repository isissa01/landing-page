import React from 'react';
import './Section.css'


function Section({title, description, buttonText, image, labelText, imageFirst, lightBg}) {
    return (
        <div className={['section', lightBg? 'light_bg' : ''].join(' ')}>

            
            <div className={['section_inner', imageFirst? 'image_first': ''].join(' ')} >
                <div className="section_text">
                    <p className="text_label">{labelText}</p>
                    <h2 className="text_title">{title}</h2>
                    <p className="text_description">{description}</p>
    <button className="section_button">{buttonText}</button>
        
                </div>
                <div className="section_image">
                    <img src={image} alt="image"/>
                </div>
            </div>
        </div>
    )
}

export default Section
