export default function withLimit(Component, limite) {
  return function LimitedComponent(props) {
    return <Component {...props} limite={limite} />;
  };
}