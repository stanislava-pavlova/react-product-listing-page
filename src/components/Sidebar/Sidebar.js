import Price from './Price';
import Rating from './Rating';
import './Sidebar.css';

export default function Sidebar({ handleChange }) {
  return (
    <aside className="sidebar">
      <Price handleChange={handleChange} />
      <Rating handleChange={handleChange} />
    </aside>
  );
}
