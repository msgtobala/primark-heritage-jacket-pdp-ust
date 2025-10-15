import React from 'react';

// Import all product images
import recommendation1 from '../assets/images/recommendations/recommendations-1.png';
import recommendation2 from '../assets/images/recommendations/recommendations-2.png';
import recommendation3 from '../assets/images/recommendations/recommendations-3.png';
import recommendation4 from '../assets/images/recommendations/recommendations-4.png';
import recommendation5 from '../assets/images/recommendations/recommendations-5.png';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  colors?: string[];
  selectedColor?: string;
}

const Recommendations: React.FC = () => {
  const products: Product[] = [
    {
      id: '1',
      name: 'The Stronghold Padded Canvas Jacket',
      price: '£40',
      image: recommendation1
    },
    {
      id: '2',
      name: 'Heritage Canvas Jacket',
      price: '£35',
      image: recommendation2
    },
    {
      id: '3',
      name: 'Button-Up Canvas Jacket',
      price: '£30',
      image: recommendation3
    },
    {
      id: '4',
      name: 'The Stronghold Zip-Up Canvas Jacket',
      price: '£35',
      image: recommendation4,
      selectedColor: 'Blue'
    },
    {
      id: '5',
      name: 'Patch Pocket Canvas Jacket',
      price: '£35',
      image: recommendation5
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 4k:px-container-x">
        {/* Section Title */}
        <h2 className="text-[#0E1422] font-medium text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-8 md:mb-12">
          Recommended for you
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              {/* Product Image Container */}
              <div className="relative bg-[#F6F6F6] rounded-lg overflow-hidden mb-4 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Color Selection for Beanie - Inside the card */}
                {product.colors && (
                  <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                    <span className="text-[#0E1422] text-sm font-regular">{product.selectedColor}</span>
                    <div className="flex gap-1">
                      {product.colors.map((color, index) => (
                        <button
                          key={index}
                          className={`w-4 h-4 rounded-full border-2 ${
                            index === 0 ? 'border-[#0E1422]' : 'border-gray-300'
                          }`}
                          style={{ backgroundColor: color }}
                          aria-label={`Color option ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Add Button */}
                <button className="absolute bottom-4 bg-transparent right-4 w-8 h-8 flex items-center justify-center transition-shadow duration-200">
                  <span className="material-icons-outlined text-[#0E1422] text-lg">add</span>
                </button>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="text-[#000000] font-normal text-sm lg:text-base">
                  {product.name}
                </h3>
                
                <p className="text-[#000000] text-sm lg:text-base">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;