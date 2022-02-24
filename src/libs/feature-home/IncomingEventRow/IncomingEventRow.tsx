import { differenceInCalendarDays, format, isToday } from "date-fns";
import styled, { css } from "styled-components";
import { bind } from "../../utils-structure";
import { useIncomingEventRow } from "./useIncomingEventRow";

export const IncomingEventRow = bind(
  useIncomingEventRow,
  ({
    title,
    descriptionValue,
    saveDescription,
    reservedAt,
    isSelected,
    toggleOpenDialog,
  }) => {
    return (
      <EventRow selected={isSelected}>
        <Header onClick={toggleOpenDialog}>
          <DayCounter highlight={isToday(new Date(reservedAt))}>
            {isSelected
              ? `${format(new Date(reservedAt), "yy년 M월 d일")}`
              : `D-${
                  differenceInCalendarDays(new Date(reservedAt), new Date())
                    ? differenceInCalendarDays(new Date(reservedAt), new Date())
                    : "day"
                }`}
          </DayCounter>
          <EventTitle>{title}</EventTitle>
        </Header>
        {isSelected && (
          <Content className="py-10">
            <DescriptionInput
              placeholder="이벤트 설명을 적어주세요"
              value={descriptionValue}
              onChange={saveDescription}
            />
          </Content>
        )}
      </EventRow>
    );
  }
);

const EventRow = styled.li<{ selected: boolean }>`
  border: 1px solid rgb(229, 229, 229);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  align-items: flex-start;
  min-height: 0px;
  transition: min-height 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${(props) =>
    props.selected &&
    css`
      border-color: rgb(200, 200, 200);
      min-height: 200px;
    `}
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  padding: 20px 15px;
`;

const Content = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

const DayCounter = styled.div<{ highlight?: boolean }>`
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  color: rgb(0, 0, 0);
  margin-right: 12px;
`;

const EventTitle = styled.p`
  font-size: 16px;
  line-height: 26px;
`;

const DescriptionInput = styled.textarea`
  border: 0;
  resize: none;
  width: 100%;
  font-size: 14px;
  color: #757575;
  outline: none;
  flex: 1;
  background: none;
`;
