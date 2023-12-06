import React from 'react';
import SidebarBtnElement from './SidebarBtnElement';
import { FormElements } from './FormElements';
import { Separator } from '../ui/separator';

function FormElementsSidebar() {
    return (
        <div>
            <Separator className="my-2" />
            <p className="text-sm text-muted-foreground font-bold col-span-1 md:col-span-2 my-2 place-self-start">
                Layout elements
            </p>
            <div className="grid grid-cols-1 gap-2 place-items-center">
                <SidebarBtnElement formElement={FormElements.CardField} />
                <SidebarBtnElement formElement={FormElements.TitleField} />
                <SidebarBtnElement formElement={FormElements.SubTitleField} />
                <SidebarBtnElement formElement={FormElements.ParagraphField} />
                <SidebarBtnElement formElement={FormElements.SeparatorField} />
                <SidebarBtnElement formElement={FormElements.SpacerField} />
            </div>
            <p className="text-sm text-muted-foreground font-bold col-span-1 md:col-span-2 my-2 place-self-start">
                Form elements
            </p>
            <div className="grid grid-cols-1 gap-2 place-items-center">
                <SidebarBtnElement formElement={FormElements.TextField} />
                <SidebarBtnElement formElement={FormElements.NumberField} />
                <SidebarBtnElement formElement={FormElements.TextAreaField} />
                <SidebarBtnElement formElement={FormElements.DateField} />
                <SidebarBtnElement formElement={FormElements.SelectField} />
                <SidebarBtnElement formElement={FormElements.CheckboxField} />
            </div>
        </div>
    );
}

export default FormElementsSidebar;
