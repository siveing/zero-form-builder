import ThemeSwitcher from '@/components/base/ThemeSwitcher';
import Link from 'next/link';

import React, { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
            <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
                <Link href={'/'} className="font-bold text-lg uppercase">Zero By Jin</Link>
                <div className="flex gap-4 items-center">
                    <ThemeSwitcher />
                </div>
            </nav>
            <main className="flex w-full flex-grow">{children}</main>
        </div>
    );
}

export default Layout;
