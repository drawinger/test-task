import React from 'react';
import './Main.css';
import Card from '../Card/Card';

function Main({onFilterClick, onCardClick, onCardLike, onCardDelete, cards}) {

<<<<<<< Updated upstream
    const [isHide, setHide] = React.useState(false);
=======

function Main({onCardClick, onCardLike, onCardDelete,handleShowMorePosts,  cards,  }) {
    console.log('MAIN')
    const [isHide, setHide] = React.useState(false);
    const [count, setCount] = React.useState(0);
   
>>>>>>> Stashed changes

    function test(){
        setHide(()=> isHide === false ? true : false)
    }

<<<<<<< Updated upstream
=======
    function test2(){
        handleShowMorePosts()
    }



>>>>>>> Stashed changes
    const hideButton = `filter__button ${isHide? 'filter__button_hide' : 'filter__button'}`;
    
    return (
        <main className="content">

            <section className='load'>
                <button
                    type="button" aria-label="показать еще"
                    className={loadButton}
                    onClick={test2}
                >LAOD MORE</button>
            </section>


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
<<<<<<< Updated upstream
                    {cards.map((film) => (
                        
=======
                    {cards.map((film, index) => (
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
        </main>
    );
}

export default Main;