import clsx from 'clsx';
import { BiLeftArrowAlt } from 'react-icons/bi';

import classes from './BtnWithIcon.module.scss';

const BtnWithIcon = ({ className, text, onClick, ...props }) => (
  <button
    type='button'
    className={clsx(classes.btnWithIcon, className)}
    onClick={onClick}
    {...props}
  >
    <BiLeftArrowAlt className={classes.icon} />
    {text}
  </button>
);

export default BtnWithIcon;
