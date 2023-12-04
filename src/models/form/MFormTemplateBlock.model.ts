import { MSoftDelete } from "..";
import { MFormTemplateBlockComponent } from "./MFormTemplateBlockComponent.model";

/**
 * Form Template Model
 */
export class MFormTemplateBlock extends MSoftDelete {
    id: string;
    formTemplateId: string;
    sequence: number;
    name: string;
    description: string;
    status: boolean;
    creatorId?: string | null;
    modifierId?: string | null;
    /**
     * Form block component
     */
    formTemplateBlockComponent?: MFormTemplateBlockComponent[];

    constructor(data: any) {
        super(data);
        this.id = data.id;
        this.formTemplateId = data.formTemplateId;
        this.sequence = data.sequence;
        this.name = data.name;
        this.description = data.description;
        this.status = data.status;
        this.creatorId = data.creatorId;
        this.modifierId = data.modifierId;

        this.formTemplateBlockComponent = data.formTemplateBlockComponent;
    }
}
