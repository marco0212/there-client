import { gql, useQuery } from "@apollo/client";

const graphql = gql`
  query EventsOnIncomingEvents {
    events {
      id
      title
      reservedAt
    }
  }
`;

type Event = {
  id: string;
  title: string;
  reservedAt: number;
};

export function useIncomingEvents() {
  const { data, loading, error } = useQuery<{ events: Event[] }>(graphql);
  return {
    events: data?.events,
    loading,
    error,
  };
}
