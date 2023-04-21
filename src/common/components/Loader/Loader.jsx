import { BeatLoader } from 'react-spinners';

const stylesOverride = {
  padding: '50px 0',
  display: 'flex',
  justifyContent: 'center',
};

const Loader = () => (
  <BeatLoader color='#e58833' cssOverride={stylesOverride} size={20} />
);

export default Loader;
