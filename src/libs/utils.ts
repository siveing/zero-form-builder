import { MFormTemplate } from '@/models/form/MFormTemplate.model';
import { MFormTemplateBlock } from '@/models/form/MFormTemplateBlock.model';
import { MFormTemplateBlockComponent } from '@/models/form/MFormTemplateBlockComponent.model';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function RenderDataToContent(data: MFormTemplate) {
    const elements: any = [];

    data?.formTemplateBlock?.map((formBlock: MFormTemplateBlock) => {
        formBlock.formTemplateBlockComponent?.map((formBlockComp: MFormTemplateBlockComponent) => {
            elements.push({
                id: formBlockComp.id,
                type: formBlockComp.type,
                extraAttributes: {
                    label: formBlockComp.label,
                    required: formBlockComp.condition,
                    placeHolder: formBlockComp.label,
                    options: formBlockComp.options
                }
            });
        });
    });

    return elements;
}
