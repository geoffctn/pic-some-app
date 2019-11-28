import React, { useState, useEffect } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setAllPhotos(data));
  }, []);

  const toggleFavorite = id => {
    const updatedArr = allPhotos.map(photo => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setAllPhotos(updatedArr)
  };

  const addToCart = (newItem) => {
    setCartItems(prevItem => [...prevItem, newItem])
  }
  
  const deleteFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const emptyCart = () => {
    setCartItems([])
  }

  return <Context.Provider value={{allPhotos, toggleFavorite, cartItems, addToCart, deleteFromCart, emptyCart}}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
