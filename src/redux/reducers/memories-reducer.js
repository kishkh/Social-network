
const initialState = {
  textValue: '', memories: [
    { idMemory: 1, memory: 'Started to learn React with it-kamasutra!', date: '04.02.2021' },
    { idMemory: 2, memory: 'Watching Top-Dog 7th season. Orel lose by hard knock out on the las 8 seconds', date: '11.02.2021' },
    { idMemory: 3, memory: 'My birthday', date: '05.02.2021' },
  ]
}


const memoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add-memory':
      let textKeeper = state.textValue
      if (textKeeper !== '') {
        return {
          ...state,
          textValue: '',
          memories: [
            ...state.memories,
            { idMemory: state.memories.length + 1, memory: state.textValue, date: '14.02.2021' }
          ]
        }
      }
      return state
    case 'Update-memory-value':
      return { ...state, textValue: action.value }
    default:
      return state;;
  }

}

export const updateMemoryValueCreator = (value) => {
  return { type: 'Update-memory-value', value: value }
}
export const addMemoryCreator = () => {
  return { type: 'Add-memory' }
}

export default memoriesReducer;