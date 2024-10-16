import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <nav>nabar</nav>

      <main className="min-h-screen max max-w-screen-2x1 mx-auto px-4 py-6 font-primary">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
