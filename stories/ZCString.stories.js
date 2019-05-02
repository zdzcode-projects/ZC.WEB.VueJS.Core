import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import ZCString from '../src/components/ZCString.vue';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2019, 5, 2, 9, 0),
};

export const methods = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

storiesOf('ZCString', module)
  .add('default', () => {
    return {
      components: { ZCString },
      template: `<ZCString :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
      data: () => ({ task }),
      methods,
    };
  })
  .add('pinned', () => {
    return {
      components: { ZCString },
      template: `<ZCString :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
      data: () => ({ task: { ...task, state: 'TASK_PINNED' } }),
      methods,
    };
  })
  .add('archived', () => {
    return {
      components: { ZCString },
      template: `<ZCString :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
      data: () => ({ task: { ...task, state: 'TASK_ARCHIVED' } }),
      methods,
    };
  });