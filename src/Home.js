import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return (
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/atividade1">Atividade 1</Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
}

export default Home;

//                     <li>
//<Link to="/atividade2">Atividade 2</Link>
//</li>