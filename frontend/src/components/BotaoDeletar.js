import { Link } from "react-router-dom";

import iconlapis from "../images/icon-lapis.png";

import styles from "../styles/Ingresso.module.css";

const BotaoDeletar = ({ elemento, id }) => {



    if (elemento === "Ingresso") {
        return (
            <Link to={{pathname: `/`}}>
              <button className={styles.column}>
                Deletar
                <img src={iconlapis} width="30" height="30" alt="..." />
              </button>
            </Link>
          );
    } if (elemento ===  "Produto") {
        return (
            <Link to={{pathname: `/`}}>
              <button className={styles.column}>
                Deletar
                <img src={iconlapis} width="30" height="30" alt="..." />
              </button>
            </Link>
        )
    }

  
};

export default BotaoDeletar;

