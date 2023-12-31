const data = {
  tasks: {
    'task-1': { id: 'task-1', content: 'A task'},
    'task-2': { id: 'task-2', content: 'Task too electric boogaloo'},
    'task-3': { id: 'task-3', content: 'Is my work ever done?'},
    'task-4': { id: 'task-4', content: 'Idle hands etc... put something here to test the styling still works for longer strings'},
  },

  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Backlog',
    },
    'list-2': {
      id: 'list-2',
      title: 'To Do',
    },
    'list-3': {
      id: 'list-3',
      title: 'In progress',
    },
    'list-4': {
      id: 'list-4',
      title: 'Done',
    }
  },

  taskOrders: {
    'list-1': ['task-1', 'task-2', 'task-3', 'task-4'],
    'list-2': [],
    'list-3': [],
    'list-4': []
  },

  listOrder: ['list-1', 'list-2', 'list-3', 'list-4']
}

export default data