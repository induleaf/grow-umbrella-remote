import { FormattedMessage, useIntl } from 'react-intl';
import { StyledBlue, StyledGreen } from '../styles/home';
import Header from '../components/header';

export default function Home(): React.ReactElement {
  const intl = useIntl();
  const { formatMessage } = intl;
  return (
    <div>
      <StyledBlue>
        <FormattedMessage id="Hello.World.Test" />
      </StyledBlue>
      <StyledGreen>
        <FormattedMessage id="Hello.World.Test" />
      </StyledGreen>
      <Header title="Header" intl={intl} />
      {formatMessage({ id: 'Hello.World.Test' })}
    </div>
  );
}
