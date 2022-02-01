import { ContainerModal, ContainerModalMain } from "./styles";

type ModalProps = {
  handleClose: () => void;
};

export default function Modal(props: ModalProps) {
  const { handleClose } = props;

  return (
    <ContainerModal>
      <ContainerModalMain>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </ContainerModalMain>
    </ContainerModal>
  );
}
