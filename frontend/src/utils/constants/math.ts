import React from 'react';

const max = (a: number, b: number): number => (a > b ? a : b);
const min = (a: number, b: number): number => (a > b ? b : a);

const Math = { max, min };

export default Math;
