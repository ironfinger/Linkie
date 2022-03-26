import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Login from './LoginPage';

const MainPage = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
