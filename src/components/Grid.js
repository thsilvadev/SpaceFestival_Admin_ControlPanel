import React from "react";

import styles from "../styles/Grid.module.css";

import iconlapis from "../images/icon-lapis.png";
import iconlixo from "../images/icon-lixo.png";

const Grid = ({ nome, cpf, email, tipo_ingresso }) => {
  return (
    <tr>
      <td>{nome}</td>
      <td>{cpf}</td>
      <td>{email}</td>
      <td>{tipo_ingresso}</td>
      <td>
        <div className={styles.column}>
          <button className={styles.column}>
            <img src={iconlapis} width="30" height="30" alt="..." />
          </button>

          <button className={styles.column}>
            <img src={iconlixo} width="30" height="30" alt="..." />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Grid;
