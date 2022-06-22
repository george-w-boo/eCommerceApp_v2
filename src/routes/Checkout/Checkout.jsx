import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart, removeCartItem } = useContext(CartContext);

  const handleDecrement = product => {
    console.log('product quantity', product.quantity);
    if (product.quantity <= 1) {
      return;
    };

    removeItemFromCart(product);
  };

  return (
    <div>
      {cartItems.map(product => (
        <div className="" key={product.id}>
          <h2>{product.name}</h2>
          <img src="" alt={product.name} />
          <span onClick={() => handleDecrement(product)}><b>decrement</b></span>
          <span>{product.quantity}</span>
          <span onClick={() => addItemToCart(product)}><b>increment</b></span>
          <span>{product.price}</span>
          <span onClick={() => removeCartItem(product)}>DELETE_ITEM</span>
        </div>
      ))}
    </div>
  )
}

export default Checkout;
