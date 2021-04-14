import styled from 'styled-components';

export const Container = styled.div`
  background: #bbdefb;
  padding: 2rem;

  div {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1rem 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 100px;
    }

    button {
      font-size: 1rem;
      color: #fff;
      background: #187bcd;
      border: 0;
      padding: 0 2rem;
      border-radius: 0.25rem;
      height: 3rem;
      transition: filter 0.2s;

      :hover {
        filter: brightness(0.9);
      };

      @media(max-width: 495px) {
        font-size: 0.7rem;
      }
    };
  };
`;
