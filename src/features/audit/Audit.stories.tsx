import React from 'react'
import { Story, Meta } from '@storybook/react'

import Page from './Presenter'

export default {
  title: 'Pages/Audit',
  component: Page,
} as Meta

const Template: Story = (args) => <Page {...args} />

export const Default = Template.bind({})
Default.args = {}
