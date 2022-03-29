import React from 'react';
import './Card.css';

function Card({ film, onCardClick, onCardLike, onCardDelete, filtred }) {

    const [isLiked, setLike] = React.useState(false);
    
    // const likes = {status: false};
    // film.likes = likes;

    function handleClick() {
        onCardClick(film);
    }
     
    function handleLike() {
        onCardLike(film);
        setLike(() => isLiked == false ? true :  false);
    }

    React.useEffect(() => {
        film.likes = isLiked
      });

    const cardLikeButtonClassName = `element__emotion ${isLiked ? 'element__emotion_active' : 'element__emotion'}`;
    const hideElement = `element ${(filtred && !isLiked)? 'element__hide' : 'element'}`;

    function handleDeleteClick() {
        onCardDelete(film);
    }

    return (

        <li className={hideElement}>
        
            <img 
                src={film.image}
                alt={film.title}
                className="element__image"
                onClick={handleClick}
            />
            
            <button
                type="button" aria-label="удалить карточку"
                className="element__remove"
                onClick={handleDeleteClick}
            ></button>

            <div className="element__description">
                <div className="elemnt__content">
                    <h2 className="element__title">{film.title}</h2>
                    <h3 className="element__subtitle">{film.original_title}</h3>
                </div>
                <div className="element__rate">
                    <button
                        type="button" aria-label="оценить фото"
                        className={cardLikeButtonClassName}
                        onClick={handleLike}
                    ></button>
                </div>
                
            </div>
        </li>
    );
}

export default Card;