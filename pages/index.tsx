import { useIntl } from 'react-intl';
import { StyledBlue, StyledGreen } from '../styles/home';

export default function Home(): React.ReactElement {
  const { formatMessage } = useIntl();
  return (
    <div>
      <StyledBlue>{formatMessage({ id: 'Hello.World.Test' })}</StyledBlue>
      <StyledGreen>{formatMessage({ id: 'Hello.World.Test' })}</StyledGreen>
    </div>
  );
}
