'use client'

function RootLayoutClient({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="">
            {children}
        </div>
    );
}

export default RootLayoutClient;