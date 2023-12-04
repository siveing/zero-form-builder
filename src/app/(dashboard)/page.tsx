import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { MFormTemplate } from '@/models/form/MFormTemplate.model';
import { FormMock } from '@/constants';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FaEdit } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { BiRightArrowAlt } from 'react-icons/bi';

export default function Home() {
    function FormCardSkeleton() {
        return <Skeleton className="border-2 border-primary-/20 h-[190px] w-full" />;
    }

    async function FormCards() {
        const forms = FormMock;
        return (
            <>
                {forms.map((form) => (
                    <FormCard key={form.id} form={form} />
                ))}
            </>
        );
    }

    function FormCard({ form }: { form: MFormTemplate }) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 justify-between">
                        <span className="truncate font-bold">{form.name}</span>
                        {form.isPublic && <Badge>Published</Badge>}
                        {form.createdAt && <Badge variant={'destructive'}>Draft</Badge>}
                    </CardTitle>
                    <CardDescription className="flex items-center justify-between text-muted-foreground text-sm">
                        {form.createdAt}
                    </CardDescription>
                </CardHeader>
                <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
                    {form.description || 'No description'}
                </CardContent>
                <CardFooter>
                    {form.isPublic && (
                        <Button asChild className="w-full mt-2 text-md gap-4">
                            <Link href={`/forms/${form.id}`}>
                                View submissions <BiRightArrowAlt />
                            </Link>
                        </Button>
                    )}
                    {!form.isPublic && (
                        <Button asChild variant={'secondary'} className="w-full mt-2 text-md gap-4">
                            <Link href={`/builder/${form.id}`}>
                                Edit form <FaEdit />
                            </Link>
                        </Button>
                    )}
                </CardFooter>
            </Card>
        );
    }

    return (
        <div className="container pt-4">
            <Separator className="my-6" />
            <h2 className="text-4xl font-bold col-span-2">Your forms</h2>
            <Separator className="my-6" />
            <div className="grid gric-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Suspense
                    fallback={[1, 2, 3, 4].map((el) => (
                        <FormCardSkeleton key={el} />
                    ))}
                >
                    <FormCards />
                </Suspense>
            </div>
        </div>
    );
}
