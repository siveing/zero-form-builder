export class MSoftDelete {
    createdAt: string;
    updatedAt: string;
    deleteAt?: string | null;

    constructor(data: any) {
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
        this.deleteAt = data.deleteAt;
    }
}