import React from 'react';
import Nodes from './Nodes';
import { updateNodeValueCreator, addNodeCreator, removeNodeCreator, favoriteNodeCreator, updateProfileStatsCreator} from './../../../../redux/reducers/nodes-reducer'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    nodes: state.nodes.nodes,
    textValue: state.nodes.textValue
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddNode: (tasks, memories, nodes) => {
      
      dispatch(addNodeCreator())
      // dispatch(updateProfileStatsCreator(tasks, memories, nodes))
    },
    onUpdateNodeValue: (value) => {
      dispatch(updateNodeValueCreator(value))
    },
    onRemoveNode: (id) => {
      dispatch(removeNodeCreator(id))
    },
    onFavoriteNode: (id) => {
      dispatch(favoriteNodeCreator(id))
    }
  }
}

const NodesContainer = connect(mapStateToProps, mapDispatchToProps)(Nodes)
export default NodesContainer;