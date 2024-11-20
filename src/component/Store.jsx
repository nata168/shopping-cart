import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { StoreItemCard } from "./StoreItemCard";
import { StoreItemPage } from "./StoreItemPage";
import { StoreItemErrorPage } from "./StoreItemErrorPage";
import { storeItems } from "../storeItems";
import { getParamType } from "../getParamType";
export { Store };

function Store() {
  const { nameParam } = useParams();

  const isItemExist = () => {
    for (let i = 0; i < storeItems.length; i++) {
      const processedName = getParamType(storeItems[i].name);
      if (processedName === nameParam) {
        return true;
      }
    }
  };

  return (
    <>
      <Header />
      <main>
        {
          nameParam === undefined ?
            <div className="store-item-cards">
              {storeItems.map((item) => {
                return <StoreItemCard key={item.imgPath} itemImagePath={item.imgPath} itemName={item.name} />
              })}
            </div>
          : isItemExist() ?
            <StoreItemPage param={nameParam} />
          : <StoreItemErrorPage />
        }
      </main>
    </>
  )
}

