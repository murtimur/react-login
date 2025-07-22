import Input from "../../components/Input";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { login } from "./api";
import Alert from '../../components/Alert'

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [error, setError] = useState('');

  const [apiProgress, setApiProgress] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setError(undefined)
    setApiProgress(true);
    const body = { username, password };
    try {
      const response = await login(body);
      console.log(response);
    } catch (error) {
      setError(error.response.data?.message);
    } finally {
      setApiProgress(false);
    }
  };

  useEffect(()=>{
    setError(undefined)
  },[username, password])

  return (
    <div className="mx-2">
      <h3 className="text-center">Login</h3>
      <form onSubmit={submit}>
        <Input
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          id="username"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          id="password"
          type="password"
        />
        {error && <Alert className="alert alert-danger text-center mt-2" text={error}></Alert>}
        <div className="text-center mt-2">
          <Button
            apiProgress={apiProgress}
            type="submit"
            className="btn btn-primary"
            text="Login"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
