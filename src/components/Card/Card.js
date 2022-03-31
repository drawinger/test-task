import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './Card.css';

function Card({ film, onCardClick, onCardLike, onCardDelete, filtred , likeStatus}) {
    const location = useLocation();
    const isLocationLikes = location.pathname === "/likes";
    const [isLiked, setLike] = React.useState(false);
    const currLikeStatus = isLiked;
    console.log('CARDS')
    // const likes = {status: false};
    // film.likes = likes;

    const duration = +film.running_time;
    // фильмы более ста минут будут отфильтрованы
    const durationForFiltering = 100;

    function handleClick() {
        onCardClick(film);
    }

    function handleLike() {
        onCardLike(film);
        setLike(() => isLiked == false ? true :  false);

        if (!film.likes){
            localStorage.setItem('likedFilm', JSON.stringify(film));
          } else{
            localStorage.removeItem('likedFilm');
          }
    }

    function handleDisLike() {
        onCardLike(film);
        setLike(() => isLiked == true ? false :  true);
        console.log('DISLIKE')
    }

    React.useEffect(() => {
        film.likes = currLikeStatus

        var cat = localStorage.getItem('likedFilm');
        // console.log(film.likes, ' ', JSON.parse(cat))
      },[isLiked]);

    const cardLikeButtonClassName = `element__emotion ${isLiked ? 'element__emotion_active' : 'element__emotion'}`;
    const cardDisLikeButtonClassName = `element__dislike ${isLiked ? 'element__dislike_active' : 'element__dislike'}`;

    const hideElementforLike = `element ${(isLocationLikes && isLiked)? 'element__hide' : 'element'}`;
    const removeElementforLike = `element ${(isLocationLikes && isLiked)? 'element__hide' : 'element'}`;

    const hideElementforDur = `element ${(filtred && !(duration < durationForFiltering))? 'element__hide' : 'element'}`;

    function handleDeleteClick() {
        onCardDelete(film);
    }

    return (

        // <li className={hideElementforDur}>
         <li className={hideElementforLike}> 
        
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
                    <h3 className="element__subtitle">{film.original_title + ' '+duration}</h3>
                    <h3 className="element__subtitle">{}</h3>
                </div>
                {isLocationLikes && (
                    <div className="element__rate">
                        <button
                            type="button" aria-label="оценить фото"
                            className={cardDisLikeButtonClassName}
                            onClick={handleDisLike}
                        ></button>
                    </div>
                )}

                {!isLocationLikes && (
                <div className="element__rate">
                    <button
                        type="button" aria-label="оценить фото"
                        className={cardLikeButtonClassName}
                        onClick={handleLike}
                    ></button>
                </div>
                )}
                
            </div>
        </li>
    );
}

export default Card;