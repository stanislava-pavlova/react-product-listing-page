import Input from './Input';

export default function Rating({ handleChange }) {
  return (
    <div className='filter'>
      <h2 className="filter-title">Rating</h2>

      {/* <label className="sidebar-label">
        <input onChange={handleChange} type="radio" value="" name="rating" />
        <span className="check"></span> All
      </label> */}

      <Input handleChange={handleChange} value="" title="All" name="rating" />
      <Input handleChange={handleChange} value={5} title="5" name="rating" />
      <Input handleChange={handleChange} value={4} title="4" name="rating" />
      <Input handleChange={handleChange} value={3} title="3" name="rating" />
      <Input handleChange={handleChange} value={2} title="2" name="rating" />
      <Input handleChange={handleChange} value={1} title="1" name="rating" />
    </div>
  );
}
