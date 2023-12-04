import { MSoftDelete } from "..";
import { MFormTemplateBlock } from "./MFormTemplateBlock.model";

/**
 * Form Template Model
 */
export class MFormTemplate extends MSoftDelete {
    id: string;
    code: string;
    name: string;
    description: string;
    isPublic: boolean;
    status: boolean;
    creatorId?: string | null;
    modifierId?: string | null;
    /**
     * Form block
     */
    formTemplateBlock: MFormTemplateBlock[];

    constructor(data: any) {
        super(data);
        this.id = data.id;
        this.code = data.code;
        this.name = data.name;
        this.description = data.description;
        this.isPublic = data.isPublic;
        this.status = data.status;
        this.creatorId = data.creatorId;
        this.modifierId = data.modifierId;

        this.formTemplateBlock = data.formTemplateBlock;
    }
}
