import logo from './assets/logo.svg';
import './App.css';
import BasicDatePicker from './components/DatePicker/DatePicker';
import BasicTimePicker from './components/TimePicker/TimePicker';

function App() {
  return (
    <>
      <div className="header">
        <img src={logo} className="logo" alt="logo" width="48px" />
        <h1>Date + Time peackers</h1>
      </div>

      <p className="read-the-docs">Click on SerZH logo to learn React more</p>
      <BasicDatePicker />
      <BasicTimePicker />
    </>
  );
}

export default App;
