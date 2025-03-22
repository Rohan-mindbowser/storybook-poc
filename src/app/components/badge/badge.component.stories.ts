import { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Components/Badge',
  component: BadgeComponent,
  parameters: {
    docs: {
      description: {
        component: `
### 📌 Badge Component
The **Badge** component is used to display status labels such as:

- ✅ Success
- ❌ Error
- ⚠️ Warning
- ℹ️ Info

🔹 Use the \`variant\` property to change the style.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'Badge variant type',
      table: {
        type: { summary: 'success | error | warning | info' },
        defaultValue: { summary: 'success' },
      },
    },
    label: {
      control: 'text',
      description: 'Text inside the badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Badge' },
      },
    },
  },
};

export default meta;

export const Success: StoryObj<BadgeComponent> = {
  args: {
    label: 'Success',
    variant: 'success',
  },
};

export const Error: StoryObj<BadgeComponent> = {
  args: {
    label: 'Error',
    variant: 'error',
  },
};

export const Warning: StoryObj<BadgeComponent> = {
  args: {
    label: 'Warning',
    variant: 'warning',
  },
};

export const Info: StoryObj<BadgeComponent> = {
  args: {
    label: 'Info',
    variant: 'info',
  },
};
