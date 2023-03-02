import styles from "../styles/Ingresso.module.css";

import BotaoEditar from "./BotaoEditar";
import BotaoDeletar from "./BotaoDeletar";

import {useState} from 'react';
import Axios from 'axios';



const Ingresso = ({
  id,
  nome,
  valor,
  data_evento,
  quantidade,
  foto_disponivel,
  foto_indisponivel,
}) => {

  const [ingressos, setIngressos] = useState([]);

  function deleteIngresso(id){
    Axios.delete(`http://localhost:3344/ingresso/${id}`)
    setIngressos(ingressos.filter((ingresso) => ingresso.id !== id))
}





  return (
    <div class="col-12 col-sm-6 col-lg-4">
      <div className={styles.box}>
        <h3>{nome}</h3>
        <div className={styles.imagem}>
          <div>
            <img
              src={foto_disponivel}
              className={styles.responsive}
              alt="..."
            />
          </div>
          <div className={styles.textos}>
            <p>Valor: R$ {valor}</p>
            <p>Data do evento: {data_evento}</p>
            <p>Quantidade: {quantidade}</p>
            <p>ID: {id}</p>
          </div>

          <div className={styles.column}>
            <BotaoEditar elemento="ingresso" id={id} />

            <BotaoDeletar onClick={() => deleteIngresso(id)} elemento="ingresso" id={id} />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingresso;
