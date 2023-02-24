import BotaoAba from "../components/BotaoAba";

import Tabs from '../components/tabs/Tabs'

import styles from "../styles/Produtos.module.css";

function Produtos() {

  return (
    <>
      <div className={styles.Container}>
        <Tabs buttonType="Produtos"/>

        <div className={styles.Produtos}>
          <p className={styles.Card}>Aqui um produto</p>
          <p className={styles.Card}>Aqui um produto</p>
          <p className={styles.Card}>Aqui um produto</p>
          <p className={styles.Card}>Aqui um produto</p>
          <p className={styles.Card}>Aqui um produto</p>
          <p className={styles.Card}>Aqui um produto</p>
          <p className={styles.Card}>Aqui um produto</p>
          <p className={styles.Card}>Aqui um produto</p>
          <p className={styles.Card}>Aqui um produto</p>
        </div>
      </div>
    </>
  );
}

export default Produtos;
