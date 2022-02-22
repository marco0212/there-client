import { gql, useQuery } from "@apollo/client";
import { format } from "date-fns";

const graphql = gql`
  query DaysWithEventsOnWeeklyCalendar {
    daysWithEvents {
      id
      events {
        id
      }
    }
  }
`;

type Event = {
  id: string;
};

type DayWithEvent = {
  id: string;
  events: Event[];
};

export function useWeeklyCalendar() {
  const { data, loading, error } =
    useQuery<Record<"daysWithEvents", DayWithEvent[]>>(graphql);
  const calendarList = data?.daysWithEvents.map((dayWithEvent) => ({
    date: dayWithEvent.id,
    eventCount: dayWithEvent.events.length,
  }));

  return { loading, error, calendarList };
}
