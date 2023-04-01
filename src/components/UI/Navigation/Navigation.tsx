import './Navigation.scss';

interface IProps {
  links: Array<Link>;
  position: 'footer' | 'header';
}

type Link = { text: string, url: string };

const Navigation: React.FC<IProps> = ({ links, position }) => {
  return(
    <nav >
      <ul className={`navigation ${position}`}>
        {
          links.map((link: Link, index: number) => {
            return <li className={`navigation__item ${position}`} key={index}><a className={`navigation__link ${position}`} href={link.url}>{ link.text }</a></li>
          })
        }
      </ul>
    </nav>
  );
}

export { Navigation };