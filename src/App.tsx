import { useEffect, useRef, useState } from 'react';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Password from './components/Password';
import Strength from './components/Strength';
import { StrengthType } from './components/Strength';
import { Range, Container } from './styles';
import generatePassword from './utils';
import { measureStrength } from './utils';
type optionText = {
  type: 'upperCase' | 'lowerCase' | 'numbers' | 'symbols';
  title: string;
};

const optionsText: optionText[] = [
  { type: 'upperCase', title: 'include uppercase letters' },
  { type: 'lowerCase', title: 'include lowercase letters' },
  { type: 'numbers', title: 'include numbers' },
  { type: 'symbols', title: 'include symbols' },
];

function App() {
  const [strength, setStrength] = useState<StrengthType>(3);
  const [characterLength, setCharacterLength] = useState(50);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const oldPassword = useRef(generatedPassword);
  const [options, setOptions] = useState({
    upperCase: true,
    lowerCase: true,
    numbers: true,
    symbols: false,
  });
  const [showCopied, setShowCopied] = useState(false);

  useEffect(() => {
    const charLength = Math.floor(characterLength / 5);
    setStrength(measureStrength(charLength, options));
  }, [options, characterLength]);

  useEffect(
    () => {
      if (oldPassword.current === generatedPassword) {
        let timer1 = setTimeout(() => setShowCopied(false), 3000);

        return () => {
          clearTimeout(timer1);
        };
      } else {
        setShowCopied(false);
        oldPassword.current = generatedPassword;
      }
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    [showCopied, generatedPassword]
  );

  return (
    <main
      className='font-mono h-screen w-screen flex justify-center items-center flex-col'
      style={{
        background: 'linear-gradient(180deg, #14131B 0%, #08070B 100%)',
      }}
    >
      <div className='capitalize text-[1.5rem] leading-8 text-[#817D92]'>
        Password Generator
      </div>
      <Password
        password={generatedPassword}
        setShowCopied={setShowCopied}
        showCopied={showCopied}
      />
      <Container className='md:w-[33.75rem]  w-[21.43rem] px-[1rem] py-[1rem] md:py-[1.18rem] md:px-[2rem] '>
        <div className='flex justify-between items-center mb-[1.56rem]'>
          <div className='text-[1.125rem]'>Character Length</div>
          <div className='text-[#A4FFAF] text-[2rem]'>
            {Math.floor(characterLength / 5)}
          </div>
        </div>
        <Range
          value={characterLength}
          onChange={(e) => setCharacterLength(+e.target.value)}
          className='mb-[2.62rem] md:w-[29.75rem] w-[19.43rem]          '
        />
        <ul className=''>
          {optionsText.map((option) => (
            <li
              key={option.type}
              className='capitalize flex items-center mb-[1.17rem] '
            >
              <Checkbox
                isChecked={options[option.type]}
                onClick={() =>
                  setOptions({
                    ...options,
                    [option.type]: !options[option.type],
                  })
                }
              />
              {option.title}
            </li>
          ))}
        </ul>
        <Strength
          strength={strength}
          setStrength={setStrength}
          setCharacterLength={setCharacterLength}
          setOptions={setOptions}
        />
        <Button
          isDisabled={measureStrength(characterLength, options) === 0}
          onClick={() =>
            setGeneratedPassword(
              generatePassword(Math.floor(characterLength / 5), options)
            )
          }
        />
      </Container>
    </main>
  );
}
export default App;
