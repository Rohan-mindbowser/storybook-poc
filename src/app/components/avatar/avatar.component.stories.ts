import { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';

const meta: Meta<AvatarComponent> = {
  title: 'Components/Avatar',
  component: AvatarComponent,
  parameters: {
    docs: {
      description: {
        component: `
## 📌 Avatar Component
The **Avatar** component displays a profile picture, user initials, name, and email.

### ✨ Features:
- 🖼 **Displays profile image if available**
- 🔤 **Shows user initials when image is not provided**
- 📏 **Supports three sizes:** Small, Medium, Large
- 📧 **Displays user's name and email**

### 📖 Usage Example:
\`\`\`html
<app-avatar name="John Doe" email="john.doe@example.com" imageUrl="https://i.pravatar.cc/100"></app-avatar>
\`\`\`
      `,
      },
    },
  },
  argTypes: {
    imageUrl: {
      control: 'text',
      description: 'Profile picture URL (optional)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    name: {
      control: 'text',
      description: 'User full name (used for initials if no image is provided)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'John Doe' },
      },
    },
    email: {
      control: 'text',
      description: 'User email address',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'john.doe@example.com' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the avatar',
      table: {
        type: { summary: 'small | medium | large' },
        defaultValue: { summary: 'medium' },
      },
    },
  },
};

export default meta;

export const WithImage: StoryObj<AvatarComponent> = {
  args: {
    imageUrl: 'https://i.pravatar.cc/100',
    name: 'John Doe',
    email: 'john.doe@example.com',
    size: 'medium',
  },
};

export const WithInitials: StoryObj<AvatarComponent> = {
  args: {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    size: 'medium',
  },
};

export const Small: StoryObj<AvatarComponent> = {
  args: {
    name: 'RS',
    email: 'rs@example.com',
    size: 'small',
  },
};

export const Large: StoryObj<AvatarComponent> = {
  args: {
    imageUrl: 'https://i.pravatar.cc/150',
    name: 'Robert Williams',
    email: 'robert.w@example.com',
    size: 'large',
  },
};
