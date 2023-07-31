const data = {
  tasks: {
    'task-1': { id: 'task-1', content: 'A task'},
    'task-2': { id: 'task-2', content: 'Another task'},
    'task-3': { id: 'task-3', content: 'Is my work ever done?'},
    'task-4': { id: 'task-4', content: 'Idle hands etc...'},
  },

  lists: {
    'list-1': {
      id: 'list-1',
      title: 'To do'
    },
    'list-2': {
      id: 'list-2',
      title: 'In progress'
    },
    'list-3': {
      id: 'list-3',
      title: 'Done'
    }
  },

  taskOrders: {
    'list-1': ['task-1', 'task-2', 'task-3', 'task-4'],
    'list-2': [],
    'list-3': []
  },

  listOrder: ['list-1', 'list-2', 'list-3']
}

export default data