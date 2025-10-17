import type { Meta, StoryObj } from '@storybook/vue3-vite';
import MapView from '@/components/MapView.vue';

const meta = {
  component: MapView,
} satisfies Meta<typeof MapView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
