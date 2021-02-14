const initialState = {
  textValue: '', tasks: [
    { idTask: 1, task: 'Do something 1', deadLine: '2020202', done: '' },
  ]
}
let idCounter = 1;
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add-task':
      if (action.task !== '') {
        idCounter++;
        state.tasks.push({
          idTask: idCounter,
          task: state.textValue,
          deadLine: '202302',
          done: ''
        })
        state.textValue = ''
      }
      return state;
    case 'Update-task-value':
      state.textValue = action.value
      return state;
    default:
      return state;
  }
}

export const addTaskCreator = () => {
  return { type: 'Add-task'}
}
export const updateTaskValueCreator = (value) => {
  return { type: 'Update-task-value', value: value}
}

export default tasksReducer;