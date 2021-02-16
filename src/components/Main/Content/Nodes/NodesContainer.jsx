import React from 'react';
import Nodes from './Nodes';
import { updateNodeValueCreator, addNodeCreator, removeNodeCreator, favoriteNodeCreator } from './../../../../redux/reducers/nodes-reducer'
const NodesContainer = (props) => {
  const state = props.store.getState().nodes;
  
  const onAddNode = () => {
    props.store.dispatch(addNodeCreator());
  }
  const onUpdateNodeValue = (value) => {
    props.store.dispatch(updateNodeValueCreator(value));
  }
  const onRemoveNode = (id) => {
    props.store.dispatch(removeNodeCreator(id))
  }
  const onFavoriteNode = (id) => {
    props.store.dispatch(favoriteNodeCreator(id))
  }

  return (
    <Nodes 
      onAddNode={ onAddNode } 
      onUpdateNodeValue={onUpdateNodeValue}
      textValue={state.textValue}
      onRemoveNode={onRemoveNode}
      onFavoriteNode={onFavoriteNode}
      data={state.nodes}
    />
  );
}

export default NodesContainer;