import { useState } from 'react';
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillHeart,
} from 'react-icons/ai';

export default function Product({ product }) {
  const { img, newPrice, prevPrice, reviews, rating, title, description } =
    product;
  const [addToFav, setAddToFav] = useState(false);

  function handleAddToFav() {
    setAddToFav(!addToFav);
  }

  const starIcons = Array.from({ length: parseInt(rating) }, (_, index) => (
    <AiFillStar key={index} className="star-icon" />
  ));

  return (
    <div>
      <section className="product">
        <img src={img} alt={title} className="product-img" />
        <div className="product-details">
          <h3 className="product-title">{title}</h3>
          <small className="product-description">{description}</small>
          <section className="product-reviews">
            {starIcons}
            <span className="total-stars">{reviews}</span>
          </section>
          <section className="product-price">
            <div className="price">
              <del>${prevPrice}</del> ${newPrice}
            </div>

            <div className="product-icons">
              <button
                className="product-btn"
                onClick={() => alert('Product added to cart')}
              >
                <AiOutlineShoppingCart />
              </button>

              <button className="product-btn" onClick={handleAddToFav}>
                {!addToFav ? <AiOutlineHeart /> : <AiFillHeart className='fav-btn'/>}
              </button>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
