import React from "react";
import styled, { css } from "styled-components";
import { bind } from "../../utils-structure";
import { useCalendarItem } from "./useCalendarItem";

export const CalendarItem = bind(
  useCalendarItem,
  ({ dayOfWeek, date, eventCount, isCurrentDay, isPast }) => (
    <Container>
      <DayOfWeek>{dayOfWeek}</DayOfWeek>
      <Date isPast={isPast} isToday={isCurrentDay}>
        {date}
      </Date>
      <div>
        {new Array(eventCount).fill(null).map((_, index) => (
          <Dot key={index} />
        ))}
      </div>
    </Container>
  )
);

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

const DayOfWeek = styled.span`
  color: #5f5f5f;
  font-size: 16px;
  margin-bottom: 15px;
`;

const Date = styled.b<{ isToday: boolean; isPast: boolean }>`
  display: block;
  color: ${(props) => (props.isPast ? "#b3b3b3" : "black")};
  margin-bottom: 5px;

  ${(props) =>
    props.isToday &&
    css`
      position: relative;
      color: white;
      z-index: 1;

      &:after {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        padding-top: 100%;
        border-radius: 50%;
        background-color: #ffbd84;
        content: "";
        transform: scale(2);
        z-index: -1;
      }
    `}
`;

const Dot = styled.div`
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #ff5600;
`;
