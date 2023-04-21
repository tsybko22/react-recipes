import clsx from 'clsx';

import classes from './Htag.module.scss';

const Htag = ({ tag, variant, className, children }) => {
  const setClasses = () =>
    clsx(classes[tag], className, {
      [classes.primary]: variant === 'primary',
    });

  switch (tag) {
    case 'h1':
      return <h1 className={setClasses()}>{children}</h1>;
    case 'h2':
      return <h2 className={setClasses()}>{children}</h2>;
    case 'h3':
      return <h3 className={setClasses()}>{children}</h3>;
    default:
      return null;
  }
};

export default Htag;
