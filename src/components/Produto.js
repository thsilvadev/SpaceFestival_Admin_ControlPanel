import styles from "../styles/Produto.module.css";

import iconlapis from "../images/icon-lapis.png";
import iconlixo from "../images/icon-lixo.png";

const Ingresso = ({ peca, valor, foto, fotoHover }) => {
  //fazer a função do fotoHover

  return (
    <div class="col-12 col-sm-6 col-lg-4">
      <div className={styles.box}>
        <h1>{peca}</h1>
        <div className={styles.imagem}>
          <div>
            <img src={foto} alt="..." className={styles.responsive} />
          </div>

          <p>
            Valor: R$ <b>{valor}</b>
          </p>

          <div className={styles.column}>
            <button className={styles.column}>
              <p>Editar</p>
              <img src={iconlapis} width="30" height="30" alt="..." />
            </button>

            <button className={styles.column}>
              <p>Editar</p>
              <img src={iconlixo} width="30" height="30" alt="..." />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingresso;
