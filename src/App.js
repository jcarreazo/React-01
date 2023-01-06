import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
const MainPage = document.getElementById('root');

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
