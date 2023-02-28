import styles from "../styles/Produto.module.css";

import iconlapis from "../images/icon-lapis.png";
import iconlixo from "../images/icon-lixo.png";
import BotaoEditar from "./BotaoEditar";

const Ingresso = ({ id, titulo, valor, descricao, imagem, fotoHover }) => {
  //fazer a função do fotoHover




  

  return (
    <div class="col-12 col-sm-6 col-lg-4">
      <div className={styles.box}>
        <h3>{titulo}</h3>
        <div className={styles.imagem}>
          <div>
            <img src={imagem} alt="..." className={styles.responsive} />
          </div>
          <div className={styles.textos}>
            <p>
              Valor: R$ <b>{valor}</b>
            </p>
          </div>

          <div className={styles.column}>
            <BotaoEditar elemento="Produto" id={id} />

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
