import styled, { keyframes } from "styled-components";
import { Body, Title } from "../../shared-ui";
import { bind } from "../../utils-structure";
import { PlusButton } from "../PlusButton";
import { useAddEventModal } from "./useAddEventModal";

export const AddEventModal = bind(
  useAddEventModal,
  ({
    opened,
    onClose,
    addEvent,
    titleValue,
    setTitleValue,
    reservedAtValue,
    setReservedAtValue,
    descriptionValue,
    setDescriptionValue,
    loading,
  }) => {
    if (!opened) {
      return null;
    }
    return (
      <>
        <Overlay onClick={onClose} />
        <Modal>
          <Title level={3} color="black" className="mb-40">
            새로운 일정 등록하기
          </Title>

          <Label className="mb-30">
            <Body color="black" weight="bold">
              일정 타이틀
            </Body>
            <Input
              type="text"
              value={titleValue}
              onChange={(e) => setTitleValue(e.currentTarget.value)}
            />
          </Label>

          <Label className="mb-30">
            <Body color="black" weight="bold">
              일정 날짜
            </Body>
            <Input
              type="date"
              value={reservedAtValue}
              onChange={(e) => setReservedAtValue(e.currentTarget.value)}
            />
          </Label>

          <Label className="mb-40">
            <Body color="black" weight="bold">
              일정 설명
            </Body>
            <Input
              type="text"
              value={descriptionValue}
              onChange={(e) => setDescriptionValue(e.currentTarget.value)}
            />
          </Label>

          <PlusButton color="#ff9b44" onClick={addEvent} loading={loading} />
        </Modal>
      </>
    );
  }
);

const slideIn = keyframes`
  from {
    bottom: -600px;
  }

  to {
    bottom: 0;
  }
`;

const Modal = styled.div`
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
  font-size: 14px;
  border: 0;
  border-bottom: 1px solid #eee;
  outline: none;
  padding: 10px 0;
  color: #757575;
`;
