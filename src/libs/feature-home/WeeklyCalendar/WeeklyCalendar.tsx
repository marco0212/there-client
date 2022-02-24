import styled from "styled-components";
import { Skeleton } from "../../shared-ui";
import { bind } from "../../utils-structure/bind";
import { CalendarItem } from "../CalendarItem";
import { useWeeklyCalendar } from "./useWeeklyCalendar";

export const WeeklyCalendar = bind(
  useWeeklyCalendar,
  ({ loading, error, calendarList }) => {
    if (loading) {
      return <Skeleton className="mb-60" width="100%" height={58} />;
    }

    if (error || !calendarList) {
      return <p>error</p>;
    }

    return (
      <Container className="mb-60">
        {calendarList?.map(({ date, eventCount }) => (
          <CalendarItem key={date} date={date} eventCount={eventCount} />
        ))}
      </Container>
    );
  }
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
