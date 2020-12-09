import { useIntl } from 'react-intl';

const Header = ({ title }: any): React.ReactElement => {
  const { formatMessage } = useIntl();
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
      <h2>{formatMessage({ id: 'Hello.World.Test' })}</h2>
    </div>
  );
};

export default Header;
