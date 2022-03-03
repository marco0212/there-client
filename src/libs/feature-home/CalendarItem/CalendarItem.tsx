import React from "react";
import styled, { css } from "styled-components";
import { Dot } from "../../shared-ui";
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
        {new Array(Math.min(eventCount ?? 0, 3)).fill(null).map((_, index) => (
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
  margin-bottom: 8px;
  width: 20px;
  height: 20px;

  ${(props) =>
    props.isToday &&
    css`
      position: relative;
      color: white;
      z-index: 0;

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
        transform: scale(1.7);
        z-index: -1;
      }
    `}
`;
