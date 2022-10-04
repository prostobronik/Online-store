import { useContext } from 'react'
import { Context } from '../index'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { NavLink, useNavigate } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

const styles = {
  color: 'white',
  textDecoration: 'none',
}
const btn = {
  marginLeft: '4px',
}

const NavBar = observer(() => {
  const { user } = useContext(Context)

  const navigate = useNavigate()

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={styles} to={SHOP_ROUTE}>
          Интернет Магазин
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button
              variant={'outline-light'}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button
              variant={'outline-light'}
              onClick={() => navigate(LOGIN_ROUTE)}
              style={btn}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button
              variant={'outline-light'}
              onClick={() => user.setIsAuth(true)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
})

export default NavBar
