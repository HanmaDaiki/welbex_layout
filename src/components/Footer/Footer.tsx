import { Navigation, Number, Social } from '../';

import './Footer.scss';

const Footer: React.FC = () => {
  const about = [
    {text: 'Партнёрская программа', url: '/'},
    {text: 'Вакансии', url: '/'}
  ];

  const menu1 = [
    {text: 'Расчёт стоимости', url: '/'},
    {text: 'Услуги', url: '/'},
    {text: 'Виджеты', url: '/'},
    {text: 'Интеграции', url: '/'},
    {text: 'Наши клиенты', url: '/'},
  ];

  const menu2 = [
    {text: 'Кейсы', url: '/'},
    {text: 'Благодарность клиентов', url: '/'},
    {text: 'Сертификаты', url: '/'},
    {text: 'Блог на Youtube', url: '/'},
    {text: 'Вопрос / Ответ', url: '/'},
  ]

  return(
    <footer className="footer">
      <section className="footer__up">
        <article className="footer__item">
          <h3 className="footer__title">О компании</h3>
          <Navigation links={about} position='footer' />
        </article>
        <article className="footer__item">
          <h3 className="footer__title">Меню</h3>
          <div className='footer__double-menu'>
            <Navigation links={menu1} position='footer' />
            <Navigation links={menu2} position='footer' />
          </div>
        </article>
        <article className="footer__item">
          <h3 className="footer__title">Контакты</h3>
          <Number position='footer'/>
          <Social position='footer' />
          <p className='footer__adres'>Москва, Путевой проезд 3с1, к 902</p>
        </article>
      </section>

      <section className='footer__down'>
        <p className='footer__text'>©WELBEX 2022. Все права защищены.</p>
        <p className='footer__text footer__text_link'>Политика конфиденциальности</p>
      </section>
    </footer>
  );
}

export { Footer };