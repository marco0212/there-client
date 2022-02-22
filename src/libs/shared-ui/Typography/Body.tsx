import { FC } from "react";
import { TypographProps } from "./type";

export const Body: FC<TypographProps> = ({
  weight = "normal",
  color,
  children,
  ...props
}) => {
  const Tag = "p";
  return (
    <Tag style={{ color, fontWeight: weight }} {...props}>
      {children}
    </Tag>
  );
};
