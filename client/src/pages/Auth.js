import React from 'react'
import { Button, Card, Container, Form, FormControl } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <FormControl placeholder="Введите ваш email..." className="mt-4" />
          <FormControl placeholder="Введите пароль..." className="mt-4" />

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
            <Button variant={'outline - success'}>
              {isLogin ? 'Ввойти' : 'Регистрация'}
            </Button>
          </Form>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth
