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
    title: 'Room for Every Adventure',
    subtitle: 'Spacious inside with smart compartments, this backpack keeps books, snacks, and treasures organized all day.',
    video: '/baby-high-chair.mp4',
    image: detail1,
    backgroundColor: 'bg-[#FFF5EB]',
    isImage: true,
  },
  {
    id: 2,
    title: 'Made for Explorers',
    subtitle: 'Padded straps and roomy compartments make it comfy to carry and easy to organize.',
    video: 'toodler-chair.mp4',
    image: detail2,
    backgroundColor: 'bg-[#E1FBFF]',
    isImage: true,
  },
  {
    id: 3,
    title: 'Built for Little Shoulders',
    subtitle: 'Ergonomic straps distribute weight evenly, making it easier and comfier for kids to carry their essentials.',
    video: 'modern-high-chair.mp4', 
    image: detail3,
    backgroundColor: 'bg-[#EAE6DB]',
    isImage: true,
  },
];
