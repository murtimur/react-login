import { useEffect, useMemo, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { signup } from "./api";
import Alert from "../../components/Alert";

const SignUp = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();
  const [apiProgress, setApiProgress] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState();

  const passwordRepeatError = useMemo(() => {
    if (password && password !== passwordRepeat) {
      return "Password mismatch";
    }
    return "";
  }, [password, passwordRepeat]);

  useEffect(() => {
    setErrors((lastErrors) => {
      return {
        ...lastErrors,
        username: undefined,
      };
    });
  }, [username]);

  useEffect(() => {
    setErrors((lastErrors) => {
      return {
        ...lastErrors,
        password: undefined,
      };
    });
  }, [username]);

  const submit = async (event) => {
    event.preventDefault();
    setSuccessMessage();
    setGeneralError();
    setApiProgress(true);
    const body = { username, password };
    try {
      const response = await signup(body);
      setSuccessMessage(response.data.message);
    } catch (apiError) {
      if (apiError.response?.data) {
        if (apiError.response.data.status === 400) {
          setErrors(apiError.response.data.validationErrors);
        } else {
          setGeneralError(apiError.response.data.message);
        }
      } else {
        setGeneralError("Bir hata oluştu!");
      }
    } finally {
      setApiProgress(false);
    }
  };

  return (
    <div className="container">
      <h3 className="text-center">Sign Up</h3>
      <form onSubmit={submit}>
        <Input
          error={errors?.username}
          label="Username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          error={errors?.password}
          label="Password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <Input
          error={passwordRepeatError}
          label="Password Repeat"
          id="passwordRepeat"
          onChange={(e) => setPasswordRepeat(e.target.value)}
          type="password"
        />
        {successMessage && <Alert>{successMessage}</Alert>}
        {generalError && (
          <Alert className="alert alert-danger text-center mt-2">
            {generalError}
          </Alert>
        )}
        <div className="mt-2 text-center">
          <Button
            disabled={password !== passwordRepeat}
            apiProgress={apiProgress}
            type="submit"
            className="btn btn-primary"
            text="Save"
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
