import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  @media(max-width: 495px) {
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;

      @media(max-width: 495px) {
        font-size: 1rem;
      }
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: #fff;
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child{
        color: var(--text-title);
      }

      &.deposit {
        color: #80b280;
      }

      &.withdrawal{
        color: #dc143c;
      }

      @media(max-width: 495px) {
        font-size: 0.8rem;
      }
    }
  }
`;