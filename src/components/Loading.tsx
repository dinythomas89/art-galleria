import { CicleBorder, CicleCore, LoadingContainer } from "../styles/loading";

const Loading = () => {
  return (
    <LoadingContainer>
      <CicleBorder>
        <CicleCore />
      </CicleBorder>
    </LoadingContainer>
  );
};

export default Loading;
