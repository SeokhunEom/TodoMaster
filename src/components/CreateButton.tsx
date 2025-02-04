import type { SVGProps } from 'react';

interface CreateButtonProps {
  onClick: () => void;
}

const CreateButton = ({ onClick }: CreateButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='flex h-14 min-w-24 items-center justify-center gap-2 rounded-lg bg-blue-dark text-lg font-bold text-gray-100 hover:bg-blue'>
      <div>추가</div>
      <Icons8Plus />
    </button>
  );
};

export function Icons8Plus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 32 32'
      {...props}>
      <path
        fill='currentColor'
        d='M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5m-1 5v5h-5v2h5v5h2v-5h5v-2h-5v-5z'></path>
    </svg>
  );
}

export default CreateButton;
