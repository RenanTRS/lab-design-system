import {Meta, StoryObj} from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum.',
    size: 'md' //default
  },
  argTypes: { //controles para documentação
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    },
    className: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextProps>

//Variants
export const Default: StoryObj<TextProps> = {}
export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
}
export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
}
export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Text with P tag</p>
    )
  },
  argTypes: { //remove table
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}
