/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from 'next/head'
import { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'

import { ApolloProvider } from '@apollo/client'
import { CartProvider } from 'hooks/use-cart'
import { ThemeProvider } from 'styled-components'
import { useApollo } from 'utils/apollo'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const AnyComponent = Component as any
  const client = useApollo(pageProps.initialApoloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CartProvider>
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
          <NextNprogress
            color="#F231A5"
            startPosition={0.3}
            stopDelayMs={200}
            height={5}
          />
          <AnyComponent {...pageProps} />
        </CartProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
