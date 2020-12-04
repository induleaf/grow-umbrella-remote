import { useIntl } from 'react-intl';
import { StyledBlue, StyledGreen } from '../styles/home';

import Header from '../components/header';

export default function Home(): React.ReactElement {
  const { formatMessage } = useIntl();
  return (
    <div>
      <Header />
      <StyledBlue>{formatMessage({ id: 'Hello.World.Test' })}</StyledBlue>
      <StyledGreen>{formatMessage({ id: 'Hello.World.Test' })}</StyledGreen>
    </div>
  );
}
