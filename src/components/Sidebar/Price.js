import Input from './Input';

export default function Price({ handleChange }) {
  return (
    <div className='filter'>
      <h2 className="filter-title price-title">Price</h2>

      <Input handleChange={handleChange} value="" title="All" name="price" />

      <Input
        handleChange={handleChange}
        value={0}
        title="$0 - $50"
        name="price"
      />

      <Input
        handleChange={handleChange}
        value={50}
        title="$50 - $100"
        name="price"
      />

      <Input
        handleChange={handleChange}
        value={100}
        title="Over $100"
        name="price"
      />
    </div>
  );
}
