import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = function (entry) {
    setItems((items) => [...items, entry]);
  };

  const handleDeleteItems = function (id) {
    setItems((items) => items.filter((i) => i.id !== id));
  };

  const handleUpdateItem = function (id) {
    setItems((items) =>
      items.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i))
    );
  };
  const handleClearList = function () {
    const confirm = window.confirm("Are you sure to remove all items ?");
    if (confirm) setItems([]);
  };

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleUpdateItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
