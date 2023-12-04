import { MSoftDelete } from "..";

/**
 * Form Template Model
 */
export class MFormTemplateBlockComponent extends MSoftDelete {
    id: string;
    formTemplateId: string;
    formTemplateBlockId: string;
    sequence: number;
    label: string;
    type: string;
    value: string;
    condition?: string;
    options?: string;
    isMultiple?: boolean;
    creatorId?: string | null;
    modifierId?: string | null;

    constructor(data: any) {
        super(data);
        this.id = data.id;
        this.formTemplateId = data.formTemplateId;
        this.formTemplateBlockId = data.formTemplateBlockId;
        this.sequence = data.sequence;
        this.label = data.label;
        this.type = data.type;
        this.value = data.value;
        this.isMultiple = data.isMultiple;
        this.condition = data.condition;
        this.options = data.options;
        this.creatorId = data.creatorId;
        this.modifierId = data.modifierId;
    }
}
