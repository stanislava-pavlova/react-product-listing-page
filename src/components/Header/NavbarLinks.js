import Button from './Button';

export default function NavbarLinks({ onSelectCategory, isOpen }) {
  return (
    // <div className="products-nav">
    <div  className={`products-nav ${isOpen ? 'open' : ''}`}>
      <Button
        onSelectCategory={onSelectCategory}
        value=""
        title="All products"
      />
      <Button onSelectCategory={onSelectCategory} value="Nike" title="Nike" />
      <Button
        onSelectCategory={onSelectCategory}
        value="Adidas"
        title="Adidas"
      />
      <Button onSelectCategory={onSelectCategory} value="Puma" title="Puma" />
    </div>
  );
}
