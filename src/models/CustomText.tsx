interface Props {
  posVector: number[];
}

const CustomText = ({ posVector }: Props) => {
  return (
    <>
      <h1>{posVector[0]}</h1>
    </>
  );
};

export default CustomText;
