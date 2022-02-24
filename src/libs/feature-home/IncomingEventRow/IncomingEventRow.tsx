import { differenceInCalendarDays, format, isToday } from "date-fns";
import styled, { css } from "styled-components";
import { Dot } from "../../shared-ui";
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
    isUpdated,
  }) => {
    return (
      <EventRow selected={isSelected}>
        <Header onClick={toggleOpenDialog}>
          <HeaderTitle>
            <DayCounter highlight={isToday(new Date(reservedAt))}>
              {isSelected
                ? `${format(new Date(reservedAt), "yy년 M월 d일")}`
                : `D-${
                    differenceInCalendarDays(new Date(reservedAt), new Date())
                      ? differenceInCalendarDays(
                          new Date(reservedAt),
                          new Date()
                        )
                      : "day"
                  }`}
            </DayCounter>
            <EventTitle>{title}</EventTitle>
          </HeaderTitle>
          {isUpdated && <Dot />}
        </Header>
        {isSelected && (
          <Content>
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
  transition: height 0.3s;
  height: 66px;
  overflow: hidden;

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
      height: 150px;
    `}
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  padding: 20px 15px;
`;

const HeaderTitle = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 15px 10px;
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
  line-height: 1.7;
  color: #757575;
  outline: none;
  flex: 1;
  background: none;
`;
