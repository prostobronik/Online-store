import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { Button, Card, Container, Form, FormControl } from 'react-bootstrap'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Context } from '../index'
import { login, registration } from '../http/userApi'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'

const Auth = observer(() => {
  const { user } = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }
      user.setUser(user)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <FormControl
            placeholder="Введите ваш email..."
            className="mt-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl
            placeholder="Введите пароль..."
            className="mt-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <Form className="d-flex justify-content-between mt-3 pl-3 pr-4">
            {isLogin ? (
              <div>
                Нет аккаунта?
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
              </div>
            ) : (
              <div>
                Eсть аккаунт?
                <NavLink to={LOGIN_ROUTE}>Ввойдите</NavLink>
              </div>
            )}
            <Button variant={'outline - success'} onClick={() => click()}>
              {isLogin ? 'Ввойти' : 'Регистрация'}
            </Button>
          </Form>
        </Form>
      </Card>
    </Container>
  )
})

export default Auth
