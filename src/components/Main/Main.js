import React from 'react';
import './Main.css';
import Card from '../Card/Card';

function Main({onCardClick, onCardLike, onCardDelete, cards}) {

    const [isHide, setHide] = React.useState(false);
    

    return (
        <main className="content">
            <section className="filter">
                <h2 className="filter__title">あなたの好きなアニメを選択してください</h2>
                <button
                    type="button" aria-label="фитровать фото"
                    className="filter__button"
                    // onClick={handleLike}
                ></button>
            </section>  


            <section className="elements">
                <ul className="elements__table">
                    {cards.map((film) => (
                        
                            <Card
                                key={film.id}
                                film={film}
                                onCardClick={onCardClick}
                                onCardLike={onCardLike}
                                onCardDelete={onCardDelete}
                            />
                        )
                    )}

              
                </ul>

            </section>
      

        </main>
    );
}

export default Main;