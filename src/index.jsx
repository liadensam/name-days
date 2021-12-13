import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Form from './components/Form';
import WorldTime from './components/WorldTime'

const App = () => (
    <>
    <Form />
    <hr />
    <WorldTime />
    <hr />
    <WorldTime zone="Asia/Hong_Kong" />
    <hr />
    <WorldTime zone="Europe/Prague" />
    </>
);

render(<App />, document.querySelector('#app'));
