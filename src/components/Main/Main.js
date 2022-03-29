import React from 'react';
import './Main.css';
import Card from '../Card/Card';

function Main({onFilterClick, onCardClick, onCardLike, onCardDelete, cards}) {

    const [isHide, setHide] = React.useState(false);

    function test(){
        setHide(()=> isHide === false ? true : false)
    }

    const hideButton = `filter__button ${isHide? 'filter__button_hide' : 'filter__button'}`;
    
    return (
        <main className="content">
            <section className="filter">
                <h2 className="filter__title">あなたの好きなアニメを選択してください</h2>
                <button
                    type="button" aria-label="фитровать фото"
                    className={hideButton}
                    onClick={test}
                ></button>
            </section>  


            <section className='elements'>
                <ul className="elements__table">
                    {cards.map((film) => (
                        
                            <Card
                                key={film.id}
                                film={film}
                                onCardClick={onCardClick}
                                onCardLike={onCardLike}
                                onCardDelete={onCardDelete}
                                filtred = {isHide}
                            />
                        )
                    )}
                </ul>
            </section>
        </main>
    );
}

export default Main;