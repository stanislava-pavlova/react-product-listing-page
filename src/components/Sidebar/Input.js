export default function Input({ handleChange, value, title, name, color }) {
  return (
    <label className="sidebar-label">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="check" style={{ backgroundColor: color }}></span> {title}
    </label>
  );
}
