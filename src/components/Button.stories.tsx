import {Meta, StoryObj} from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {
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
  
} as Meta<ButtonProps>

//Variants
export const Default: StoryObj<ButtonProps> = {}