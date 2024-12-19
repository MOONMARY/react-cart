import { useState } from "react";
import CartHeader from "./components/CartHeader.jsx";
import ShopList from "./components/ShoptList.jsx";
import CartInput from "./components/CartInput.jsx";
import BoughtList from "./components/BoughtList.jsx";
import CartFooter from "./components/CartFooter.jsx";

function App() {
  //state: react에서 usestate를 불러온다
  //상태와 상태변경함수가 나타난다
  const [itemList, setItemList] = useState([
    //상태변수(itemList), 상태변경함수(setItemList)에 할당된다
    { id: 1, name: "새우깡", isBought: false },
    { id: 2, name: "포키", isBought: false },
    { id: 3, name: "고래밥", isBought: true },
    { id: 4, name: "콘칩", isBought: false },
  ]);
  //isBought === false 인 것만 필터링
  const shopItems = itemList.filter((item) => !item.isBought);

  const toggleBought = (id) => {
    const newItemList = itemList.map((item) =>
      item.id === id ? { ...item, isBought: !item.isBought } : item
    );
    setItemList(newItemList);
  };

  // id => item 삭제
  const deleteItem = (id) => {
    const newItemList = itemList.filter((item) => item.id !== id);
    setItemList(newItemList);
  };
  return (
    <div>
      <CartHeader />
      <main>
        <section>
          <h2>전체 목록</h2>
          <ul>
            {itemList.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </section>
        <ShopList
          items={shopItems}
          toggleBought={toggleBought}
          deleteItem={deleteItem}
        />

        <CartInput />
        <input type="checkbox" id="show-bought-items" />
        <label>산 물건 보기</label>
        <BoughtList />
      </main>
      <CartFooter />
    </div>
  );
}

export default App;
