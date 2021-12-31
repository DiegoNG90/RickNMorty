import ReactSpinner from 'react-loader-spinner';

const Loader = () => {
  return (
    <ReactSpinner
      type="TailSpin"
      color="#00BFFF"
      height={80}
      width={80}
      arialLabel="loading-indicator"
    />
  );
};

export default Loader;
