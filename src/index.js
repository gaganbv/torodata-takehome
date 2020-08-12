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
//dev 3 changes

ReactDOM.render(<App />, document.querySelector('#root'));