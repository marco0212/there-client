import { gql } from "@apollo/client";
import { useDayCountFromMetOnDayCounterFromMetQuery } from "./__generated__/useDayCounterFromMet";

gql`
  query DayCountFromMetOnDayCounterFromMet {
    there {
      id
      dayCountFromMet
    }
  }
`;

export function useDayCounterFromMet() {
  const { data, loading, error } = useDayCountFromMetOnDayCounterFromMetQuery();

  return { dayCountFromMet: data?.there.dayCountFromMet, loading, error };
}
