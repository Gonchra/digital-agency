import './Header.scss'
import clsx from 'clsx'
import Logo from '@/components/Logo'
import BurgerButton from '@/components/BurgerButton'

export default (props) => {
  const { url, isFixed } = props

  const menuItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Services',
      href: '/services',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'About Us',
      href: '/about',
    },
    {
      label: 'Contact Us',
      href: '/contact',
    },
    {
      label: 'Careers',
      href: '/careers',
    },
    {
      label: 'Blogs',
      href: '/blogs',
    },
  ]

  return (
    <header className={clsx("header", isFixed && "is-fixed")} data-js-overlay-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=""
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({ label, href }, index) => (
                <li className="header__menu-item" key={index}>
                  <a
                    className={clsx(
                      'header__menu-link',
                      href === url && 'is-active'
                    )}
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </dialog>
        <BurgerButton
          className="header__burger-button visible-tablet"
          extraAttrs={{
            'data-js-overlay-menu-burger-button': '',
          }}
        />
      </div>
    </header>
  )
}
