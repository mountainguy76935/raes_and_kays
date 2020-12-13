import React from 'react';
import styled from 'styled-components'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ChangeOrderBlock = styled.div`
    &{
        position: fixed;
        top: ${(props) => props.top};
        left: 35%;
        width: 420px;
        height: 550px;
        background-color: white;
        transition-duration: .4s;
        z-index: 200;
        overflow-y: scroll;
        box-shadow:
    0 2.8px 2.2px rgba(66, 57, 57, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
        padding-top: 3%;
        padding-bottom: 5%;
    }

    &::-webkit-scrollbar {
        width: .4vw;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: #b2464a;
    }
`

const ChangeOrderItem = styled.div`
    border-radius: 25px;
    border: solid black 1px;
    color: black;
    background-color: white;
    padding-top: 4%;
    padding-bottom: 4%;
    width: 60%;
    min-height: 8vh;
    margin: auto;
    box-shadow:
    0 2.8px 2.2px rgba(66, 57, 57, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`

export const ChangeOrder = props => {

    const node = React.useRef()

    const handleClickOff = (e) => {
        if (!node.current) {
            return;
        }
        if (!node.current.contains(e.target)) {
            props.setOpen(false)
        } else {
            return;
        }
    }

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOff)
        return () => document.removeEventListener('mousedown', handleClickOff)
    })

    return (
        <React.Fragment>
            {props.open ?
                <ChangeOrderBlock ref={node} top="7%">
                    <h4>Drag and drop to reorder menu items!</h4>
                    <DragDropContext onDragEnd={props.handleDragEnd}>
                        <Droppable droppableId="Items">
                            {(provided) =>
                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                    {props.items.length > 0 ?
                                        props.items.map((a, i) =>
                                            <Draggable
                                                key={a}
                                                draggableId={a}
                                                index={i}
                                            >
                                                {(provided) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <ChangeOrderItem key={a}>
                                                            {a}
                                                        </ChangeOrderItem>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ) :
                                        null}
                                    {provided.placeholder}
                                </div>
                            }
                        </Droppable>
                    </DragDropContext>
                </ChangeOrderBlock> :
                <ChangeOrderBlock top='200%'>

                </ChangeOrderBlock>}
        </React.Fragment>
    )
}