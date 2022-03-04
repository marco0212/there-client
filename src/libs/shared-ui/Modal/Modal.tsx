import styled, { keyframes } from "styled-components";
import ReactDOM from "react-dom";
import { Title } from "../../shared-ui";
import { FC, useCallback, useEffect, useState } from "react";

type OpenerArgs = { openModal(): void };
type CloserArgs = { closeModal(): void };

type ModalProps = {
  opened?: boolean;
  renderOpener?(openerArgs: OpenerArgs): React.ReactElement;
  onClose?(): void;
  title: string;
  children:
    | React.ReactNode
    | React.ReactNode[]
    | ((closerArgs: CloserArgs) => React.ReactNode);
};

export const Modal: FC<ModalProps> = ({
  opened: openedProp,
  title,
  children,
  renderOpener,
  onClose,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const openModal = useCallback(() => {
    setIsOpened(true);
  }, [setIsOpened]);

  const closeModal = useCallback(() => {
    onClose?.();
    setIsOpened(false);
  }, [onClose, setIsOpened]);

  useEffect(() => {
    if (openedProp === undefined) {
      return;
    }

    if (openedProp) {
      openModal();
    } else {
      closeModal();
    }
  }, [openedProp, openModal, closeModal]);

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpened]);

  if (!isOpened) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      {renderOpener?.({ openModal })}
      <Overlay onClick={closeModal} />
      <Container>
        <header className="mb-40">
          <Title level={2} color="black">
            {title}
          </Title>
        </header>
        <div>
          {typeof children === "function" ? children({ closeModal }) : children}
        </div>
      </Container>
    </>,
    document.getElementById("portal") as Element
  );
};

const slideIn = keyframes`
  from {
    bottom: -600px;
  }

  to {
    bottom: 0;
  }
`;

const Container = styled.div`
  animation: ${slideIn} 0.5s forwards;
  position: fixed;
  bottom: -600px;
  left: 0;
  right: 0;
  max-width: 640px;
  width: 100%;
  background-color: white;
  margin: auto;
  border-radius: 10px 10px 0 0;
  padding: 20px 20px 40px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  border: 0;
  border-bottom: 1px solid #eee;
  outline: none;
  padding: 0 0 10px;
  color: #757575;
`;
