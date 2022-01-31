import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContainerOut = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
