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
    title: "Everyday Durability",
    subtitle: 'Built to last. Crafted from sturdy cotton canvas with reinforced seams, this jacket keeps its shape while softening over time – a dependable layer that works as hard as you do.',
    video: '/baby-high-chair.mp4',
    image: detail1,
    backgroundColor: 'bg-[#FFF5EB]',
    isImage: true,
  },
  {
    id: 2,
    title: 'Comfort Meets Function',
    subtitle: 'Mid-weight fabric gives easy movement and all-day comfort. A relaxed fit and practical pockets make it ideal for layering and everyday wear.',
    video: 'toodler-chair.mp4',
    image: detail2,
    backgroundColor: 'bg-[#E1FBFF]',
    isImage: true,
  },
  {
    id: 3,
    title: 'Built for Strength',
    subtitle: 'Made from tough cotton canvas with reinforced seams and sturdy hardware, this jacket is designed to endure everyday wear. Its robust build keeps its shape and character season after season.',
    video: 'modern-high-chair.mp4', 
    image: detail3,
    backgroundColor: 'bg-[#EAE6DB]',
    isImage: true,
  },
];
