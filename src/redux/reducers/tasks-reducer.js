const initialState = {
  textValue: '', tasks: [
    { idTask: 1, task: 'Do something 1', deadLine: '2020202', done: '' },
  ]
}
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add-task': {
      if (action.task !== '') {
        return {
          ...state,
          textValue: '',
          tasks: [
            ...state.tasks,
            {
              idTask: state.tasks.length + 1,
              task: state.textValue,
              deadLine: '202302',
              done: ''
            }
          ]
        }
      }
      return state;
    }
    case 'Update-task-value': {
      return { ...state, textValue: action.value }
    }
    default:
      return state;
  }
}

export const addTaskCreator = () => {
  return { type: 'Add-task' }
}
export const updateTaskValueCreator = (value) => {
  return { type: 'Update-task-value', value: value }
}

export default tasksReducer;