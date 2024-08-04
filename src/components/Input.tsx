interface InputProps {
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className='w-full rounded-lg bg-gray-700 p-4 text-gray-100 placeholder:text-gray-300'
    />
  )
}

export default Input
