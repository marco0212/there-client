import { gql, useQuery } from "@apollo/client";

const graphql = gql`
  query DayCountFromMetOnDayCounterFromMet {
    there {
      id
      dayCountFromMet
    }
  }
`;

export function useDayCounterFromMet() {
  const { data, loading, error } = useQuery(graphql);

  return { dayCountFromMet: data?.there.dayCountFromMet, loading, error };
}
