import { useEffect } from 'react';
import { gsap } from 'gsap';

const SunLight = ({ handleClick }) => {
  useEffect(() => {
    gsap.from('path', {
      opacity: 0,
      ease: 'elastic.out(1, 0.4)',
      stagger: 0.1,
    });
  }, []);
  return (
    <svg
      onClick={handleClick}
      width='24'
      height='24'
      stroke-width='1.5'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        class='sun'
        d='M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z'
        fill='black'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12 23V22'
        stroke='black'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M4 20L5 19'
        stroke='black'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M1 12L2 12'
        stroke='black'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M4 4L5 5'
        stroke='black'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12 2V1'
        stroke='black'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M20 4L19 5'
        stroke='black'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M22 12L23 12'
        stroke='black'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M20 20L19 19'
        stroke='black'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
export default SunLight;
