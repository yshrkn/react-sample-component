import type { Meta, StoryObj } from '@storybook/react';
import Text from '../lib/components/text/Text';

const meta = {
  args: {
    children: 'Hello',
  },
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Bold: Story = {
  args: {
    bold: true,
  },
};
