import {Meta, StoryObj} from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from './Text';

export default {
  title: 'Components/Checkebox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators:[ //Acrescenta elementos, no caso acrescentou uma div e o Text
    (Story) => {
      return (
        <label className='flex items-center gap-2'>
          {Story()} {/*Checkbox component*/}
          <Text size="sm">Lembrar-me de mim por 30 dias</Text>
        </label>
      )
    }
  ]
  
} as Meta<CheckboxProps>

//Variants
export const Default: StoryObj<CheckboxProps> = {}