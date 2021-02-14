
const initialState = {textValue:'', memories:[
  {idMemory: 1, memory:'Started to learn React with it-kamasutra!', date: '04.02.2021'},
  {idMemory: 2, memory:'Watching Top-Dog 7th season. Orel lose by hard knock out on the las 8 seconds', date: '11.02.2021'},
  {idMemory: 3, memory:'My birthday', date: '05.02.2021'},  
]}
let idCounter = 3;

const memoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Update-memory-value':
      state.textValue = action.value
      return state;;
    case 'Add-memory':
      if(state.textValue !== ''){
        idCounter++;
        state.memories.push({idMemory: idCounter, memory: state.textValue, date:'14.02.2021'})
        state.textValue = '';
      }
      return state;
    default:
      return state;;
  }
  
}

export const updateMemoryValueCreator = (value) => {
  return {type: 'Update-memory-value', value: value}
}
export const addMemoryCreator = () => {
  return {type: 'Add-memory'}
}

export default memoriesReducer;