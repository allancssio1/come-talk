import { useState } from "react";

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
          <span id="button__go--login" onClick={() => setIsLogin(!isLogin)}>
            ou Cadastre-se
          </span>
        </div>
      ) : (
        <form className="form form__login__register" onSubmit={registerUser}>
          <input type="text" name="username" id="username" />
          <label htmlFor="username">Nome do usuário</label>
          <input type="password" name="password" id="password" />
          <label htmlFor="password">Senha</label>
          <button type="submit">Cadastrar</button>
        </form>
      )}
    </main>
  );
}
