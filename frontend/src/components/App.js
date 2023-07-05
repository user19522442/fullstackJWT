import './App.css';
import logo from '../logo.svg';
import Header from './Header';
import AppContent from './AppContent';
import AuthContent from './AuthContent';

function App() {
  
  return (
    <div className="App">
      <Header pageTitle="Frontend authenticated with JWT" logoSrc={logo} />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <AppContent />
            <AuthContent/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
