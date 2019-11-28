import React, { useContext } from "react"
import { Context } from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

function CartItem({ item, price }) {
  const [hovered, ref] = useHover()
  const {deleteFromCart} = useContext(Context)

  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

  return (
    <div className="cart-item">
      <i 
        ref={ref}
        onClick={() => deleteFromCart(item.id)} 
        className={iconClassName}>
      </i>
      <img src={item.url} alt={`checkout-img-${item.id}`} width="130px" />
      <p>{price}</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
}

export default CartItem;
