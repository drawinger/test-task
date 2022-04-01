import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ImagePopup from '../Popup/ImagePopup';
import api from '../../utils/Api';
import DeleteCardPopup from '../Popup/DeleteCardPopup';
<<<<<<< Updated upstream
=======
import posts from './postsArray';
import Posts from "../Posts/Posts";


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const postsPerPage = 3;
let arrayForHoldingPosts = [];
>>>>>>> Stashed changes

function App() {



  

  const [isDeleteCardPopup, onDeleteCardPopup] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({image: '', title: ''});
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
<<<<<<< Updated upstream
  const [isLiked, setLike] = React.useState(false);
  const [cardDelete, setCardDelete] = React.useState({});
  const [removePopupButtonText, setRemovePopupButtonText] = React.useState('Да');  
=======
  const [cardsAmount, setCardsAmount] = React.useState(1)
  const [isLiked, setLike] = React.useState(false);
  const [cardDelete, setCardDelete] = React.useState({});
  const [removePopupButtonText, setRemovePopupButtonText] = React.useState('Да');  

>>>>>>> Stashed changes

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

  // React.useEffect(() => {
  //   function handleOverlayClick(evt) {
  //     if (evt.target.classList.contains('popup')) {
  //       closeAllPopups();
  //     }
  //   }
  //   document.addEventListener('mousedown', handleOverlayClick);

  //   return () => {
  //     document.removeEventListener('mousedown', handleOverlayClick);
  //   }

  // },[]);


  // React.useEffect(() => {
  //   function handleEscapeClick(evt) {
  //     if (evt.key ==='Escape') {
  //       closeAllPopups();
  //     }
  //   }
  //   document.addEventListener('keyup', handleEscapeClick);

  //   return () => {
  //     document.removeEventListener('keyup', handleEscapeClick);
  //   }

<<<<<<< Updated upstream
  
  
  React.useEffect(() => {
    Promise.all([api.getInitialCards()])
      .then(([cards]) => {
     
        setCards(cards)
      })
      .catch((err) => {
        console.log(err);
      })

  }, [])
=======
  // },[]);

  // React.useEffect(() => {
  //   Promise.all([api.getInitialCards()])
  //     .then(([cards]) => {
  //       // setCards(cards.slice(0,cardsAmount))
  //       setCards(cards)
  //       cards.map((card) => card.likes = false)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })

  // }, [])

  // localStorage.clear();

  // const loopWithSlice = (start, end) => {
  //   const slicedPosts = cards.slice(start, end);
  //   arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
  //   setPostsToShow(arrayForHoldingPosts);
  // };

  // // console.log('postsToShow ', postsToShow)
  // // console.log('next ', next)

  // React.useEffect(() => {
  //   loopWithSlice(0, postsPerPage);
  // }, []);

  // const handleShowMorePosts = () => {
  //   loopWithSlice(next, next + postsPerPage);
  //   setNext(next + postsPerPage);
  // };
  // // console.log('postsPerPage ', postsPerPage)


  function modifyCardsAmount(){
    console.log('я вызываюсь')
    setCardsAmount(()=> cardsAmount+5)
  }
>>>>>>> Stashed changes

  function handleCardLike(film) {
    console.log(film.likes)
  }


<<<<<<< Updated upstream
  function handleFilterClick(){
 
=======
  function handleFilterClick() {
    
>>>>>>> Stashed changes
  }
    
  function handleCardDelete(card) {
    setRemovePopupButtonText('Удаление...')
    const newCards = cards.filter((evt) => evt.id !== card.id);
<<<<<<< Updated upstream
    setCards(newCards);
=======
    // setCards(newCards.slice(0,cardsAmount))
    setCards(newCards)

>>>>>>> Stashed changes
    localStorage.removeItem(card);
    closeAllPopups();
    setRemovePopupButtonText('Да');
  }

<<<<<<< Updated upstream
  
  return (
    <div className="page">
     
      <Header/>
      <Main
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDeleteClick}
        onFilterClick={handleFilterClick}
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
=======
  const [postsToShow, setPostsToShow] = React.useState([]);
  const [next, setNext] = React.useState(3);

  const loopWithSlice = (start, end) => {
    const slicedPosts = posts.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };

  React.useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };



return (
  <div className="page">
    {/* <Posts 
    postsToRender={postsToShow}
    cards={posts}
    handleClick={handleCardClick}
    handleLike={handleCardLike}
    handleDeleteClick={handleCardDeleteClick}

     /> */}
   
    <BrowserRouter>
  
  <Header/>
    <Routes>
    
    {<Route path="/" element={  
          <Main
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDeleteClick}
            handleShowMorePosts = {handleShowMorePosts}
            cards={postsToShow}
            /> 
            } />
      /* <Route path="likes/*" element={
          <Likes
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDeleteClick}
            onFilterClick={handleFilterClick}
            cardsAmount={modifyCardsAmount}
            cards={cards}
            />
            } /> */}
    </Routes>
  </BrowserRouter>

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
>>>>>>> Stashed changes
}


export default App;