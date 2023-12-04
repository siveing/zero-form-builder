'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';

function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleChangeTheme = (mode: string): void => setTheme(mode);

    if (!mounted) return null; // avoid rehydration errors

    return (
        <Tabs defaultValue={theme}>
            <TabsList className="border">
                <TabsTrigger value="light" onClick={() => handleChangeTheme('light')}>
                    <SunIcon className="h-[1.2rem] w-[1.2rem]" />
                </TabsTrigger>
                <TabsTrigger value="dark" onClick={() => handleChangeTheme('dark')}>
                    <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0" />
                </TabsTrigger>
                <TabsTrigger value="system" onClick={() => handleChangeTheme('system')}>
                    <DesktopIcon className="h-[1.2rem] w-[1.2rem]" />
                </TabsTrigger>
            </TabsList>
        </Tabs>
    );
}

export default ThemeSwitcher;
