import { bind } from "../../utils-structure";
import { Modal, Button, Title } from "../../shared-ui";
import { useAddEventButton } from "./useAddEventButton";
import styled from "styled-components";

export const AddEventButton = bind(
  useAddEventButton,
  ({
    isOpenModal,
    openModal,
    closeModal,
    addEvent,
    titleValue,
    setTitleValue,
    reservedAtValue,
    setReservedAtValue,
    descriptionValue,
    setDescriptionValue,
    loading,
  }) => {
    return (
      <>
        <Button type="plus" color="#b3b3b3" onClick={openModal} full />
        <Modal
          title="새로운 일정 등록하기"
          opened={isOpenModal}
          onClose={closeModal}
        >
          <>
            <Label className="mb-30">
              <Title level={3} className="mb-10" color="black" weight="bold">
                일정 타이틀
              </Title>
              <Input
                type="text"
                value={titleValue}
                onChange={(e) => setTitleValue(e.currentTarget.value)}
              />
            </Label>

            <Label className="mb-30">
              <Title level={3} className="mb-10" color="black" weight="bold">
                일정 날짜
              </Title>
              <Input
                type="date"
                value={reservedAtValue}
                onChange={(e) => setReservedAtValue(e.currentTarget.value)}
              />
            </Label>

            <Label className="mb-40">
              <Title level={3} className="mb-10" color="black" weight="bold">
                일정 설명
              </Title>
              <Input
                type="text"
                value={descriptionValue}
                onChange={(e) => setDescriptionValue(e.currentTarget.value)}
              />
            </Label>

            <Button
              type="plus"
              color="#ff9b44"
              onClick={addEvent}
              loading={loading}
              full
            />
          </>
        </Modal>
      </>
    );
  }
);

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
