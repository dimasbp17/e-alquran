import { LuBookOpen, LuHeart, LuSparkles, LuSunrise } from 'react-icons/lu';

const menu = [
  {
    href: '#surah',
    icon: LuBookOpen,
    title: "Al-Qur'an",
    description: '114 surah & murottal',
  },
  {
    href: '/doa-harian',
    icon: LuHeart,
    title: 'Doa Harian',
    description: 'Doa untuk keseharian',
  },
  {
    href: '/bacaan-shalat',
    icon: LuSunrise,
    title: 'Bacaan Shalat',
    description: 'Niat & bacaan shalat',
  },
  {
    href: '/asmaul-husna',
    icon: LuSparkles,
    title: 'Asmaul Husna',
    description: '99 nama Allah',
  },
];

export default menu;
