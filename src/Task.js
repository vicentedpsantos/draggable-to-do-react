// @format
import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const TaskContainer = styled.div`
  margin: 8px;
  padding: 8px;
  border: 1px solid ${props => (props.isDragging ? 'lightgreen' : 'lightgrey')};
  border-radius: 4px;
  color: black;
  background-color: ${props =>
    props.isDragDisabled
      ? 'lightgrey'
      : props.isDragging
      ? 'lightgreen'
      : 'white'};
  display: flex;
`;

const Handle = styled.div`
  background-color: orange;
  height: 20px;
  width: 20px;
  border-radius: 4px;
  margin-right: 1em;
`;

export default class Task extends React.Component {
  render() {
    const isDragDisabled = this.props.task.id === 'task-1';

    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
        isDragDisabled={isDragDisabled}>
        {(provided, snapshot) => (
          <TaskContainer
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            isDragDisabled={isDragDisabled}>
            <Handle {...provided.dragHandleProps} />
            {this.props.task.content}
          </TaskContainer>
        )}
      </Draggable>
    );
  }
}
