import './Footer.scss'
import Logo from '@/components/Logo'
import Socials from '@/components/Socials'

export default () => {
  const menuItems = [
    {
      title: 'Home',
      links: ['Benefits', 'Our Testimonials', 'Partners'],
    },
    {
      title: 'Services',
      links: [
        'Web Design',
        'Website Development',
        'App Development',
        'Digital Marketing',
      ],
    },
    {
      title: 'Projects',
      links: [
        'ABC Tech Solutions',
        'GreenEarth Eco Store',
        'HealthTech Innovations',
        'GlobalTech Solutions',
        'TechGuru Inc.',
      ],
    },
    {
      title: 'About Us',
      links: ['Our Team', 'Achievements', 'Awards'],
    },
    {
      title: 'Careers',
      links: ['Job Openings', 'Benefits & Perks', 'Employee Referal'],
    },
    {
      title: 'Blogs',
      links: ['Our Blogs'],
    },
  ]

  const socialLinks = [
    {
      label: 'LinkedIn',
      iconName: 'linked-in',
    },
    {
      label: 'Facebook',
      iconName: 'facebook',
    },
    {
      label: 'Twitter',
      iconName: 'twitter',
    },
  ]

  const extraLinks = ['Privacy Policy', 'Terms & Conditions', 'Cookie Policy']

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <header className="footer__header">
          <Logo className="footer__logo" />
          <div className="footer__soc1als-wrapper">
            Follow Us On Social Media
            {socialLinks?.length > 0 && (
              <Socials className="footer__soc1als" links={socialLinks} />
            )}
          </div>
        </header>
        <div className="footer__body">
          <nav className="footer__menu">
            {menuItems.map(({ title, links }, index) => (
              <div className="footer__menu-column" key={index}>
                <a href="/" className="footer__menu-title">
                  {title}
                </a>
                {links?.length > 0 && (
                  <ul className="footer__menu-list">
                    {links.map((link, index) => (
                      <li className="footer__menu-item" key={index}>
                        <a href="/" className="footer__menu-link">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="footer__extra">
          <p className="footer__copyright">
            @<time dateTime={2025}>2025 </time>
            Digitax. All Rights Reserved.
          </p>
          <div className="footer__extra-wrapper">
            <p className="footer__version">Version 1.0</p>
            <div className="footer__extra-links">
              {extraLinks.map((link, index) => (
                <a href="/" className="footer__extra-link" key={index}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
