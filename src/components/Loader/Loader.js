import ReactSpinner from 'react-loader-spinner';

const Loader = () => {
  return (
    <ReactSpinner
      type="TailSpin"
      color="#00BFFF"
      height={150}
      width={150}
      arialLabel="loading-indicator"
    />
  );
};

export default Loader;
