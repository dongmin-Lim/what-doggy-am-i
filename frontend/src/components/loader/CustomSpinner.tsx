import { Dna, ThreeDots } from 'react-loader-spinner';

export const CustomSpinner = () => {
  return (
    <Dna
      visible={true}
      height="100"
      width="100"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
};

export const CommuSpinner = () => {
  return (
    <ThreeDots
      height="10"
      width="40"
      radius="3"
      color="#74b9ff"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      visible={true}
    />
  );
};
