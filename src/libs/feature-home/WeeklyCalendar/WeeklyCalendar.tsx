import styled from "styled-components";
import { bind } from "../../utils-structure/bind";
import { CalendarItem } from "../CalendarItem";
import { useWeeklyCalendar } from "./useWeeklyCalendar";

export const WeeklyCalendar = bind(
  useWeeklyCalendar,
  ({ loading, error, calendarList }) => {
    if (loading) {
      return <p>loading</p>;
    }

    if (error || !calendarList) {
      return <p>error</p>;
    }

    return (
      <Container>
        {calendarList.map(({ date, eventCount }) => (
          <CalendarItem key={date} date={date} eventCount={eventCount} />
        ))}
      </Container>
    );
  }
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
`;
