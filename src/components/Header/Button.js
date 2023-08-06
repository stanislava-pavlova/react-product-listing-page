export default function Button({ value, title, onSelectCategory }) {
  return (
    <button onClick={onSelectCategory} value={value} className="buttons">
      {title}
    </button>
  );
}
