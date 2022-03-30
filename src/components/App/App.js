import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ImagePopup from '../Popup/ImagePopup';
import api from '../../utils/Api';
import DeleteCardPopup from '../Popup/DeleteCardPopup';

function App() {

  const [isDeleteCardPopup, onDeleteCardPopup] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({image: '', title: ''});
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [cardsAmount, setCardsAmount] = React.useState(1)
  const [isLiked, setLike] = React.useState(false);
  const [cardDelete, setCardDelete] = React.useState({});
  const [removePopupButtonText, setRemovePopupButtonText] = React.useState('Да');  


  function handleCardClick(film) {
    setSelectedCard(film);
  }

  function handleCardDeleteClick(film) {
    onDeleteCardPopup(true);
    setCardDelete(film); 
  }

  function closeAllPopups() {
    onDeleteCardPopup(false);
    setSelectedCard({image: '', title: ''});
    setCardDelete({image: '',  title: ''});
  }

  React.useEffect(() => {
    function handleOverlayClick(evt) {
      if (evt.target.classList.contains('popup')) {
        closeAllPopups();
      }
    }
    document.addEventListener('mousedown', handleOverlayClick);

    return () => {
      document.removeEventListener('mousedown', handleOverlayClick);
    }

  },[]);

  React.useEffect(() => {
    function handleEscapeClick(evt) {
      if (evt.key ==='Escape') {
        closeAllPopups();
      }
    }
    document.addEventListener('keyup', handleEscapeClick);

    return () => {
      document.removeEventListener('keyup', handleEscapeClick);
    }

  },[]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards()])
      .then(([cards]) => {
        console.log('вытаскиваю карточки')
        console.log(cards.length)
        setCards(cards.slice(0,cardsAmount))

      })
      .catch((err) => {
        console.log(err);
      })

  }, [cardsAmount])

  function modifyCardsAmount(){
    console.log('я вызываюсь')
    setCardsAmount(()=> cardsAmount+5)

    // // console.log(cards.lenght)
    // // const newCards = cards.slice(cardsAmount,cardsAmount*2)
    // // // console.log(newCards)
    // // return newCards
    
    // // const newCards = cards.slice(0,cardsMaxQuanity);
    // // console.log(newCards)
    // const newCards = [];
    // var counter = 0;
    // for (var card of cards) {
    //     if (counter < cardsAmount) {
    //       newCards.push(card)
    //     }
    //     counter++
    //     setCardsAmount(()=> cardsAmount+cardsAmount)
    // }
    // console.log(newCards)
    // setCards(()=>newCards)
  }

  function handleCardLike(film) {

  }


  function handleFilterClick(){
    
  }
    
  function handleCardDelete(card) {
    setRemovePopupButtonText('Удаление...')
    const newCards = cards.filter((evt) => evt.id !== card.id);
    setCards(newCards);
    localStorage.removeItem(card);
    closeAllPopups();
    setRemovePopupButtonText('Да');
  }



  
  return (
    <div className="page">
     
      <Header/>
      <Main
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDeleteClick}
        onFilterClick={handleFilterClick}
        cardsAmount={modifyCardsAmount}
        cards={cards}
        />
      <Footer/>

      <DeleteCardPopup
        isOpen={isDeleteCardPopup}
        onClose={closeAllPopups}
        onSubmitDeleteCard={handleCardDelete}
        film={cardDelete}
        buttonSubmitText={removePopupButtonText}
      />

      <ImagePopup
        film={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;