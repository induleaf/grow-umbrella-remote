import { FormattedMessage } from 'react-intl';
import { StyledBlue, StyledGreen } from '../styles/home';

export default function Home(): React.ReactElement {
  return (
    <div>
      <StyledBlue>
        <FormattedMessage id="Hello.World.Test" />
      </StyledBlue>
      <StyledGreen>
        <FormattedMessage id="Hello.World.Test" />
      </StyledGreen>
    </div>
  );
}
