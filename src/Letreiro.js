import React from 'react';
import ReactDOM from 'react-dom';

const AnimatedText = () => {
  const [text, setText] = React.useState('');
  const originalText = '  Conheça a Fatec!';
  const delay = 200;

  React.useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < originalText.length - 1) {
        setText(prevText => prevText + originalText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, []);

  return <div>{text}</div>;
};

const App = () => {
  return (
    <div>
      <h2>Atividade REACT - Semana 1</h2>
      <AnimatedText />
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));

export default App;
