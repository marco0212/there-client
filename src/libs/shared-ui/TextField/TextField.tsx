import { FC, HTMLInputTypeAttribute } from "react";
import styled from "styled-components";
import { Title } from "../Typography";

type TextInputProps = {
  title: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  className?: string;
};

export const TextField: FC<TextInputProps> = ({
  className,
  type = "text",
  title,
  ...props
}) => {
  return (
    <Container className={className}>
      <Title level={3} className="mb-10" color="black" weight="bold">
        {title}
      </Title>
      <Input type={type} {...props} />
    </Container>
  );
};

const Container = styled.label`
  display: block;
`;

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  border: 0;
  border-bottom: 1px solid #eee;
  outline: none;
  padding: 0 0 10px;
  color: #757575;
`;
