'use client';

import React, { useState } from 'react';
import DesignerSidebar from './DesignerSidebar';
import { DragEndEvent, useDndMonitor, useDraggable, useDroppable } from '@dnd-kit/core';
import { ConvertArrayElementToRow, cn } from '@/libs/utils';
import useDesigner from '@/hooks/useDesigner';
import {
    ElementsType,
    FormElementInstance,
    FormElements
} from '@/components/formElement/FormElements';
import { idGenerator } from '@/libs/idGenerator';
import { Button } from '../ui/button';
import { BiSolidTrash } from 'react-icons/bi';
import DesignerRightSidebar from './DesignerRightSidebar';

function Designer() {
    const {
        elements,
        addElement,
        selectedElement,
        setSelectedElement,
        removeElement
    } = useDesigner();

    const droppable = useDroppable({
        id: 'designer-drop-area',
        data: {
            isDesignerDropArea: true
        }
    });

    useDndMonitor({
        onDragEnd: (event: DragEndEvent) => {
            const { active, over } = event;
            if (!active || !over) return;

            const isDesignerBtnElement = active.data?.current?.isDesignerBtnElement;
            const isDroppingOverDesignerDropArea = over.data?.current?.isDesignerDropArea;

            const droppingSidebarBtnOverDesignerDropArea =
                isDesignerBtnElement && isDroppingOverDesignerDropArea;

            // First scenario
            if (droppingSidebarBtnOverDesignerDropArea) {
                const type = active.data?.current?.type;
                const newElement = FormElements[type as ElementsType].construct(idGenerator());

                newElement.startWithNewLine = true;

                addElement(elements.length, newElement);
                return;
            }

            const isDroppingOverDesignerElementTopHalf =
                over.data?.current?.isTopHalfDesignerElement;

            const isDroppingOverDesignerElementBottomHalf =
                over.data?.current?.isBottomHalfDesignerElement;

            /**
             * Left element setting
             */
            const isDroppingOverDesignerElementRightHalf =
                over.data?.current?.isRightHalfDesignerElement;

            const isDroppingOverDesignerElement =
                isDroppingOverDesignerElementTopHalf ||
                isDroppingOverDesignerElementBottomHalf ||
                isDroppingOverDesignerElementRightHalf;

            const droppingSidebarBtnOverDesignerElement =
                isDesignerBtnElement && isDroppingOverDesignerElement;

            // Second scenario
            if (droppingSidebarBtnOverDesignerElement) {
                const type = active.data?.current?.type;
                const newElement = FormElements[type as ElementsType].construct(idGenerator());

                /**
                 * Default line col of element
                 */
                newElement.startWithNewLine = true;

                const overId = over.data?.current?.elementId;

                const overElementIndex = elements.findIndex((el) => el.id === overId);
                if (overElementIndex === -1) {
                    throw new Error('element not found');
                }

                let indexForNewElement = overElementIndex; // i assume i'm on top-half
                if (isDroppingOverDesignerElementBottomHalf) {
                    indexForNewElement = overElementIndex + 1;
                }

                if (isDroppingOverDesignerElementRightHalf) {
                    indexForNewElement = overElementIndex + 1;
                    newElement.startWithNewLine = false;
                }

                addElement(indexForNewElement, newElement);
                return;
            }

            // Third scenario
            const isDraggingDesignerElement = active.data?.current?.isDesignerElement;

            const draggingDesignerElementOverAnotherDesignerElement =
                isDroppingOverDesignerElement && isDraggingDesignerElement;

            if (draggingDesignerElementOverAnotherDesignerElement) {
                const activeId = active.data?.current?.elementId;
                const overId = over.data?.current?.elementId;

                const activeElementIndex = elements.findIndex((el) => el.id === activeId);

                const overElementIndex = elements.findIndex((el) => el.id === overId);

                if (activeElementIndex === -1 || overElementIndex === -1) {
                    throw new Error('element not found');
                }

                const activeElement = { ...elements[activeElementIndex] };
                removeElement(activeId);

                /**
                 * Set the row back
                 */
                activeElement.startWithNewLine = true;

                let indexForNewElement = overElementIndex; // i assume i'm on top-half
                if (isDroppingOverDesignerElementBottomHalf) {
                    indexForNewElement = overElementIndex + 1;
                }

                if (isDroppingOverDesignerElementRightHalf) {
                    indexForNewElement = overElementIndex + 1;
                    activeElement.startWithNewLine = false;
                }

                addElement(indexForNewElement, activeElement);
            }
        }
    });

    const dataRowCol = ConvertArrayElementToRow(elements);

    return (
        <div className="flex w-full h-full">
            <DesignerSidebar />
            <div
                className="p-4 w-full"
                onClick={() => {
                    if (selectedElement) setSelectedElement(null);
                }}
            >
                <div
                    ref={droppable.setNodeRef}
                    className={cn(
                        'bg-background max-w-[920px] h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto border',
                        droppable.isOver && 'ring-4 ring-primary ring-inset'
                    )}
                >
                    {!droppable.isOver && elements.length === 0 && (
                        <p className="text-3xl text-muted-foreground flex flex-grow items-center font-bold">
                            Drop here
                        </p>
                    )}

                    {droppable.isOver && elements.length === 0 && (
                        <div className="p-4 w-full">
                            <div className="h-[120px] rounded-md bg-primary/20"></div>
                        </div>
                    )}

                    {elements.length > 0 && (
                        <div className="w-full p-4">
                            {dataRowCol.map((element, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-${
                                        element.length > 1 ? 'grow' : 'col'
                                    } gap-2`}
                                >
                                    {element?.map((item: FormElementInstance) => (
                                        <DesignerElementWrapper
                                            key={item.id}
                                            element={item}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <DesignerRightSidebar />
        </div>
    );
}

function DesignerElementWrapper({ element }: { element: FormElementInstance }) {
    /**
     * Select the element and apply the properties
     */
    const { removeElement, selectedElement, setSelectedElement } = useDesigner();

    const [mouseIsOver, setMouseIsOver] = useState<boolean>(false);
    const topHalf = useDroppable({
        id: element.id + '-top',
        data: {
            type: element.type,
            elementId: element.id,
            isTopHalfDesignerElement: true
        }
    });

    const bottomHalf = useDroppable({
        id: element.id + '-bottom',
        data: {
            type: element.type,
            elementId: element.id,
            isBottomHalfDesignerElement: true
        }
    });

    const draggable = useDraggable({
        id: element.id + '-drag-handler',
        data: {
            type: element.type,
            elementId: element.id,
            isDesignerElement: true
        }
    });

    const rightHalf = useDroppable({
        id: element.id + '-left',
        data: {
            type: element.type,
            elementId: element.id,
            isRightHalfDesignerElement: true
        }
    });

    if (draggable.isDragging) return null; // temporary remove the element from designer

    const DesignerElement = FormElements[element.type].designerComponent;
    return (
        <div
            ref={draggable.setNodeRef}
            {...draggable.listeners}
            {...draggable.attributes}
            className="relative h-[120px] grow text-foreground hover:cursor-pointer rounded-md ring-1 ring-accent ring-inset mb-[0.5rem]"
            onMouseEnter={() => {
                setMouseIsOver(true);
            }}
            onMouseLeave={() => {
                setMouseIsOver(false);
            }}
            onClick={(e) => {
                e.stopPropagation();
                setSelectedElement(element);
            }}
        >
            <div ref={topHalf.setNodeRef} className="absolute w-full h-1/2 rounded-t-md" />
            <div
                ref={bottomHalf.setNodeRef}
                className="absolute  w-full bottom-0 h-1/2 rounded-b-md"
            />

            <div ref={rightHalf.setNodeRef} className="absolute w-1/2 h-full right-0" />

            {mouseIsOver && (
                <>
                    <div className="absolute right-0 h-full z-20">
                        <Button
                            className="flex justify-center h-full border rounded-md rounded-l-none bg-red-500"
                            variant={'outline'}
                            onClick={(e) => {
                                e.stopPropagation(); // avoid selection of element while deleting
                                removeElement(element.id);
                            }}
                        >
                            <BiSolidTrash className="h-6 w-6" />
                        </Button>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
                        <p className="text-muted-foreground text-sm">
                            Click for properties or drag to move
                        </p>
                    </div>
                </>
            )}

            {topHalf.isOver && (
                <div className="absolute top-0 w-full rounded-md h-[7px] bg-orange-300 rounded-b-none" />
            )}

            <div
                className={cn(
                    'flex w-full h-[120px] items-center rounded-md bg-accent/40 px-4 py-2 pointer-events-none opacity-100',
                    mouseIsOver && 'opacity-30'
                )}
            >
                <DesignerElement elementInstance={element} />
            </div>

            {rightHalf.isOver && (
                <div className="absolute top-0 right-0 w-[7px] rounded-md h-full bg-yellow-300 rounded-b-none" />
            )}

            {bottomHalf.isOver && (
                <div className="absolute bottom-0 w-full rounded-md h-[7px]  bg-orange-300 rounded-t-none" />
            )}
        </div>
    );
}

export default Designer;
