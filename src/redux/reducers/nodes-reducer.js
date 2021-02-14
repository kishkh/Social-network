const initialState = {
  textValue: '', nodes: [
    { idNode: 1, node: ' Some Node 1', date: new Date().toLocaleString()},
    { idNode: 2, node: ' Some Node 2', date: new Date().toLocaleString()},
  ]
}
let idCounter = 2;
const nodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add-node':
      if (state.textValue !== '') {
        idCounter++;
        state.nodes.push({ idNode: idCounter, node: state.textValue, date: new Date().toLocaleString()})
        state.textValue = '';
      }
      return state
    case 'Update-text-value':
      state.textValue = action.value
      return state;
    case 'Remove-node':
      const newNodes = state.nodes.filter(node => node.idNode !== action.id)
      state.nodes = newNodes;
      return state;
    default:
      return state;
  }
}

export const removeNodeCreator = (id) => {
  return {type: 'Remove-node', id: id}
}
export const updateTextValueCreator = (value) => {
  return { type: 'Update-text-value', value: value }
};
export const addNodeCreator = () => {
  return { type: 'Add-node' }
};

export default nodesReducer;
