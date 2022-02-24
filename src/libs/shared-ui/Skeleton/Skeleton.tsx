import { CSSProperties, FC } from "react";
import styled from "styled-components";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width: number | string;
  height: number | string;
  radius?: number;
}

export const Skeleton: FC<SkeletonProps> = ({
  width,
  height,
  radius,
  ...props
}) => {
  const styles: CSSProperties = {
    width: Number(width) ? `${width}px` : width,
    height: Number(height) ? `${height}px` : height,
    borderRadius: `${radius}px`,
  };
  return <Container style={styles} {...props} />;
};

const Container = styled.div`
  background-color: #f1f1f1;
`;
