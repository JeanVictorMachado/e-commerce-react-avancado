import { Story, Meta } from '@storybook/react/types-6-0'
import Menu, { MenuPros } from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story<MenuPros> = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}
