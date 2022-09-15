import styled from 'styled-components';

export const Range = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  background: ${(props) =>
    `linear-gradient(to right,
        #A4FFAF 0%,
         #A4FFAF ${props.value}%,
          #18171F ${props.value}%,
           #18171F 100% )`};
  height: 0.5rem;
  ::-webkit-slide-thumb {
    -webkit-appearance: none;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background-color: #e6e5ea;
    border: none;
    box-shadow: none;
    &:hover,
    :active {
      background-color: #18171f;
      border: 2px solid #a4ffaf;
    }
  }
  ::-moz-range-thumb {
    -moz-appearance: none;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background-color: #e6e5ea;
    box-shadow: none;
    border: none;
    &:hover,
    :active {
      background-color: #18171f;
      border: 2px solid #a4ffaf;
    }
  }
`;

export const Container = styled.div`
  background-color: #24232c;
  /* width: 33.75rem; */
  /* padding: 1.18rem 2rem; */
  color: #e6e5ea;
`;
