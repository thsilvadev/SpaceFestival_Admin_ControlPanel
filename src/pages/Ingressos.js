import BotaoAba from "../components/BotaoAba";

import Tabs from "../components/tabs/Tabs";
import Ingresso from "../components/Ingresso";

import styles from "../styles/Ingressos.module.css";

import React, { useState, useEffect } from "react";

import  getIngressos  from "../services/ingressos/getIngressos";
import getPedidos from "../services/pedidos/getPedidos";

import Grid from "../components/Grid"

function Ingressos() {

  //INGRESSOS
  const [ingressos, setIngressos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: tipos_ingressos } = await getIngressos();
      setIngressos(tipos_ingressos);
    };
    fetchData();
    console.log(ingressos);
  }, []);

  //PEDIDOS

  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: pedidos_clientes } = await getPedidos();
      setPedidos(pedidos_clientes);
    };
    fetchData();
    console.log(pedidos);
  }, []);

  return (
    <>
      <div className={styles.Container}>
        <Tabs buttonType="Ingressos" />

        <h2> Ingressos</h2>

        <div class="text-center">
          <div class="row justify-content-around">
            {
                ingressos.map((ingresso) => ( 
                    <Ingresso 
                        nome={ingresso.nome}
                        valor={ingresso.valor}
                        data_evento={ingresso.data_evento}
                        quantidade={ingresso.quantidade}
                        foto_disponivel={ingresso.foto_disponivel}
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

        <h2> Listagem de pedidos</h2>
        
        <div class="table">
        <table class="table" border="6" rules="all">
          <thead>
          <tr>
                <th scope="col">Nome do cliente</th>
                <th scope="col">CPF</th>
                <th scope="col">Email</th>
                <th scope="col">Ingresso adquirido</th>
                <th scope="col" class="acao"></th>
            </tr>
          </thead>
          <tbody>
          {
                pedidos.map((pedido) => ( 
                    <Grid 
                        nome={pedido.nome_usuario}
                        cpf={pedido.cpf_usuario}
                        email={pedido.email}
                        tipo_ingresso={pedido.tipo_ingresso}
                    />
                ) )
            }
          </tbody>
         
            
        </table>
        </div>
        

      </div>
    </>
  );
}

export default Ingressos;
