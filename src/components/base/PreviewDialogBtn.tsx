import React from 'react';
import { Button } from '../ui/button';
import { MdPreview } from 'react-icons/md';
import useDesigner from '@/hooks/useDesigner';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { FormElementInstance, FormElements } from '@/components/formElement/FormElements';
import { ConvertArrayElementToRow } from '@/libs/utils';

function PreviewDialogBtn() {
    const { elements } = useDesigner();

    if (elements?.length <= 0) return null;
    const dataRowCol = ConvertArrayElementToRow(elements);

    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button variant={'outline'} className="gap-2">
                    <MdPreview className="h-6 w-6" />
                    Preview
                </Button>
            </DialogTrigger>
            <DialogContent className="w-screen h-screen max-h-screen max-w-full flex flex-col flex-grow p-0 gap-0">
                <div className="px-4 py-2 border-b">
                    <p className="text-lg font-bold text-muted-foreground">Form preview</p>
                    <p className="text-sm text-muted-foreground">
                        This is how your form will look like to your users.
                    </p>
                </div>
                <div className="bg-accent flex flex-col flex-grow items-center justify-center p-4 overflow-y-auto">
                    <div className="max-w-[620px] flex flex-col gap-4 flex-grow bg-background h-full w-full rounded-2xl p-8 overflow-y-auto">
                        <div className="w-full p-4">
                            {dataRowCol.map((element, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-${
                                        element.length > 1 ? 'grow' : 'col'
                                    } gap-3 mb-4`}
                                >
                                    {element?.map((item: FormElementInstance) => {
                                        const FormComponent = FormElements[item.type].formComponent;
                                        return (
                                            <FormComponent key={item.id} elementInstance={item} />
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default PreviewDialogBtn;
