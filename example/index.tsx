import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Thing } from '../.';

const App = () => {
  return (
    <div>
      <Thing />
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
