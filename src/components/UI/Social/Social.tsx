import './Social.scss';

interface IProps {
  position: 'header' | 'footer'
}

const Social: React.FC<IProps> = ({ position }) => {
  return(
    <div className={`social ${position}`}>
      <a href='/' className="social__icon social__icon_telegram"> </a>
      <a href='/' className="social__icon social__icon_viber"> </a>
      <a href='/' className="social__icon social__icon_whatsapp"> </a>
    </div>
  );
};

export { Social };