import { useEffect } from 'react';
import { Container } from '../styles';
function Password({
  password,
  setShowCopied,
  showCopied,
}: {
  password: string;
  showCopied: boolean;
  setShowCopied: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Container className='flex justify-between items-center my-[1.5rem] md:w-[33.75rem]  w-[21.43rem] px-[1rem] py-[1rem] md:py-[1.18rem] md:px-[2rem] '>
      <div
        className={` md:text-[2rem] text-[1.5rem] leading-[1.99rem] md:leading-[2.7rem]  ${
          password ? '' : 'opacity-25'
        }   overflow-ellipsis w-[77%] overflow-hidden`}
      >
        {password || 'P4$5W0rD!'}
      </div>
      <div
        className='text-[#A4FFAF] text-[1.125rem] leading-[1.485rem] flex justify-center items-center '
        onClick={() =>
          navigator.clipboard.writeText(password).then(() => {
            setShowCopied(true);
          })
        }
      >
        <div
          className={`mr-4 transition-opacity ease-in-out  ${
            showCopied ? 'duration-300 opacity-100' : 'duration-700 opacity-0'
          }`}
        >
          COPIED
        </div>

        <svg
          width='21'
          height='24'
          xmlns='http://www.w3.org/2000/svg'
          className='fill-[#A4FFAF]  cursor-pointer hover:fill-[#E6E5EA]'
        >
          <path d='M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z' />
        </svg>
      </div>
    </Container>
  );
}
export default Password;
