import React from 'react';
import './Likes.css';
import Card from '../Card/Card';

function Likes({handleShowMorePosts, onCardClick, onCardLike, onCardDelete, cards}) {
    console.log('LIKES')

    const [isHide, setHide] = React.useState(false);
    // const [newCards, setCards] = React.useState([]);

    function test(){
        // setHide(()=> isHide === false ? true : false)
        // console.log('loading more')
        console.log(cards)
    }

    function isLiked(card) {
        if (card.likes === true){
            return card
        }
    }
    
    const newCards = cards.filter((card)=>card.likes === true );
    console.log(newCards)


    function test2(){
        // setCards(cards.map((card)=>card.likes === true ? card : []))
        // // console.log(cards)
        console.log(newCards)
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

            
            <section className='load'>
                <button
                    type="button" aria-label="показать еще"
                    className={hideButton}
                    onClick={test2}
                >LAOD MORE</button>
            </section>

            <section className='elements'>
                <ul className="elements__table">
                    {newCards.map((film, index) => (
                        
                            <Card
                                key={index}
                                film={film}
                                onCardClick={onCardClick}
                                onCardLike={onCardLike}
                                onCardDelete={onCardDelete}
                                handleShowMorePosts = {handleShowMorePosts}
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