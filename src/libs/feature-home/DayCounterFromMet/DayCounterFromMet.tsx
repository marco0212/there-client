import { Title } from "../../shared-ui";
import { bind } from "../../utils-structure";
import { useDayCounterFromMet } from "./useDayCounterFromMet";

export const DayCounterFromMet = bind(
  useDayCounterFromMet,
  ({ dayCountFromMet, loading, error }) => {
    if (loading) {
      return <p>Loading</p>;
    }

    if (error || !dayCountFromMet) {
      return <p>Error</p>;
    }

    return (
      <Title
        className="mb-20"
        level={3}
        color="black"
      >{`${dayCountFromMet}일째 만나는 중 🔥`}</Title>
    );
  }
);
