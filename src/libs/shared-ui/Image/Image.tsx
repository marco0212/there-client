import { FC } from "react";
import styled, { css } from "styled-components";

type ImageProps = {
  src: string;
  alt?: string;
  ratio: "1:1";
  className?: string;
  children?: undefined;
};

export const Image: FC<ImageProps> = ({
  src,
  alt,
  ratio: ratioProp,
  className,
}) => {
  const [numerator, denominator] = ratioProp.split(":");
  const ratio = (parseInt(numerator, 10) / parseInt(denominator, 10)) * 100;
  return (
    <Container className={className}>
      <ImageField ratio={ratio}>
        <ImageElement src={src}>{alt}</ImageElement>
      </ImageField>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const ImageField = styled.div<{ ratio: number }>`
  width: 100%;
  position: relative;
  ${(props) =>
    css`
      padding-top: ${props.ratio}%;
    `};
`;

const ImageElement = styled.div<{ src: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
  ${(props) =>
    css`
      background: #f1f1f1 url(${props.src}) no-repeat center center / cover;
    `}
`;
