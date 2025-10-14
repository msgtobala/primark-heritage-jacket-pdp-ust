import React, { useState } from 'react';
import ThreeDModel from './ThreeDModel';
import goldVariant from '../assets/images/hero/variants/variant-1.png';

interface ColorOption {
  id: string;
  name: string;
  color: string;
  image: string;
}

const NewThreeDSection: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('black');

  const colorOptions: ColorOption[] = [
    {
      id: 'black',
      name: 'Black',
      color: '#95B8BC',
      image: goldVariant,
    },
    {
      id: 'brown',
      name: 'Brown',
      color: '#D5BBA2',
      image: goldVariant,
    },
    {
      id: 'burgundy',
      name: 'Burgundy',
      color: '#bdb6b6',
      image: goldVariant,
    },
    {
      id: 'gray',
      name: 'Gray',
      color: '#6B7280',
      image: goldVariant,
    },
  ];

  //   const selectedColorOption = colorOptions.find(option => option.id === selectedColor) || colorOptions[0];

  return (
    <div
      className="max-w-container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 4k:px-container-x"
      style={{
        marginBottom: '42px',
      }}
    >
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '800px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        >
          <ThreeDModel />
        </div>

        {/* Header */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            zIndex: 1,
          }}
        >
          <div className="flex items-center justify-between mb-8 lg:mb-2">
            <h1 className="text-[#0E1422] font-medium text-2xl md:text-3xl lg:text-3xl xl:text-3xl">
              <div>Blue Dinosaur Print</div>
              <div>Backpack</div>
            </h1>

            {/* Action Buttons */}
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-[#5C5F6A] hover:text-[#0E1422] transition-colors">
                <span className="material-icons-outlined text-lg">
                  download
                </span>
                <span className="text-sm font-regular hidden sm:inline">
                  Download Instructions
                </span>
              </button>

              <button className="flex items-center gap-2 text-[#5C5F6A] hover:text-[#0E1422] transition-colors">
                <span className="material-icons-outlined text-lg">live_tv</span>
                <span className="text-sm font-regular hidden sm:inline">
                  Video
                </span>
              </button>

              <button className="w-12 h-12 rounded-xl border border-[#E0E0E0] bg-white flex items-center justify-center text-[#5C5F6A] hover:text-[#0E1422] hover:border-[#0E1422] transition-colors">
                <span className="material-icons-outlined text-lg">
                  straighten
                </span>
              </button>

              <button className="w-12 h-12 rounded-xl border border-[#E0E0E0] bg-white flex items-center justify-center text-[#5C5F6A] hover:text-[#0E1422] hover:border-[#0E1422] transition-colors">
                <span className="material-icons-outlined text-lg">
                  photo_camera
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Track image (360°) */}
        {/* <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      >
        <img
          src={trackImage}
          alt="360° rotation track"
          style={{ minHeight: '60px', maxWidth: '600px' }}
        />
      </div> */}

        {/* Color selector */}
        <div
          style={{
            position: 'absolute',
            bottom: '7px',
            left: '0',
            zIndex: 1,
          }}
        >
          <div className="flex flex-col gap-3">
            <span className="text-[#878A92] font-regular text-sm">Colours</span>
            <div className="bg-white rounded-full px-4 py-3 shadow-sm">
              <div className="flex items-center gap-3">
                {colorOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedColor(option.id)}
                    className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                      selectedColor === option.id
                        ? 'border-[#0E1422] scale-110'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                    style={{ backgroundColor: option.color }}
                    aria-label={`Select ${option.name} color`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Buy Now button */}
        <div
          style={{
            position: 'absolute',
            bottom: '7px',
            right: '0',
            zIndex: 1,
          }}
        >
          <button
            className="text-white px-8 py-3 font-medium hover:opacity-90 transition-opacity rounded text-sm"
            style={{
              background:
                'linear-gradient(7.89deg, #05080D -18.2%, #474C57 160.3%)',
            }}
          >
            Buy Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default NewThreeDSection;
