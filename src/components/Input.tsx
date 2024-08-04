interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter: () => void;
}

const Input = ({ placeholder, value, onChange, onEnter }: InputProps) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
          onEnter();
        }
      }}
      className='w-full rounded-lg bg-gray-300 p-4 text-gray-100 placeholder:text-gray-300'
    />
  );
};

export default Input;
