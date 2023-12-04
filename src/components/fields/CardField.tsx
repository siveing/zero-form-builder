'use client';

import {
    ElementsType,
    FormElement,
    FormElementInstance
} from '@/components/formElement/FormElements';
import { Label } from '../ui/label';

import { RiSdCardLine, RiSquareLine } from 'react-icons/ri';
import { Card } from '../ui/card';

const type: ElementsType = 'CardField';

const elements: FormElementInstance[] = [];

export const CardFieldFormElement: FormElement = {
    type,
    construct: (id: string) => ({
        id,
        type,
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

function DesignerComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    console.log({elementInstance});
    
    return (
        <div className="flex flex-col gap-2 w-full">
            <Label className="text-muted-foreground">Card field</Label>
            <Card />
        </div>
    );
}

function FormComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    return <Card />;
}

function PropertiesComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    return <p>No properties for this element</p>;
}
