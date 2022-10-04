import * as React from 'react';
import { createElement } from 'react';
import { Button } from '@alifd/next';
import { ButtonProps } from '@alifd/next/types/button';
import './index.scss';

export interface DjButtonProps extends ButtonProps {
  /**
   * 类型
   */
  type?: "primary" | "secondary" | "normal";
  color?: 'string';
}

const DjButton: React.FC<DjButtonProps> = function DjButton({
  type = 'primary',
  color,
  style = {},
  ...otherProps
}) {
  const _style = style || {};
  if (color) {
    _style.backgroundColor = color;
  }
  const _otherProps = otherProps || {};
  _otherProps.style = _style;
  return (
    <Button className='dj-button' type={type} { ..._otherProps } >DJ test button</Button>
  );
};

DjButton.displayName = 'DjButton';
export default DjButton;


