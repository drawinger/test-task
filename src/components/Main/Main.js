import React from 'react';
import './Main.css';
import Card from '../Card/Card';

function Main({onFilterClick, onCardClick, onCardLike, onCardDelete, cardsAmount, cards}) {

    const [isHide, setHide] = React.useState(false);
   
    // const cardsMaxQuanity = 10;

    // const newCards = cards.slice(0,cardsMaxQuanity);
    // console.log(newCards)

    // for (var card of cards) {
    //     console.log(card)
    // }
    


    function test(){
        setHide(()=> isHide === false ? true : false)
        console.log('loading more')
    }

    function test2(){
        cardsAmount()
    }
    

    const hideButton = `filter__button ${isHide? 'filter__button_hide' : 'filter__button'}`;
    const loadButton = `load__button ${cards.length == 22? 'load__button_hide' : 'load__button'}`;
    
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

            <section className='load'>
                <button
                    type="button" aria-label="показать еще"
                    className={loadButton}
                    onClick={test2}
                >LAOD MORE</button>
            </section>
        </main>
    );
}

export default Main;