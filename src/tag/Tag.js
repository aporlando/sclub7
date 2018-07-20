import React from 'react';
import { stringToColor, invertColor } from '../utilities/color';

export default function Tag({ name }) {
    const bgColor = stringToColor(name);
    const style = {
        backgroundColor: bgColor,
        color: invertColor(bgColor, true)
    };
    return <span className={'ml-1 badge badge-pill badge-secondary'} style={style}>{name}</span>
}
