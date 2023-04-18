import React from 'react';
import Header from './Header';
import DatePicker from './DatePicker';

function App() {
  return (
    <React.Fragment>
      <div class="border rounded border-dark text-center mb-3 mx-5"><Header /></div>
      <DatePicker />
    </React.Fragment>
  );
}

export default App;
