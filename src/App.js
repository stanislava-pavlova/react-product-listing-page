import { useState } from 'react';
import { useProduct } from './contexts/ProductContext';

import NavBar from './components/Header/Navbar';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import Product from './components/Main/Product';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader';
import Error from './components/Error';
import CategoryName from './components/Main/CategoryName';

export default function App() {
  const { status, products } = useProduct();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [sortingOption, setSortingOption] = useState('a-z'); // Default sorting option

  const productsPerPage = 6;
  const [displayedProducts, setDisplayedProducts] = useState(productsPerPage);

  const loadMoreProducts = () => {
    setDisplayedProducts(
      (prevDisplayedProducts) => prevDisplayedProducts + productsPerPage
    );
  };

  function handleChangeCategory(e) {
    setSelectedCategory(e.target.value);
  }

  function handleChangeFilter(e) {
    // If the event comes from the Price component
    if (e.target.name === 'price') {
      setSelectedPrice(parseInt(e.target.value));
    }

    // If the event comes from the Rating component
    if (e.target.name === 'rating') {
      setSelectedRating(parseInt(e.target.value));
    }
  }

  function sortProducts(products, sortingOption) {
    const sortedProducts = [...products];

    switch (sortingOption) {
      case 'a-z':
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'z-a':
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'ascPrice':
        sortedProducts.sort((a, b) => a.newPrice - b.newPrice);
        break;
      case 'descPrice':
        sortedProducts.sort((a, b) => b.newPrice - a.newPrice);
        break;
      default:
        break;
    }

    return sortedProducts;
  }

  function filterAndSortProducts(
    products,
    selectedCategory,
    selectedPrice,
    selectedRating,
    sortingOption
  ) {
    let filteredAndSortedProducts = [...products];

    // Selected category filter
    if (selectedCategory) {
      filteredAndSortedProducts = filteredAndSortedProducts.filter(
        ({ company }) => company === selectedCategory
      );
    }

    // Selected rating filter
    if (selectedRating) {
      filteredAndSortedProducts = filteredAndSortedProducts.filter(
        ({ rating }) => rating === selectedRating
      );
    }

    // Selected price filter
    if (selectedPrice !== null) {
      filteredAndSortedProducts = filteredAndSortedProducts.filter(
        ({ newPrice }) => {
          if (selectedPrice === 0) {
            return newPrice <= 50;
          } else if (selectedPrice === 50) {
            return newPrice > 50 && newPrice <= 100;
          } else if (selectedPrice === 100) {
            return newPrice > 100;
          }
          return filteredAndSortedProducts; // when selectedPrice is not 0, 50, or 100
        }
      );
    }

    // Apply sorting
    filteredAndSortedProducts = sortProducts(
      filteredAndSortedProducts,
      sortingOption
    );

    return filteredAndSortedProducts;
  }

  const filteredAndSortedProducts = filterAndSortProducts(
    products,
    selectedCategory,
    selectedPrice,
    selectedRating,
    sortingOption
  );

  const numProducts = filteredAndSortedProducts.length;

  return (
    <div className="App">
      <NavBar onSelectCategory={handleChangeCategory} />
      <Sidebar handleChange={handleChangeFilter} />

      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <>
            <CategoryName
              numProducts={numProducts}
              sortingOption={sortingOption}
              setSortingOption={setSortingOption}
              selectedCategory={selectedCategory}
            />

            <div className="product-container">
              {filteredAndSortedProducts
                .slice(0, displayedProducts)
                .map((product) => (
                  <Product key={product.id} product={product} />
                ))}
            </div>

            {displayedProducts < numProducts && (
              <button className="load-more-btn" onClick={loadMoreProducts}>
                Load More
              </button>
            )}
          </>
        )}
      </Main>

      <Footer />
    </div>
  );
}
