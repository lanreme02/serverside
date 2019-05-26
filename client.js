import React from 'react';
import { render } from 'react-dom';
import APP from './app';

window.React = React
alert('bundle loaded, Rendering in browser')

render(
<APP {...__DATA__} />,
document.getElementById("root")
)

alert('render complete')