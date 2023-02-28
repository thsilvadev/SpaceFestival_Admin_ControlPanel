import React from "react";

import styles from "../styles/Grid.module.css";

import iconlapis from "../images/icon-lapis.png";
import iconlixo from "../images/icon-lixo.png";
import BotaoEditar from "./BotaoEditar";

const Grid = ({ id, nome, cpf, email, id_pedido }) => {

  // // //PEDIDOS FILTRADOS

  //   const pedidosFiltrados = pedidos.filter((pedido_cliente) => {
  //    //se não houver input, retornar toda a table
  //     if (cpf === '') {
  //      return pedido_cliente;
  //     }
  //     //retorna somente o pedido do cpf desejado
  //     else {
  //      return pedido_cliente.includes(cpf)
  //     }
  //   })




  return (
    <tr>
      <td>{nome}</td>
      <td>{cpf}</td>
      <td>{email}</td>
      <td>{id_pedido}</td>
      <td>
        <div className={styles.column}>
          <BotaoEditar elemento="Pedido" id={id}/>

          <button className={styles.column}>
            <img src={iconlixo} width="30" height="30" alt="..." />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Grid;
