import React from 'react'
import { Story, Meta } from '@storybook/react'

import Component, { Props } from './index'

export default {
  title: 'Elements/ShareModal',
  component: Component,
} as Meta

const Template: Story<Props> = (args) => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  open: true,
  setOpen: () => console.log('open'),
  txHash: 'TextField',
}
