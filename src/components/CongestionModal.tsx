import Modal from "react-modal";
import styled from "styled-components";
import { X } from "lucide-react";
import { type CSSProperties, useEffect, useState } from "react";
import { CONGESTIONS } from "../constants";

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
      display: "flex",
      flexDirection: "column" as CSSProperties["flexDirection"],
      width: windowWidth < 768 ? "90vw" : "50vw",
      height: "fit-content",
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
      <Body>
        {CONGESTIONS.map(({ color, level, message }) => (
          <Item key={level} color={color}>
            <span className="circle" />
            <span className="level">{level}</span>
            <span className="message">{message}</span>
          </Item>
        ))}
        <Notice>
          ※ 혼잡도는 통신사의 실시간 인구 데이터를 분석하여 가공한 것으로, 실제
          현장과는 차이가 있을 수 있음을 알려드립니다.
        </Notice>
      </Body>
    </Modal>
  );
};

export default CongestionModal;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 1rem 1rem;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 1.6rem 8rem 1fr;
  align-items: center;
  gap: 1rem;

  .circle {
    display: inline-block;
    height: 1.6rem;
    border-radius: 50%;
    background: ${({ color }) => color};
  }

  .level {
    display: inline-block;
    font-size: 1.6rem;
    font-weight: bold;
  }

  .message {
    font-size: 1.4rem;
    line-height: 1.5;
    word-break: keep-all;
    color: gray;
  }
`;

const Notice = styled.span`
  font-size: 1.2rem;
  line-height: 1.5;
  color: gray;
  word-break: keep-all;
  margin-top: 1rem;
`;
