import React from 'react';
import cnBind, { Argument } from 'classnames/bind';

import { I[% Component %]Props } from './[% Component %].types';

import styles from './[% Component %].module.css';

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

export const [% Component %]: React.FC<I[% Component %]Props> = () => {
  return <div></div>
}

