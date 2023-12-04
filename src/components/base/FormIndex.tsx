import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '../ui/form';
import { Input } from '../ui/input';

function FormIndex({ form }: { form: any }) {
    return (
        <FormField
            control={form.control}
            name="index"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Index</FormLabel>
                    <FormControl>
                        <Input
                            {...field}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') e.currentTarget.blur();
                            }}
                        />
                    </FormControl>
                    <FormDescription>
                        The label of the field. <br /> It will be displayed above the field
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

export default FormIndex;
