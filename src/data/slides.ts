import detail1 from '../assets/images/details/detail-1.png';
import detail2 from '../assets/images/details/detail-2.png';
import detail3 from '../assets/images/details/detail-3.png';

export interface CarouselSlide {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  video?: string;
  image?: string;
  isImage: boolean;
  backgroundColor: string;
}

export const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "Attention to Detail",
    subtitle: 'Every element matters — from the smooth collar finish to the precision stitching. Designed for comfort that feels effortless and craftsmanship that lasts.',
    video: '/baby-high-chair.mp4',
    image: detail1,
    backgroundColor: 'bg-[#FFF5EB]',
    isImage: true,
  },
  {
    id: 2,
    title: 'Effortless Fit',
    subtitle: 'Structured yet easy to wear, this layer combines balanced proportions with a clean silhouette. Made to move with you — wherever the day takes you.',
    video: 'toodler-chair.mp4',
    image: detail2,
    backgroundColor: 'bg-[#E1FBFF]',
    isImage: true,
  },
  {
    id: 3,
    title: 'Built with Intention',
    subtitle: 'Thoughtfully constructed with reinforced seams and timeless shape retention. A design that holds its form and character, season after season.',
    video: 'modern-high-chair.mp4', 
    image: detail3,
    backgroundColor: 'bg-[#EAE6DB]',
    isImage: true,
  },
];
