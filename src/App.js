import React from 'react';
import students from './components/students.json';

//import Clock from './components/Clock.jsx';
import EventHandle from './components/EventHandle.jsx';
import Form from './components/Form.jsx';
import ConditionalRender from './components/Conditional_Render.jsx';
import TemperatureConverter from './components/TemperatureConverter.jsx';
import Composition from './components/Composition.jsx';
import HigherOrderComponent from './components/HigherOrderComponent.jsx';
import RenderProps from './components/RenderProps.jsx';
import ContextApi from './components/ContextApi.jsx';
import UseState from './Hook/UseState.jsx';
import UseEffect from './Hook/UseEffect.jsx';
import UseCallback from './Hook/UseCallback.jsx';
import UseRef from './Hook/UseRef.jsx';
import UseReducer from './Hook/UseReducer.jsx';
import CustomHook from './Hook/CustomHook.jsx';



function App() {

return (
    <div>
        <body>
        <CustomHook />
        <UseReducer />
        <UseRef />
        <UseCallback />
        <UseEffect />
        <UseState />
        <ContextApi />
        <RenderProps />
        <HigherOrderComponent />
        <Composition />
        <TemperatureConverter />
        <Form />
        <EventHandle />
        <ConditionalRender students={students}/>
        </body>
    </div>
);
}

export default App;