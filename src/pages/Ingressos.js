import BotaoAba from "../components/BotaoAba";

import Tabs from "../components/tabs/Tabs";
import Ingresso from "../components/Ingresso";

import styles from "../styles/Ingressos.module.css";

import React, { useState, useEffect } from "react";

import  getIngressos  from "../services/ingressos/getIngressos";

function Ingressos() {
  const [ingressos, setIngressos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: tipos_ingressos } = await getIngressos();
      setIngressos(tipos_ingressos);
    };
    fetchData();
    console.log(ingressos);
  }, []);

  return (
    <>
      <div className={styles.Container}>
        <Tabs buttonType="Ingressos" />

        <h1> Ingressos</h1>

        <div class="text-center">
          <div class="row justify-content-around">
            {
                ingressos.map((ingresso) => ( 
                    <Ingresso 
                        valor={ingresso.valor}
                        data_evento={ingresso.data_evento}
                        quantidade={ingresso.quantidade}
                        foto_disponivel={ingresso.fotos_disponivel}
                        foto_indisponivel={ingresso.foto_indisponivel}
                    />
                ) )
            }
            
            
            {/* <Ingresso />

            <Ingresso />

            <Ingresso />

            <Ingresso /> */}
          </div>
        </div>
        <h1> Listagem de pedidos</h1>
      </div>
    </>
  );
}

export default Ingressos;
