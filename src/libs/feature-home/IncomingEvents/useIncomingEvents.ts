import { gql } from "@apollo/client";
import { IncomingEventRowFragmentDoc } from "../IncomingEventRow/__generated__/useIncomingEventRow";
import { useEventsOnIncomingEventsQuery } from "./__generated__/useIncomingEvents";

gql`
  ${IncomingEventRowFragmentDoc}
  query EventsOnIncomingEvents {
    there {
      id
      incomingEvents {
        id
        ...IncomingEventRow
      }
    }
  }
`;

export function useIncomingEvents() {
  const { data: queryData, loading, error } = useEventsOnIncomingEventsQuery();
  return {
    events: queryData?.there.incomingEvents,
    loading,
    error,
  };
}
