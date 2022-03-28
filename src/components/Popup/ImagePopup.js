import React from 'react';
import './Popup.css';

function ImagePopup({film, onClose}) {
    
    return (
        <div className={`popup popup_images ${film.image ? "popup_opened" : "" }`}>

            <div className="popup__content popup__content_image">
                <button type="button" aria-label="закрыть попап" className="popup__close popup__close_image" onClick={onClose}></button>
                <figure>
                    <img src={film.image} alt={film.title} className="popup__image"/>
                    <figcaption className="popup__title">{film.title}</figcaption>
                </figure>
            </div>
                
        </div>
    );
}

export default ImagePopup;