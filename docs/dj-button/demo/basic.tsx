import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DjButton } from 'dj-material-test';

export default { title: 'DjButton' };

export const Basic = () => {

  return (
    <div>
      basic demo
      <DjButton color="red"/>
    </div>
  );
}

Basic.storyName = '基础用法';
Basic.desc = 'Dj按钮的基础用法，`code`试一下能不能用';
