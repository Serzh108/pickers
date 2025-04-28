import { lazy, Suspense } from 'react';
import logo from './assets/logo.svg';
import './App.css';

const BasicDatePicker = lazy(
  () => import('./components/DatePicker/DatePicker'),
);
const BasicTimePicker = lazy(
  () => import('./components/TimePicker/TimePicker'),
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="header">
        <img src={logo} className="logo" alt="logo" width="48px" />
        <h1>Date + Time peackers</h1>
      </div>

      <p className="read-the-docs">Click on SerZH logo to learn React more</p>
      <BasicDatePicker />
      <BasicTimePicker />
    </Suspense>
  );
}

export default App;
