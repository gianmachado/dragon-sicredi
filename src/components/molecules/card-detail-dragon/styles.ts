import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 20px 15px;
  height: max-content;
  align-items: center;
  gap: 4px;
  display: flex;
  flex-direction: column;
`;

export const ContainerFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerOut = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 13px;
  margin-bottom: 5px;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 8px;
  border: solid 1px rgb(192, 192, 192, 0.5);
  border-radius: 4px;
  font-size: 13px;
`;

export const TextArea = styled.textarea`
  padding: 8px;
  border: solid 1px rgb(192, 192, 192, 0.5);
  border-radius: 4px;
  font-size: 13px;
`;

export const LabelRequired = styled.span`
  color: red;
`;
