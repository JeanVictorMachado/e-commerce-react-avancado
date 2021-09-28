import { Story, Meta } from '@storybook/react/types-6-0'
import Home, { HomeScreenProps } from '.'

export default {
  title: 'Home',
  component: Home
} as Meta

export const Basic: Story<HomeScreenProps> = (args) => <Home {...args} />
