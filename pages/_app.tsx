import { IntlProvider } from 'react-intl';
import { withRouter } from 'next/router';
import { AppProps } from 'next/app';
import GlobalStyles from '../styles/globals';
import * as locales from '../content/locale';

function AppComponent({ Component, pageProps, router }: AppProps): React.ReactElement {
  const { locale, defaultLocale, pathname } = router;
  const localeIntl = locale || defaultLocale;
  const localeCopy = locales[localeIntl];
  const messages = localeCopy[pathname];
  return (
    <IntlProvider locale={localeIntl} defaultLocale={defaultLocale} messages={messages}>
      <GlobalStyles />
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default withRouter(AppComponent);
