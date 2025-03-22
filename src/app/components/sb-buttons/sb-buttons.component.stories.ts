import { Meta, StoryObj } from '@storybook/angular';
import { SbButtonsComponent } from './sb-buttons.component';

const meta: Meta<SbButtonsComponent> = {
  title: 'Components/Button',
  component: SbButtonsComponent,
  parameters: {
    docs: {
      description: {
        component: `
### 📌 Button Component
This button component supports different variants:

- **Primary** (default)
- **Secondary**
- **Outlined**
- **Filled**

🔹 Use the \`variant\` property to switch between styles.
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outlined', 'filled'],
      description: 'Select the button style variant.',
      table: {
        type: { summary: 'primary | secondary | outlined | filled' },
        defaultValue: { summary: 'primary' },
      },
    },
    label: {
      control: 'text',
      description: 'Text to display on the button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Click me' },
      },
    },
  },
};

export default meta;

export const Primary: StoryObj<SbButtonsComponent> = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: StoryObj<SbButtonsComponent> = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Outlined: StoryObj<SbButtonsComponent> = {
  args: {
    label: 'Outlined Button',
    variant: 'outlined',
  },
};

export const Filled: StoryObj<SbButtonsComponent> = {
  args: {
    label: 'Filled Button',
    variant: 'filled',
  },
};
