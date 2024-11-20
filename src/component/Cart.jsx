import { cartItems } from "../cartItems";
import { CartItemCard } from "./CartItemCard";
export { Cart };

function Cart() {
  const allItemPriceTotal = () => {
    return Math.round(cartItems.reduce((total, item) => total + item.priceTotal, 0)*100)/100;
  }

  if (cartItems.length === 0) return <p>There is currently no item in the cart.</p>

  return (
    <>
      <div className="cart-items-container">
        {cartItems.map((item, index) => {
          return <CartItemCard key={item.name + index + item.amount} name={item.name} amount={item.amount} priceTotal={item.priceTotal}/>
        })}
      </div>
      <footer className="cart-items-footer">
        <span>Price Total: ${allItemPriceTotal()}</span>
        <button>Checkout</button>
      </footer>
    </>
  )
}