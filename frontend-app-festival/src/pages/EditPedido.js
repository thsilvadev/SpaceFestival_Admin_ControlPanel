import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


import { Link } from "react-router-dom";

import * as yup from "yup";

import Axios from "axios";

import React, { useEffect } from "react";

//Transformar alert em Toasfify //


import { useNavigate, useParams } from "react-router-dom";

//css
import styles from "../styles/EditPedido.module.css";

const validarProduto = yup.object({
  nome: yup
    .string()
    .required("O nome do ingresso é obrigatório.")
    .max(30, "O nome precisa ter menos de 30 caracteres.")
    .min(4, "O nome precisa ter pelo menos 4 caracteres"),
  quantidade: yup
    .number()
    .required("Insira a quantidade de ingressos a vender."),
  data_evento: yup.date().required("Data obrigatória."),
  valor: yup
    .string()
    .required("Insira o valor do ingesso.")
    .max(10, "valor grande demais!"),
  foto: yup
    .string()
    .required("Insira o link URL da foto desejada para o ingresso."),
  foto_disponivel: yup
    .string()
    .required(
      "Insira o link URL da foto em formato quadrangular para o ingresso."
    ),
  foto_indisponivel: yup
    .string()
    .required(
      "Insira o link URL da foto em formato quadrangular para o ingresso (ESGOTADO)."
    ),
});

//COMPONENTE

const EditPedido = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validarProduto),
  });

  const { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    Axios.get(`http://localhost:3344/produtos/${id}`).then((response) => {
      reset(response.data.data);
    });
  }, [id, reset]);

  

  const putPedido = (data) =>
    Axios.put(`http://localhost:3344/produtos/${id}`, data)
      .then(() => {
        navigate("/produtos");
        alert("Produto editado com sucesso!");
      })
      .catch(() => {
        alert("Erro ao editar o produto.");
      });

  return (
    <div className={styles.Bg}>
      <div className={styles.blackOverlay}>
        <div className={styles.Container}></div>

        <h1 className="my-3  text-center">Editar pedido</h1>

        <form className={`justify-content-center ${styles.formulario}`}
          onSubmit={handleSubmit(putPedido)}
        >
          <label htmlFor="titulo">Nome do cliente</label>
          <input className={styles.input} 
            type="text"
            name="nome_usuario"
            placeholder="Insira o nome do cliente"
            {...register("nome_usuario")}
          />
          <p className="error-message">{errors.titulo?.message}</p>{" "}
          {/* depois eu vejo isso */}
          <label htmlFor="cpf">CPF do cliente</label>
          <input className={styles.input}
            type="text"
            name="cpf"
            placeholder="Insira o CPF do cliente"
            {...register("cpf")}
          />
          <p className="error-message">{errors.valor?.message}</p>{" "}
          {/* depois eu vejo isso */}
          <label htmlFor="email">Email do cliente</label>
          <input className={styles.input}
            type="text"
            name="email"
            placeholder="exemplo@exemplo.com"
            {...register("email")}
          />
          <p className="error-message">{errors.descricao?.message}</p>{" "}
          {/* depois eu vejo isso */}
          <label htmlFor="id_pedido">ID do Ingresso adquirido</label>
          <input className={styles.input}
            type="text"
            name="id_pedido"
            placeholder="Insira o tipo de ingresso"
            {...register("id_pedido")}
          />
          <p className="error-message">{errors.imagem?.message}</p>{" "}
          {/* depois eu vejo isso */}
          <button className={styles.submit}>Confirmar</button>
        </form>

        <Link class="h1 text-light" className={styles.Link} to="/"><u>Voltar</u></Link>
      </div>
    </div>
  );
};

export default EditPedido;
