interface CheckBoxProps {
  checked: boolean;
  onClick: () => void;
}

const CheckBox = ({ checked, onClick }: CheckBoxProps) => {
  return (
    <div
      onClick={onClick}
      className={`h-6 w-6 rounded-full border-2 ${checked ? 'border-blue bg-blue' : 'border-blue'} hover:border-blue-dark ${checked ? 'hover:bg-blue-dark' : ''}`}>
      {checked && (
        <div className='flex h-full w-full items-center justify-center text-white'>
          ✓
        </div>
      )}
    </div>
  );
};

export default CheckBox;
