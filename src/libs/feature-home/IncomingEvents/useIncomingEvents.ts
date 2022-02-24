import { gql, useQuery } from "@apollo/client";

const queryGraphql = gql`
  query EventsOnIncomingEvents {
    there {
      id
      incomingEvents {
        id
        title
        reservedAt
        description
      }
    }
  }
`;

type Event = {
  id: string;
  title: string;
  reservedAt: number;
};

export function useIncomingEvents() {
  const {
    data: queryData,
    loading,
    error,
  } = useQuery<{ there: { incomingEvents: Event[] } }>(queryGraphql);
  return {
    events: queryData?.there.incomingEvents,
    loading,
    error,
  };
}
