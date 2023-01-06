import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
const logobur =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png';
const MainPage = document.getElementById('root');
function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={logobur} width="50px" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
function Main() {
  return (
    <main>
      <h1>I'm Excited to learn React</h1>
      <ul>
        <li>Cause is Fun.</li>
        <li>Is pretty useful.</li>
        <li>There's a lot of jobs that actually used it.</li>
        <li>Have a lot of application in the developer arena.</li>
      </ul>
    </main>
  );
}
function Footer() {
  return (
    <footer>
      <small>© 2023 Mason development. All rights reserved. </small>
    </footer>
  );
}
function Page() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, MainPage);

export default function App() {
  return <Page />;
}
