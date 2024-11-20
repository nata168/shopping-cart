import { getParamType } from "../getParamType";
import { getCurrentItem } from "../getCurrentItem";

export { CartItemCard };

function CartItemCard({ name, amount, priceTotal }) {
  const currentParam = getParamType(name);
  const currentItem = getCurrentItem(currentParam);

  return (
    <div className="cart-item-card">
      <img className="cart-item-img" src={currentItem.imgPath} />
      <div className="cart-item-right">
        <h1>{name}</h1>
        <section>Item Amount: {amount}</section>
        <section>Price Total: ${priceTotal}</section>
      </div>
    </div>
  )
}