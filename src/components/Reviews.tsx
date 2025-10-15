import React from 'react';

// Import all review images
import review1 from '../assets/images/reviews/review-1.png';
import review2 from '../assets/images/reviews/review-2.png';
import review3 from '../assets/images/reviews/review-3.png';
import review4 from '../assets/images/reviews/review-4.png';

interface Review {
  id: string;
  name: string;
  timeAgo: string;
  rating: number;
  comment: string;
  images: string[];
}

const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      id: '1',
      name: 'Amy T',
      timeAgo: '2 WEEKS AGO',
      rating: 4,
      comment:
        'Bought this for my husband and he loves it. Great fit, sturdy feel, and the sand colour goes with everything.',
      images: [review1],
    },
    {
      id: '2',
      name: 'Michael R',
      timeAgo: '2 WEEKS AGO',
      rating: 4,
      comment: 'Solid everyday jacket. Feels premium for the price. The fabric is thick but still easy to move in.',
      images: [review2],
    },
    {
      id: '3',
      name: 'Justin S',
      timeAgo: '2 WEEKS AGO',
      rating: 4,
      comment:
        'Excellent quality and perfect for layering. I’ve worn it almost daily and it’s holding up really well',
      images: [review3, review4],
    },
    {
      id: '4',
      name: 'Olivia Brown',
      timeAgo: '4 WEEKS AGO',
      rating: 4,
      comment:
        'Love the classic look. The collar detail and stitching make it feel much more expensive than it is.',
      images: [],
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`material-icons-outlined text-sm ${
          index < rating ? 'text-black' : 'text-gray-300'
        }`}
      >
        star
      </span>
    ));
  };

  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 4k:px-container-x">
        {/* Mobile Layout - Stacked */}
        <div className="block lg:hidden">
          <div className="mb-6">
            <p className="text-[#5C5F6A] text-sm font-regular mb-2 uppercase tracking-wide">
              REVIEWS
            </p>
            <h2 className="text-[#0E1422] font-medium text-2xl md:text-3xl mb-6">
              What do our customers think?
            </h2>
          </div>

          {/* Rating Summary */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center">{renderStars(4)}</div>
            <span className="text-[#5C5F6A] text-sm">
              4/5 based on 320 reviews
            </span>
          </div>

          {/* Write Review Button */}
          <button
            className="px-6 py-3 font-regular hover:bg-gray-50 transition-colors mb-8"
            style={{
              border: '1px solid #0E1422',
              borderRadius: '4px',
              color: '#0E1422',
            }}
          >
            Write a review
          </button>

          {/* Reviews for Mobile */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border-b border-gray-100 pb-6 last:border-b-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-[#0E1422] font-medium text-base mb-2">
                          {review.name}
                        </h3>
                        <p className="text-[#5C5F6A] text-xs uppercase tracking-wide">
                          {review.timeAgo}
                        </p>
                      </div>
                      <div className="flex items-center">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <p className="text-[#5C5F6A] text-sm leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                  {review.images.length > 0 && (
                    <div className="flex gap-2 flex-shrink-0">
                      {review.images.map((_, index) => (
                        <div
                          key={index}
                          className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden"
                        >
                          {/* <img
                            src={image}
                            alt={`Review image ${index + 1}`}
                            className="w-full h-full object-cover"
                          /> */}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Two Columns with Vertical Divider */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-16 relative">
            {/* Left Column - Fixed Width */}
            <div className="col-span-4">
              <div className="mb-6">
                <p className="text-[#5C5F6A] text-sm font-regular mb-2 uppercase tracking-wide">
                  REVIEWS
                </p>
                <h2 className="text-[#0E1422] font-medium text-4xl xl:text-5xl mb-6 leading-tight">
                  What do our customers think?
                </h2>
              </div>

              {/* Rating Summary */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center">{renderStars(4)}</div>
                <span className="text-[#5C5F6A] text-sm">
                  4/5 based on 320 reviews
                </span>
              </div>

              {/* Write Review Button */}
              <button
                className="px-6 py-3 font-regular hover:bg-gray-50 transition-colors"
                style={{
                  border: '1px solid #0E1422',
                  borderRadius: '4px',
                  color: '#0E1422',
                }}
              >
                Write a review
              </button>
            </div>

            {/* Vertical Divider Line */}
            <div className="absolute left-1/3 top-0 bottom-0 w-px bg-[#E7E7E7]"></div>

            {/* Right Column - Reviews */}
            <div className="col-span-8">
              {/* Sort By Header */}
              <div className="flex items-center justify-end mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-[#5C5F6A] text-sm font-regular uppercase tracking-wide">
                    SORT BY
                  </span>
                  <button className="flex items-center gap-1 text-[#0E1422] text-sm">
                    <span className="material-icons-outlined text-lg">
                      expand_more
                    </span>
                  </button>
                </div>
              </div>

              {/* Reviews List */}
              <div className="space-y-8">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="pb-8 border-b border-[#E7E7E7] last:border-b-0"
                  >
                    {/* Review Header - Name and Time stacked, Stars on the right */}
                    <div className="flex items-start justify-between mb-4">
                      {/* Left side: Name and Time stacked */}
                      <div>
                        <h3 className="text-[#0E1422] font-medium text-base mb-2">
                          {review.name}
                        </h3>
                        <p className="text-[#5C5F6A] text-xs uppercase tracking-wide">
                          {review.timeAgo}
                        </p>
                      </div>

                      {/* Right side: Stars */}
                      <div className="flex items-center">
                        {renderStars(review.rating)}
                      </div>
                    </div>

                    {/* Review Content - Text and Images in one line */}
                    <div className="flex items-start justify-between gap-6">
                      {/* Review Text */}
                      <div className="flex-1">
                        <p className="text-[#5C5F6A] text-sm leading-relaxed max-w-[85%]">
                          {review.comment}
                        </p>
                      </div>

                      {/* Review Images */}
                      {/* {review.images.length > 0 && (
                        <div className="flex gap-2 flex-shrink-0">
                          {review.images.map((image, index) => (
                            <div
                              key={index}
                              className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden"
                            >
                              <img
                                src={image}
                                alt={`Review image ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )} */}
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="pt-8">
                <button
                  className="text-[#5C5F6A] px-6 py-3 hover:bg-gray-50 transition-colors font-regular"
                  style={{
                    border: '1px solid #B6B7BC',
                    borderRadius: '4px',
                  }}
                >
                  Load more reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
