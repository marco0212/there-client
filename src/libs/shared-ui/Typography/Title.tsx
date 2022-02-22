import { CSSProperties, FC } from "react";
import { TypographProps } from "./type";

interface TitleProps extends TypographProps {
  level: 1 | 2 | 3;
}

export const Title: FC<TitleProps> = ({
  level,
  weight = "bold",
  color,
  children,
  ...props
}) => {
  const Heading = `h${level}` as "h1" | "h2" | "h3";
  const styles: Record<1 | 2 | 3, CSSProperties> = {
    1: { fontSize: "20px" },
    2: { fontSize: "18px" },
    3: { fontSize: "16px" },
  };
  return (
    <Heading style={{ ...styles[level], color, fontWeight: weight }} {...props}>
      {children}
    </Heading>
  );
};
