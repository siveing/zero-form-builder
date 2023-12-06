import React from 'react';
import { FormElement } from './FormElements';
import { Button } from '../ui/button';
import { useDraggable } from '@dnd-kit/core';
import { cn } from '@/libs/utils';

function SidebarBtnElement({ formElement }: { formElement: FormElement }) {
    const { label, icon: Icon } = formElement.designerBtnElement;
    const draggable = useDraggable({
        id: `designer-btn-${formElement.type}`,
        data: {
            type: formElement.type,
            isDesignerBtnElement: true
        }
    });

    return (
        <Button
            ref={draggable.setNodeRef}
            variant={'outline'}
            className={cn(
                'flex flex-row justify-start item-center gap-4 h-[45px] w-full cursor-grab',
                draggable.isDragging && 'ring-2 ring-primary'
            )}
            {...draggable.listeners}
            {...draggable.attributes}
        >
            <Icon className="h-5 w-5 text-primary cursor-grab" />
            <p className="text-xs">{label}</p>
        </Button>
    );
}

export function SidebarBtnElementDragOverlay({ formElement }: { formElement: FormElement }) {
    const { label, icon: Icon } = formElement.designerBtnElement;

    return (
        <Button variant={'outline'} className="flex flex-row  justify-start item-center gap-2 h-[45px] w-full cursor-grab">
            <Icon className="h-5 w-5 text-primary cursor-grab" />
            <p className="text-xs">{label}</p>
        </Button>
    );
}

export default SidebarBtnElement;
