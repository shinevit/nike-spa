import { products } from "../data";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <div id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="heading-text">Our
          {' '}<span className="text-accent">popular</span>{' '}products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat
         text-slate-gray">Experience top-notch quality and style with our sought-after
        selections. Discover a world of comfort, design, and value.</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3
      sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 text-black dark:text-white-400">
        {products.map((product) => (
          <PopularProductCard 
            key={product.name}
            {...product}
          />
        ))} 
      </div>
    </div>
  );
};

export default PopularProducts;