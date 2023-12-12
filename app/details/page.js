'use client';
import { useRouter } from 'next/navigation';

const Details = () => {
  const router = useRouter();
  return router.back();
};

export default Details;
