import styles from "../styles/Ingresso.module.css";

import iconlapis from "../images/icon-lapis.png";
import iconlixo from "../images/icon-lixo.png";

const Ingresso = ({ valor, data_evento, quantidade, foto_disponivel, foto_indisponivel}) => {

  return (
    <div class="col-12 col-sm-6 col-lg-4">
      <div className={styles.box}>
        <h1>ingresso</h1>
        <div className={styles.imagem}>
          <div>
            <img
              src="https://dummyimage.com/300x200/000/fff&text=foda-se"
              className={styles.responsive}
            />
          </div>

          <div className={styles.column}>
            <img src={iconlapis} width="30" height="30" />
            <img src={iconlixo} width="30" height="30" />
          </div>
        </div>

        <p>Valor: R$ {valor}</p>
        <p>Data do evento: {data_evento}</p>
        <p>Quantidade: {quantidade}</p>
      </div>
    </div>
  );
};

export default Ingresso;
