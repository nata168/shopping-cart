import { Link } from "react-router-dom";
import { getParamType } from "../getParamType";

export { StoreItemCard };

function StoreItemCard({ itemImagePath, itemName }) {
  return (
    <Link to={getParamType(itemName)}>
      <div className="store-item-card">
        <img className="store-item-card-img" src={itemImagePath} />
        <p className="store-item-card-name">{itemName}</p>
      </div>
    </Link>
  );
}