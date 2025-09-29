import ScaleLine from '@/components/ScaleLine.vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta = {
  component: ScaleLine,
} satisfies Meta<typeof ScaleLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
