import { MFormTemplate } from '@/models/form/MFormTemplate.model';

export const FormMock: MFormTemplate[] = [
    {
        id: '1',
        code: '28272',
        name: 'Form for IT banking',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        isPublic: false,
        status: false,
        creatorId: null,
        modifierId: null,
        createdAt: '2023-12-01',
        updatedAt: '2023-12-01',
        deleteAt: null,
        formTemplateBlock: [
            {
                id: 'block-aa',
                formTemplateId: '1',
                sequence: 1,
                status: false,
                name: 'Form for IT banking',
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                creatorId: null,
                modifierId: null,
                createdAt: '2023-12-01',
                updatedAt: '2023-12-01',
                deleteAt: null,
                formTemplateBlockComponent: [
                    {
                        id: 'block-component-aa',
                        formTemplateId: '1',
                        formTemplateBlockId: 'block-aa',
                        sequence: 1,
                        type: 'TextField',
                        value: 'Siveing',
                        label: 'Name',
                        creatorId: null,
                        modifierId: null,
                        createdAt: '2023-12-01',
                        updatedAt: '2023-12-01',
                        deleteAt: null
                    },
                    {
                        id: 'block-component-ab',
                        formTemplateId: '1',
                        formTemplateBlockId: 'block-aa',
                        sequence: 1,
                        type: 'TextField',
                        value: 'siveing.huyy@gmail.com',
                        label: 'Email',
                        creatorId: null,
                        modifierId: null,
                        createdAt: '2023-12-01',
                        updatedAt: '2023-12-01',
                        deleteAt: null
                    }
                ]
            },
            {
                id: 'block-ab',
                formTemplateId: '1',
                sequence: 2,
                status: false,
                name: 'Form for IT banking',
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                creatorId: null,
                modifierId: null,
                createdAt: '2023-12-01',
                updatedAt: '2023-12-01',
                deleteAt: null,
                formTemplateBlockComponent: [
                    {
                        id: 'block-component-ba',
                        formTemplateId: '1',
                        formTemplateBlockId: 'block-ab',
                        sequence: 1,
                        type: 'SelectField',
                        value: 'siveing',
                        label: 'Name',
                        options: '[siveing, luna, thomas]',
                        creatorId: null,
                        modifierId: null,
                        createdAt: '2023-12-01',
                        updatedAt: '2023-12-01',
                        deleteAt: null
                    }
                ]
            }
        ]
    }
];
