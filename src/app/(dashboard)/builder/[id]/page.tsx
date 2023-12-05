import FormBuilder from '@/components/formBuilder/FormBuilder';
import { FormMock } from '@/constants';
import { MFormTemplate } from '@/models/form/MFormTemplate.model';
import { filter } from 'lodash';

async function BuilderPage({
    params
}: {
    params: {
        id: string;
    };
}) {
    const { id } = params;
    const dataMock: MFormTemplate[] = filter(FormMock, { id });



        // const dataFromLocal = localStorage.getItem('zeroByJin');
        // console.log(dataFromLocal);
        

    const form = {
        content: '[]'
    };

    if (!id) return null;

    return <FormBuilder form={form} dataMock={dataMock[0]} />;
}

export default BuilderPage;
