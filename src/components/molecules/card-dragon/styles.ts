import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
`;

export const DescriptionID = styled.span`
  padding: 8px;
  border: solid 1px rgb(192, 192, 192, 1);
  border-radius: 4px;
  text-align: center;
  width: 60px;
`;

export const ContainerName = styled.div`
  border-radius: 8px;
  border: solid 1px rgb(192, 192, 192, 0.5);
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 90%;
  margin-top: 15px;
`;

export const LabelName = styled.span`
  font-size: 12px;
  font-weight: 600;
  margin: 4px 8px;
`;

export const DescriptionName = styled.span`
  font-size: 22px;
  font-weight: 600;
  margin: 0 8px;
  color: var(--bs-dark-secondary);
  white-space: nowrap;
  overflow: hidden;
`;

export const ContainerInfo = styled.div`
  margin-top: 10px;
  width: 90%;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const ContainerInfoItem = styled.div`
  display: flex;
  gap: 4px;
  align-items: baseline;
  margin-bottom: 2px;
  border-bottom: 1px solid #f2f2f2;
`;

export const InfoItemCustom = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 4px;
  width: 90%;
  flex-direction: column;
  margin-top: 10px;
  bottom: 0;
`;
