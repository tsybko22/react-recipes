import classes from './Container.module.scss';

const Container = ({ children }) => <div className={classes.container}>{children}</div>;

export default Container;
