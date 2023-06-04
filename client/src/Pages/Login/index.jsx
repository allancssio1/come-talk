import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import axios from "axios";

export function Login() {
  const navegate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    clearInputs();
  }, [isLogin]);

  const connectUser = async () => {
    await axios
      .post("http://localhost:3000/login", {
        username,
        password,
      })
      .then((response) => {
        const { data } = response;
        if (data && data.user && data.user.id) {
          navegate(`/chat/${data.user.id}`);
        }
      });
  };

  const clearInputs = () => {
    setUsername("");
    setPassword("");
  };

  const registerUser = (data) => {
    console.log(data);
  };

  return (
    <main className="container__login__register">
      {isLogin ? (
        <div>
          <form className="form form__field form__login__register">
            <input
              type="text"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <label>Nome do usuário</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <label htmlFor="password">Senha</label>
            <button type="button" onClick={connectUser}>
              Entrar
            </button>
          </form>
          <span id="button__goRegister" onClick={() => setIsLogin(!isLogin)}>
            ou Cadastre-se
          </span>
        </div>
      ) : (
        <div>
          <form className="form form__login__register">
            <span className="container__icon">
              <RiArrowGoBackFill
                size={"1.5rem"}
                className="icon"
                onClick={() => setIsLogin(!isLogin)}
              />
            </span>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <label>Nome do usuário</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <label>Senha</label>
            <button type="button" onClick={registerUser}>
              Cadastrar
            </button>
          </form>
        </div>
      )}
    </main>
  );
}
