import React from 'react';
import ReactDOM from 'react-dom';
import Tables from './components/Tables';

const App = () => {
    return (
        <div>
            <Tables></Tables>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));