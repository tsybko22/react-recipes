import clsx from 'clsx';

import classes from './Typography.module.scss';

const Typography = ({ tag = 'p', variant, color, className, children, ...props }) => {
  const Tag = tag;
  const setClasses = () =>
    clsx(classes[variant], className, {
      [classes.primary]: color === 'primary',
    });

  return (
    <Tag className={setClasses()} {...props}>
      {children}
    </Tag>
  );
};

export default Typography;
