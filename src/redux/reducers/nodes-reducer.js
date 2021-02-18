const initialState = {
  textValue: '', nodes: [
    { idNode: 1, node: ' Some Node 1', date: new Date().toLocaleString(), favorite: false },
    { idNode: 2, node: ' Some Node 2', date: new Date().toLocaleString(), favorite: false },
  ]
}
let idCounter = 2;
const nodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add-node':
      if (state.textValue !== '') {
        idCounter++;
        return {
          ...state,
          textValue: '',
          nodes: [
            ...state.nodes,
            {
              idNode: idCounter,
              node: state.textValue,
              date: new Date().toLocaleString(),
              favorite: false
            }
          ]
        }
      }
      return state
    case 'Update-node-value':
      return { ...state, textValue: action.value }
    case 'Remove-node': {
      let stateCopy = JSON.parse(JSON.stringify(state))
      const newNodes = stateCopy.nodes.filter(node => node.idNode !== action.id)
      stateCopy.nodes = newNodes;
      return stateCopy;
    }
    case 'Favorite-node': {
      let stateCopy = JSON.parse(JSON.stringify(state))
      stateCopy.nodes.forEach(node => {
        if (node.idNode === action.id) {
          node.favorite = !node.favorite
        }
      })
      return stateCopy;
    }
    default:
      return state;
  }
}

export const favoriteNodeCreator = (id) => {
  return { type: 'Favorite-node', id: id }
}
export const removeNodeCreator = (id) => {
  return { type: 'Remove-node', id: id }
};
export const updateNodeValueCreator = (value) => {
  return { type: 'Update-node-value', value: value }
};
export const addNodeCreator = () => {
  return { type: 'Add-node' }
};

export default nodesReducer;
