import { gql, useQuery } from "@apollo/client";

const graphql = gql`
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
  const { data, loading, error } =
    useQuery<{ there: { incomingEvents: Event[] } }>(graphql);
  return {
    events: data?.there.incomingEvents,
    loading,
    error,
  };
}
