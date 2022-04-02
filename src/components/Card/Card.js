import React from 'react';
import './Card.css';

function Card({ film, onCardClick, onCardLike, onCardDelete, filtred }) {
    console.log('CARDS')
    console.log(film.likes)
    const [isLiked, setLike] = React.useState(film.likes);
    
    // const likes = {status: false};
    // film.likes = likes;

    function handleClick() {
        onCardClick(film);
    }
     
    function handleLike() {
        setLike(() => film.likes === false ? true :  false);
        onCardLike(film);
    }

    React.useEffect(() => {
        film.likes = isLiked

        // if ( film.likes !== true){
        //     console.log("5")
        //     film.likes = isLiked
        // }
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