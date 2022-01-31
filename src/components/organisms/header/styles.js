import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 60px;
  position: fixed;
  width: 100%;
  z-index: 20;
  align-items: center;
  background-color: var(--bs-cyan);
  padding: 0 10%;
  top: 0;
  box-shadow: 0px 3px 20px 0px rgba(50, 50, 50, 0.52);
  justify-content: space-between;
`;

export const Logo = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: white;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkLogout = styled.a`
  color: white;

  &:hover {
    opacity: 0.8;
  }
`;
