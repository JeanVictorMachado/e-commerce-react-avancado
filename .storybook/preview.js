import { CartContext, CartContextDefaultValues } from 'hooks/use-cart'
import { ThemeProvider } from 'styled-components'
import GlobalStytes from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <CartContext.Provider
        value={{
          ...CartContextDefaultValues,
          ...(context?.args?.cartContextValue || {}),
          ...context.args
        }}
      >
        <GlobalStytes removeBg />
        <Story />
      </CartContext.Provider>
    </ThemeProvider>
  )
]
