import React from 'react';
import './Main.css';
import Card from '../Card/Card';

function Main({handleShowMorePosts, onCardClick, onCardLike, onCardDelete, cards}) {
    console.log('MAIN')
    
    const [isHide, setHide] = React.useState(false);

    function test(){
        setHide(()=> isHide === false ? true : false)
    }

    function test2(){
        handleShowMorePosts()
    }

    const hideButton = `filter__button ${isHide? 'filter__button_hide' : 'filter__button'}`;
    
    return (
        <main className="content">

            <section className='load'>
                <button
                    type="button" aria-label="показать еще"
                    className={hideButton}
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
                    {cards.map((film, index) => (
                        
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

export default Main;