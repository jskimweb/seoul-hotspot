import Modal from "react-modal";
import styled from "styled-components";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const CongestionModal = ({
  isModalOpened,
  closeModal,
}: {
  isModalOpened: boolean;
  closeModal: () => void;
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.25)",
      zIndex: 1000,
    },
    content: {
      width: windowWidth < 768 ? "100vw" : "50vw",
      height: windowWidth < 768 ? "100vh" : "50vh",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "1rem",
      padding: "1rem",
    },
  };

  return (
    <Modal
      isOpen={isModalOpened}
      onRequestClose={closeModal}
      style={modalStyle}
    >
      <Header>
        <Title>혼잡도</Title>
        <CloseButton onClick={closeModal}>
          <X size={20} />
        </CloseButton>
      </Header>
      <Body>모달 바디</Body>
    </Modal>
  );
};

export default CongestionModal;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const CloseButton = styled.button`
  padding: 0.3rem;
  border-radius: 0.5rem;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Body = styled.div`
  padding: 1rem;
`;
