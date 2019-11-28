import React, { useContext } from "react"
import { Context } from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

function Image({ className, img, alt }) {
  const [hovered, ref] = useHover()
  const {toggleFavorite, cartItems, addToCart, deleteFromCart} = useContext(Context)

  const heartIcon = () => {
    if (img.isFavorite) {
      return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-fill favorite"></i>
    } else if (hovered) {
      return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
    }
  }

  const cartIcon = () => {
    if (cartItems.find(item => item.id === img.id)) {
      return <i onClick={() => deleteFromCart(img.id)} className="ri-shopping-cart-fill cart"></i>
    } else if (hovered) {
      return <i onClick={() => addToCart(img)} className="ri-add-circle-line cart"></i>
    }
  }

  return (
    <div 
      ref={ref}
      className={`${className} image-container`}
    >
      <img src={img.url} alt={`article-${alt}`} className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  }),
}

export default Image
