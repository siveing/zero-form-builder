'use client';

import {
    ElementsType,
    FormElement,
    FormElementInstance
} from '@/components/formElement/FormElements';
import { Label } from '../ui/label';

import { RiSquareLine } from 'react-icons/ri';
import { Card } from '../ui/card';
import { idGenerator } from '@/libs/idGenerator';
import { Button } from '../ui/button';

const type: ElementsType = 'CardField';

const title: string = 'card-' + idGenerator();

const defualtElement: FormElementInstance = {
    extraAttributes: {
        label: 'Text field',
        helperText: 'Helper text',
        required: false,
        placeHolder: 'Value here...'
    },
    id: idGenerator(),
    type: 'TextField'
};

const elements: FormElementInstance[] = [defualtElement];

export const CardFieldFormElement: FormElement = {
    type,
    construct: (id: string) => ({
        id,
        type,
        title,
        elements
    }),

    designerBtnElement: {
        icon: RiSquareLine,
        label: 'Block field'
    },

    designerComponent: DesignerComponent,
    formComponent: FormComponent,
    propertiesComponent: PropertiesComponent,

    validate: () => true
};

const handleAddQuestion = () => {
    console.log('handleAddQuestion');
};

function addElement({ formElement }: { formElement: FormElementInstance }): void {
    console.log({ formElement });
}

function DesignerComponent({ elementInstance }: { elementInstance: FormElementInstance }) {

    return (
        <div className="flex flex-col gap-2 w-full">
            <Label className="text-muted-foreground">Card field</Label>
        </div>

        // <Card>
        //     <h1>Hello</h1>
        // </Card>
    );
}

function FormComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    return <Card />;
}

function PropertiesComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    return <p>No properties for this element</p>;
}
