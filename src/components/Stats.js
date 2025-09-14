export default function Stats({ items }) {
  if (items.length === 0) {
    return <p className="stats">Add items in you list 🤔</p>;
  }

  let totalItems = items.length;
  let packedItems = items.filter((i) => i.packed === true).length;
  let percentage = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      {percentage !== 100 ? (
        <em>
          You have {totalItems} items on your list, you have packed{" "}
          {packedItems} items ({percentage}%)
        </em>
      ) : (
        <em>You got everything 🚀</em>
      )}
    </footer>
  );
}
