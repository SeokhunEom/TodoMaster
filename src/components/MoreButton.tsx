import type { SVGProps } from 'react';

interface MoreButtonProps {
  onClick: () => void;
}

const MoreButton = ({ onClick }: MoreButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='flex h-6 w-6 animate-bounce items-center justify-center rounded text-gray-300 hover:bg-gray-400 hover:text-blue'>
      <IconamoonArrowDown2Bold width='1.2em' height='1.2em' />
    </button>
  );
};

export function IconamoonArrowDown2Bold(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}>
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2.5}
        d='m7 10l5 5m0 0l5-5'></path>
    </svg>
  );
}

export default MoreButton;
