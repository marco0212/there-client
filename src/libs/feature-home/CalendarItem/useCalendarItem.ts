import { format, isBefore, isToday } from "date-fns";
import koreanLocale from "date-fns/locale/ko";

type UseCalendarItemProps = {
  date: string | number;
  eventCount?: number;
};

export function useCalendarItem({
  date: dateProps,
  eventCount,
}: UseCalendarItemProps) {
  const dateInstance = new Date(dateProps);
  const dayOfWeek = format(dateInstance, "E", { locale: koreanLocale });
  const date = format(dateInstance, "d");
  const isCurrentDay = isToday(dateInstance);
  const isPast = isBefore(dateInstance, Date.now());
  return { dayOfWeek, date, eventCount, isCurrentDay, isPast };
}
