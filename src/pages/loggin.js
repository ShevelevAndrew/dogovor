
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Spinner} from 'react-bootstrap';
import { getLogin } from "../store/login"

export const LoginPage = () => {
  const [authMode, setAuthMode] = useState("signin")
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [signUpName, setsignUpName] = useState("")
  const [signUpINN, setsignUpINN] = useState("")
  const [signUpEmail, setsignUpEmail] = useState("")
  const [signUpPhone, setsignUpPhone] = useState("")
  const [signUpPassword, setsignUpPassword] = useState("")
  const [signUpRePassword, setsignUpRePassword] = useState("")

  const { error, pending } = useSelector((state) => state.login)
  const dispatch = useDispatch();

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getLogin({
      email: mail,
      password: password
    }));
  }
  const handleCreate = (e) => {
    e.preventDefault()
    console.log()
  }

 if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit} >
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Войти</h3>
            <div className="text-center">
              Еще не зарегистрированы?{" "}
              <span className="link-primary curs" onClick={changeAuthMode}>
                Регистрация
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                required
                onChange={(e) => setMail(e.target.value)}
                type="email"
                value={mail}
                className="form-control mt-1"
                placeholder="Введите email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Пароль</label>
              <input
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                className="form-control mt-1"
                placeholder="********"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              {!pending ?
                <button type="submit" className="btn btn-primary">
                  Войти
                </button>
                :
                <Spinner animation="border" variant="primary" />
              }
            </div>

            {error && `Ошибка: ${error.status} ${error.statusText}`}
            <p className="text-center mt-2">
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (//noValidate
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleCreate}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Регистрация</h3>
          <div className="text-center">
            Уже зарегистрированы?{" "}
            <span className="curs link-primary " onClick={changeAuthMode}>
              Войти
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Имя</label>
            <input
              required
              type="text"
              value={signUpName}
              onChange={(e) => setsignUpName(e.target.value)}
              className="form-control mt-1"
              placeholder="Иван Иванов"
              minLength="3"
            />
            <label>ИНН</label>
            <input
              required
              type="text"
              pattern="[0-9]{10,12}"
              value={signUpINN}
              onChange={(e) => setsignUpINN(e.target.value)}
              className="form-control mt-1"
              placeholder="ИНН организации"
              title="ИНН организации - для ООО 10 цифр, для ИП 12 цифр"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              required
              type="email"
              pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
              value={signUpEmail}
              onChange={(e) => setsignUpEmail(e.target.value)}
              className="form-control mt-1"
              placeholder="Email адрес"
              title="email: mail@mail.ru"
            />
            <label>Номер телефона</label>
            <input
              required
              type="tel"
              pattern="(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?"//"^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$"
              value={signUpPhone}
              onChange={(e) => setsignUpPhone(e.target.value)}
              className="form-control mt-1"
              placeholder="Номер телефона"
            />
          </div>
          <div className="form-group mt-3">
            <label>Пароль</label>
            <input
              required
              type="password"
              // pattern="[0-9, A-Z, a-z]{5-10}"
              value={signUpPassword}
              onChange={(e) => setsignUpPassword(e.target.value)}
              className="form-control mt-1"
              minLength="5"
              placeholder="********"
            />
            <label>Повторно пароль</label>
            <input
              required
              type="password"
              value={signUpRePassword}
              onChange={(e) => setsignUpRePassword(e.target.value)}
              className="form-control mt-1"
              placeholder="********"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Создать
            </button>
          </div>
          {error && `Ошибка: ${error.status} ${error.statusText}`}
          {/* <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
        </div>
      </form>
    </div>
  )
}



