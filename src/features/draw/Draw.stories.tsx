import React from 'react'
import { Story, Meta } from '@storybook/react'

import Page, { Props } from './Presenter'

export default {
  title: 'Pages/Draw',
  component: Page,
} as Meta

const Template: Story<Props> = (args) => <Page {...args} />

export const Default = Template.bind({})
Default.args = {
  hash: '',
}
export const NotFound = Template.bind({})
NotFound.args = {
  hash: 'hash',
}

export const Continue = Template.bind({})
Continue.args = {
  hash: 'E8ECD0D6220090310E0F2BEC814795305153236EAD450921193B362A1CB7CF40',
}
