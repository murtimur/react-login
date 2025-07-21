import { useEffect, useMemo, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();

  const passwordRepeatError = useMemo(() => {
    if (password && password !== passwordRepeat) {
      return "Password mismatch";
    }
    return "";
  }, [password, passwordRepeat]);

  useEffect(()=> {
    setErrors((lastErrors)=> {
        return {
            ...lastErrors,
            username: undefined
        }
    })
  },[username])

  useEffect(()=> {
    setErrors((lastErrors)=> {
        return {
            ...lastErrors,
            password: undefined
        }
    })
  },[username])

  const [errors, setErrors] = useState({});

  const submit = async (event) => {
    event.preventDefault()
    const body = {username, password}
  }

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
        <div className="mt-2 text-center">
          <Button type="submit" className="btn btn-primary" text="Save" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
