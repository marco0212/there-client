import { useState } from "react";
import { useAccountContext } from "../../provider-account";

export function useLoginForm() {
  const { loading, login } = useAccountContext();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPassword] = useState("");

  const changeEmailValue = (value: string) => {
    setEmailValue(value);
  };

  const changePasswordValue = (value: string) => {
    setPassword(value);
  };

  const submitLogin = async () => {
    const regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    try {
      if (emailValue.length === 0) {
        throw new Error("이메일을 입력해주세요");
      }

      if (!regEmail.test(emailValue)) {
        throw new Error("유효하지 않은 이메일입니다");
      }

      if (passwordValue.length === 0) {
        throw new Error("비밀번호를 입력해주세요");
      }

      await login(emailValue, passwordValue);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return {
    loading,
    login: submitLogin,
    emailValue,
    passwordValue,
    changeEmailValue,
    changePasswordValue,
  };
}
