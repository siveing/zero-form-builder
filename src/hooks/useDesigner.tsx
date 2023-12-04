'use client';

import { DesignerContext } from '@/contexts/DesignerContext';
import { useContext } from 'react';

function useDesigner() {
    const context = useContext(DesignerContext);

    if (!context) {
        throw new Error('useDesigner must be used within a DesignerContext');
    }

    return context;
}

export default useDesigner;
