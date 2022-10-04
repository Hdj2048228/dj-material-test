import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DjButton } from 'dj-material-test';

export default { title: 'DjButton' };

export const Size = () => {

  return (
    <div>
      Size demo
      <DjButton size="large" color="yellow"/>
    </div>
  );
}

Size.storyName = '尺寸';
Size.desc = 'Dj按钮的用法，演示自己控制数据的用法。`code`试一下能不能用';

