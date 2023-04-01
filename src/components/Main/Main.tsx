import './Main.scss';

const Main: React.FC = () => {
  return(
    <main className="main">
      <section className="main__left">
        <h1 className='main-title'>
          Зарабатывайте больше
          <br/>
          <span className='main-title__span'>с WELBEX</span>
        </h1>
        <p className='description'>
          Развиваем и контролируем <br /> продажи за вас
        </p>
      </section>
      <section className='main__right'>
        <h2 className="sub-title">
          Вместе с <span className="sub-title__span">бесплатной консультацией</span> мы дарим:
        </h2>
        <ul className='list'>
          <li className='list__item'>
            <h3 className='list__title'>Виджеты</h3>
            <p className='list__paragraph'>30 готовых <br /> решений</p>
          </li>
          <li className='list__item'>
            <h3 className='list__title'>Dashboard</h3>
            <p className='list__paragraph'>с показателями <br /> вашего бизнеса</p>
          </li>
          <li className='list__item'>
            <h3 className='list__title'>Skype Аудит</h3>
            <p className='list__paragraph'>отдела продаж <br /> и CRM системы</p>
          </li>
          <li className='list__item'>
            <h3 className='list__title'>35 дней</h3>
            <p className='list__paragraph'>использования <br /> CRM</p>
          </li>
        </ul>
        <button className='button'>Получить консультацию</button>
      </section>
    </main>
  )
};

export { Main };