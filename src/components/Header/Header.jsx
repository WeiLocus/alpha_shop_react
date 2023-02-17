
import {ReactComponent as Toggle} from 'assets/icons/toggle.svg'
import {ReactComponent as Cart} from 'assets/icons/cart.svg'
import {ReactComponent as Search} from 'assets/icons/search.svg'
import {ReactComponent as Moon} from 'assets/icons/moon.svg'
import {ReactComponent as Sun} from 'assets/icons/sun.svg'
import {ReactComponent as Logo} from 'assets/icons/logo.svg'

export default function Header () {
  return (
    <header className="site-header">
      <div className="header-container mx-auto">
        {/* navbar-toggle */}
        <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label htmlFor="navbar-toggle" className="burger-container">
          <Toggle className="icon-toggle"/>
        </label>
        {/* navbar-menu */}
        <nav className="navbar-menu">
          <ul className="nav-list site-menu-list mr-auto">
            <NavItem href="#">男款</NavItem>
            <NavItem href="#">女款</NavItem>
            <NavItem href="#">最新消息</NavItem>
            <NavItem href="#">客製商品</NavItem>
            <NavItem href="#">聯絡我們</NavItem>
          </ul>
          <ul className="nav-list site-action-list">
            <li className="nav-item cursor-point">
              <Search className="nav-icon"/>                              
            </li>
            <li className="nav-item cursor-point">
              <Cart className="nav-icon"/>
            </li>
            <li id="theme-toggle" className="nav-item cursor-point">
              {/* moon */}
              <Moon className="nav-icon" />
              {/* sun */}
              {/* <Sun className="nav-icon" /> */}
            </li>
          </ul>
        </nav>
        {/* Logo */}
        <a className="header-logo-container" href="#">
          <Logo />
        </a>
      </div>
    </header>
  )
}

function NavItem ( {href, children}) {
  return (
    <li className="nav-item cursor-point">
      <a className="nav-link" href={href}>{children}</a>
    </li>
  )
}