import {
  CoverImage,
  IncomingEvents,
  PhotoList,
  WeeklyCalendar,
  DayCounterFromMet,
} from "../libs/feature-home";

export const Home = () => {
  return (
    <>
      <CoverImage />
      <div className="px-20">
        <DayCounterFromMet />
        <WeeklyCalendar />
        <IncomingEvents />
      </div>
      <PhotoList />
    </>
  );
};
