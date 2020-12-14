const Header = (props: any): React.ReactElement => {
  const { intl, title } = props;
  return (
    <div
      style={{
        backgroundColor: 'darkred',
        color: 'white',
        width: '100%',
        padding: '1em',
      }}
    >
      <h1>{title}</h1>
      <h2>{intl.formatMessage({ id: 'Hello.World.Test' })}</h2>
    </div>
  );
};

export default Header;
