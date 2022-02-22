import { gql, useQuery } from "@apollo/client";

const graphql = gql`
  query DayCountFromMetOnDayCounterFromMet {
    dayCountFromMet
  }
`;

export function useDayCounterFromMet() {
  const { data, loading, error } = useQuery(graphql);

  return { dayCountFromMet: data?.dayCountFromMet, loading, error };
}
