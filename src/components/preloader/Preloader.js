import React from 'react';
import * as SVGLoaders from 'svg-loaders-react';

export const Preloader = (props) => {
    return (
        props.isFetching ?
        <SVGLoaders.Oval /> :
        null
    )
}