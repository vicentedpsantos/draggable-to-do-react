// @format
import React, {Component, Fragment} from 'react';
import styled from 'styled-components';
import {Droppable, Draggable} from 'react-beautiful-dnd';

import Task from './Task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: ${props => (props.isDragginOver ? 'lightweight' : 'black')};
  padding: 8px;
`;

const TaskList = styled.div`
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')};
  transition: background-color 0.5s ease;
  padding: 8px;
  flex-grow: 1;
  min-height: 100px;
`;

class Column extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {provided => (
          <Container {...provided.draggableProps} ref={provided.innerRef}>
            <Title {...provided.dragHandleProps}>
              {this.props.column.title}
            </Title>{' '}
            <Droppable
              droppableId={this.props.column.id}
              isDropDisabled={this.props.isDropDisabled}>
              {(provided, snapshot) => (
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}>
                  {this.props.tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index} />
                  ))}
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Column;
