type CheckboxProps = {
  isChecked: boolean;
  onClick(): void;
};
function Checkbox({ isChecked, onClick }: CheckboxProps) {
  if (isChecked)
    return (
      <button
        onClick={onClick}
        className='mr-[1.4rem] cursor-pointer bg-[#A4FFAF]  text-[#18171F] w-[1.25rem] h-[1.25rem] flex justify-center items-center'
      >
        <svg width='14' height='12' xmlns='http://www.w3.org/2000/svg'>
          <path
            stroke='#18171F'
            strokeWidth='3'
            fill='none'
            d='M1 5.607 4.393 9l8-8'
          />
        </svg>
      </button>
    );
  else
    return (
      <button
        onClick={onClick}
        className='mr-[1.4rem] cursor-pointer border-2 border-[#A4FFAF] w-[1.25rem] h-[1.25rem]'
      ></button>
    );
}
export default Checkbox;
