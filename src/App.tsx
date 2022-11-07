import React from 'react';
import './App.css';
import Typography from './components/Typography/Typography';

const App: React.FC = () => {
    return (
        <div className="App">
            <Typography variant="h1">Header 1</Typography>
            <Typography variant="h2">Header 2</Typography>
            <Typography variant="h3">Header 3</Typography>
            <Typography variant="h4">Header 4</Typography>
            <Typography variant="h5">Header 5</Typography>
            <Typography variant="h6">Header 6</Typography>
            <Typography variant="regular">Regular</Typography>
            <Typography variant="regular" textDecoration="line-through">
                Regular
            </Typography>
            <Typography variant="regular" textDecoration="underline">
                Regular
            </Typography>
        </div>
    );
};

export default App;
