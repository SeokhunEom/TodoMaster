import type { SVGProps } from 'react'

interface DeleteButtonProps {
  onClick: () => void
}

const DeleteButton = ({ onClick }: DeleteButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='flex h-6 w-6 items-center justify-center rounded text-gray-300 hover:bg-gray-400 hover:text-danger'>
      <PhTrashBold width='1.2em' height='1.2em' />
    </button>
  )
}

export function PhTrashBold(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 256 256'
      {...props}>
      <path
        fill='currentColor'
        d='M216 48h-36V36a28 28 0 0 0-28-28h-48a28 28 0 0 0-28 28v12H40a12 12 0 0 0 0 24h4v136a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V72h4a12 12 0 0 0 0-24M100 36a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v12h-56Zm88 168H68V72h120Zm-72-100v64a12 12 0 0 1-24 0v-64a12 12 0 0 1 24 0m48 0v64a12 12 0 0 1-24 0v-64a12 12 0 0 1 24 0'></path>
    </svg>
  )
}

export default DeleteButton
