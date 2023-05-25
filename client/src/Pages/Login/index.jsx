import { useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const connectUser = (data) => {
    console.log(data);
  };

  const registerUser = (data) => {
    console.log(data);
  };

  return (
    <main className="container__login__register">
      {isLogin ? (
        <div>
          <form
            className="form form__field form__login__register"
            onSubmit={connectUser}
          >
            <input type="text" name="username" id="username" />
            <label htmlFor="username">Nome do usuário</label>
            <input type="password" name="password" id="password" />
            <label htmlFor="password">Senha</label>
            <button type="submit">Entrar</button>
          </form>
          <span id="button__goRegister" onClick={() => setIsLogin(!isLogin)}>
            ou Cadastre-se
          </span>
        </div>
      ) : (
        <div>
          <form className="form form__login__register" onSubmit={registerUser}>
            <span className="container__icon">
              <RiArrowGoBackFill
                size={"1.5rem"}
                className="icon"
                onClick={() => setIsLogin(!isLogin)}
              />
            </span>
            <input type="text" name="username" id="username" />
            <label htmlFor="username">Nome do usuário</label>
            <input type="password" name="password" id="password" />
            <label htmlFor="password">Senha</label>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      )}
    </main>
  );
}
