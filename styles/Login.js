import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--bs-blue);
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ContainerShadowLogin = styled.div`
  box-shadow: 0px 10px 20px 0px rgba(50, 50, 50, 0.52);
  background-color: var(--bs-white);
  padding: 16px;
  width: 20%;
  border-radius: 8px;
`;

export const ContainerSignIn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #445366;
  font-size: 14px;
  font-weight: 300;
  padding-bottom: 10px;
`;

export const LabelInput = styled.label`
  font-size: 12px;
`;

export const ErrorMessage = styled.span`
  font-size: 13px;
  text-align: center;
  color: var(--bs-danger);
  font-weight: 700;
`;
