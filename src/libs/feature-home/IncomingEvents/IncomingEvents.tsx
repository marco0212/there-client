import { differenceInCalendarDays, isToday } from "date-fns";
import styled from "styled-components";
import { Title } from "../../shared-ui";
import { bind } from "../../utils-structure";
import { useIncomingEvents } from "./useIncomingEvents";

export const IncomingEvents = bind(
  useIncomingEvents,
  ({ events, loading, error }) => {
    if (loading) {
      return <p>Loading</p>;
    }

    if (error || !events) {
      return <p>Error</p>;
    }

    return (
      <>
        <Title className="mb-20" level={3} color="black">
          다가오는 일정
        </Title>
        <Container>
          {events.map((event) => (
            <EventRow key={event.id}>
              <DayCounter highlight={isToday(new Date(event.reservedAt))}>
                D-
                {differenceInCalendarDays(
                  new Date(event.reservedAt),
                  new Date()
                )}
              </DayCounter>
              <EventTitle>{event.title}</EventTitle>
            </EventRow>
          ))}
        </Container>
      </>
    );
  }
);

const Container = styled.ul`
  margin-bottom: 40px;
`;

const EventRow = styled.li`
  border: 1px solid rgb(229, 229, 229);
  border-radius: 10px;
  padding: 20px 15px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const DayCounter = styled.div<{ highlight?: boolean }>`
  font-weight: bold;
  font-size: 16px;
  color: rgb(0, 0, 0);
  margin-right: 12px;
`;

const EventTitle = styled.p`
  font-size: 16px;
`;
