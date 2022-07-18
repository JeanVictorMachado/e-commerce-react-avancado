/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'
import { useApollo } from 'utils/apollo'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const AnyComponent = Component as any
  const client = useApollo(pageProps.initialApoloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Won Games</title>
          <link rel="shortcut icon" href="/img/favicon.png" />
          <link rel="apple-touch-icon" href="/img/favicon.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, React, NextJS and Syled Components"
          />
        </Head>
        <GlobalStyles />
        <AnyComponent {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
