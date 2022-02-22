import React from "react";

export interface TypographProps extends React.HTMLAttributes<HTMLDivElement> {
  weight?: "bold" | "normal";
  color: string;
}
