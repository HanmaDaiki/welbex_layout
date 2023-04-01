import { useClipboard } from 'use-clipboard-copy';

import './Number.scss';

interface IProps {
  position: 'footer' | 'header';
}


const Number: React.FC<IProps> = ({ position }) => {
  const clipboard = useClipboard();

  return(
    <span className={`number ${position}`} onClick={() => clipboard.copy('7 555 555-55-55')}>+7 555 555-55-55</span>
  );
};

export { Number };