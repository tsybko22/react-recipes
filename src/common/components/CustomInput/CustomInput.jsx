import clsx from 'clsx';
import { forwardRef } from 'react';

import classes from './CustomInput.module.scss';

const CustomInput = forwardRef(
  ({ type = 'text', className, value, setValue, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={clsx(classes.input, className)}
      value={value}
      onChange={(evt) => setValue(evt.target.value)}
      {...props}
    />
  )
);

export default CustomInput;
