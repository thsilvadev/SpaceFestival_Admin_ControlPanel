import styles from "../styles/Ingresso.module.css";

import iconlapis from "../images/icon-lapis.png";
import iconlixo from "../images/icon-lixo.png";

const Ingresso = ({
  nome,
  valor,
  data_evento,
  quantidade,
  foto_disponivel,
  foto_indisponivel,
}) => {
  return (
    <div class="col-12 col-sm-6 col-lg-4">
      <div className={styles.box}>
        <h1>{nome}</h1>
        <div className={styles.imagem}>
          <div>
            <img
              src={foto_disponivel}
              className={styles.responsive}
              alt="..."
            />
          </div>

          <p>Valor: R$ {valor}</p>
          <p>Data do evento: {data_evento}</p>
          <p>Quantidade: {quantidade}</p>

          <div className={styles.column}>
            <button className={styles.column}>
              Editar
            <img src={iconlapis} width="30" height="30" alt="..." />
            </button>

            <button className={styles.column}>
              Deletar
            <img src={iconlixo} width="30" height="30" alt="..." />

            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingresso;
