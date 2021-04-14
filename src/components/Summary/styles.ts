import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -6rem;

  div {
    background: #fff;
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        @media(max-width: 475px) {
          font-size: 0.8rem;
        }
      }
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 500;

          
      @media(max-width: 650px) {
        font-size: 1.6rem;
      }
      @media(max-width: 560px) {
        font-size: 1.2rem;
      }
      @media(max-width: 475px) {
        font-size: 0.8rem;
      }
    }

    img {
      width: 20px;

      @media(max-width: 475px) {
        width: 10px;
      }
    }

    :nth-of-type(3) {
      background: #80b280;
      color: #fff;
    }
  }
`;
