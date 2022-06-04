import { LockBody, Picture, ReleaseBody, Spinner } from "./styles/loading";

const Loading = ({ src, restProps }: any) => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
    </Spinner>
  );
};

Loading.ReleaseBody = () => {
  return <ReleaseBody />;
};

export default Loading;
