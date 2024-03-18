import { Avatar, AvatarProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  args: {
    // src: 'https://source.unsplash.com/random',
    src: 'https://github.com/gbraghetti.png',
    alt: 'Gustavo Braghetti',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallBack: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
