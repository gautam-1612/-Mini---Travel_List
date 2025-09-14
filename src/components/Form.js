import { useState } from "react";

export default function Form({ onAddItem }) {
  const [desc, setDesc] = useState("");
  const [option, setOption] = useState(1);

  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    if (!desc) return;

    let entry = {
      description: desc,
      quantity: option,
      id: Date.now(),
      packed: false,
    };

    onAddItem(entry);

    setDesc(() => "");
    setOption(() => 1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip ? 😍</h3>
      <select
        value={option}
        onChange={(e) => setOption(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item ..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
