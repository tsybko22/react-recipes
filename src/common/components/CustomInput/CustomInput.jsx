import clsx from 'clsx';
import { forwardRef } from 'react';

import classes from './CustomInput.module.scss';

const CustomInput = forwardRef(
  ({ type = 'text', className, value, onChange, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={clsx(classes.input, className)}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
);

export default CustomInput;
