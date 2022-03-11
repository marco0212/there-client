import styled from "styled-components";
import { Button, TextField } from "../../shared-ui";
import { bind } from "../../utils-structure";
import { useLoginForm } from "./useLoginForm";

export const LoginForm = bind(
  useLoginForm,
  ({
    loading,
    login,
    emailValue,
    passwordValue,
    changeEmailValue,
    changePasswordValue,
  }) => (
    <Container>
      <TextField
        className="mb-40"
        type="email"
        title="Email"
        value={emailValue}
        onChange={(event) => changeEmailValue(event.currentTarget.value)}
      />
      <TextField
        className="mb-40"
        type="password"
        title="Password"
        value={passwordValue}
        onChange={(event) => changePasswordValue(event.currentTarget.value)}
      />
      <Button
        type="door-open"
        color="#ff9b44"
        full
        loading={loading}
        onClick={login}
      />
    </Container>
  )
);

const Container = styled.div`
  background-color: white;
  padding: 40px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;
