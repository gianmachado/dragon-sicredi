import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 60px;
  position: fixed;
  width: 100%;
  z-index: 20;
  align-items: center;
  background-color: var(--bs-cyan);
  padding-left: 24px;
  top: 0;
  box-shadow: 0px 3px 20px 0px rgba(50, 50, 50, 0.52);
`;

export const Logo = styled.span`
  font-weight: 700;
  font-size: 20px;
`;
