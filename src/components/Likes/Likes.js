import React from 'react';
import './Likes.css';
import Card from '../Card/Card';

function Likes({onFilterClick, onCardClick, onCardLike, onCardDelete, cardsAmount, cards}) {
    console.log('LIKES')
    // console.log(cards)
    const [isHide, setHide] = React.useState(false);
   
    // const cardsMaxQuanity = 10;

    // const newCards = cards.slice(0,cardsMaxQuanity);
    // console.log(newCards)

    // for (var card of cards) {
    //     console.log(card)
    // }
    


    function test(){
        // setHide(()=> isHide === false ? true : false)
        // console.log('loading more')
        console.log(cards)
    }

    function test2(){
        // console.log(cards)
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
            
            <section className="filter">
                <h2 className="filter__title">FFFFFFFFFFFFF</h2>

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

export default Likes;