import React from 'react';
import { connect } from 'react-redux';
import Memories from './Memories';
import { updateMemoryValueCreator, addMemoryCreator } from './../../../../redux/reducers/memories-reducer';

const mapStateToProps = (state) => {
  return {
    textValue: state.memories.textValue,
    memories: state.memories.memories
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addMemory: () => {
      dispatch(addMemoryCreator())
    },
    updateMemoryValue: (value) => {
      dispatch(updateMemoryValueCreator(value))
    }
  }
}
const MemoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Memories)
export default MemoriesContainer;