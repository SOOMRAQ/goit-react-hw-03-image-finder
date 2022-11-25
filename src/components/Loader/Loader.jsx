import { ThreeCircles } from 'react-loader-spinner';

const Loader = ({ query }) => {
  return (
    <ThreeCircles
      height="50"
      width="50"
      color="rgba(255,255,255,0.5)"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
    />
  );
};

export default Loader;
