export default function CategoryName({
  numProducts,
  sortingOption,
  setSortingOption,
  selectedCategory,
}) {
  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
  };

  return (
    <div className="category-container">
      <p>
        {selectedCategory ? selectedCategory : 'All products'}
        <small> (products: {numProducts})</small>
      </p>
      <select value={sortingOption} onChange={handleSortingChange}>
        <option value="a-z">Alphabetical a-z</option>
        <option value="z-a">Alphabetical z-a</option>
        <option value="ascPrice">Price ascending</option>
        <option value="descPrice">Price descending</option>
      </select>
    </div>
  );
}
