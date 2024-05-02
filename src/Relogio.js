import React, { useState, useEffect } from 'react';

function Relogio() {
  const [hora, setHora] = useState('');

  useEffect(() => {
    const atualizar = () => {
      let relogio = new Date();
      relogio.setTime(relogio.getTime() - 3 * 60 * 60 * 1000);
      let horaAtual = relogio.toISOString().substring(11, 19);
      setHora(horaAtual);
    };

    const intervalID = setInterval(atualizar, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
      <h4>Hora atual:</h4>
      <p>{hora}</p>
    </div>
    
  );
}

export default Relogio;
