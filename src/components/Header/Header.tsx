import { Navigation, Number, Social } from "../";

import './Header.scss';

const Header: React.FC = () => {
  const links = [
    {text: 'Услуги', url: '/'}, 
    {text: 'Виджеты', url: '/'},
    {text: 'Интеграции', url: '/'},
    {text: 'Кейсы', url: '/'},
    {text: 'Сертификаты', url: '/'},
  ];

  return(
    <header className="header">
      <div className="header__left">
        <div className="header__logo">
          <div className="header__logo header__logo_image"></div>
          <span className="header__logo header__logo_text">крупный интегратор CRM в Росcии и ещё 8 странах</span>
        </div>
        <Navigation links={links} position='header' />
      </div>
      <div className="header__right">
        <Number position="header" />
        <Social position='header'/>
      </div>
    </header>
  );
}

export { Header };