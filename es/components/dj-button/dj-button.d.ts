import * as React from 'react';
import { ButtonProps } from '@alifd/next/types/button';
import './index.scss';
export interface DjButtonProps extends ButtonProps {
    /**
     * 类型
     */
    type?: "primary" | "secondary" | "normal";
    color?: 'string';
}
declare const DjButton: React.FC<DjButtonProps>;
export default DjButton;
