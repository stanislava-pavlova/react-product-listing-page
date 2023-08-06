import Button from './Button';

export default function NavbarLinks({ onSelectCategory }) {
  return (
    <div className="products-nav">
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
