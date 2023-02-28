import React, { useEffect, useState } from "react";

import styles from "../styles/PostarProduto.module.css";

import {Link} from "react-router-dom"

import * as yup from "yup";

import Axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigate, useParams } from "react-router-dom";


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

const PostarProduto = () => {
  const { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    Axios.get(`http://localhost:8800/produtos/${id}`).then((response) => {
      reset(response.data.data);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validarProduto),
  });

  const putProduto = (data) =>
    Axios.put(`http://localhost:8800/produtos/${id}`, data)
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
        <h1 className="my-3  text-center">Adicionar produto</h1>
        <form className={`justify-content-center ${styles.formulario}`}
          onSubmit={handleSubmit(putProduto)}
        >
          <label htmlFor="titulo">Titulo do produto:</label>
          <input className={styles.input}
            type="text"
            name="titulo"
            placeholder="Coloque o titulo do produto"
            {...register("titulo")}
          />
          <p className="error-message">{errors.titulo?.message}</p>{" "}
          {/* depois eu vejo isso */}
          <label htmlFor="valor">Valor:</label>
          <input className={styles.input}
            type="text"
            name="valor"
            placeholder="Insira o valor do produto"
            {...register("valor")}
          />
          <p className="error-message">{errors.valor?.message}</p>{" "}
          {/* depois eu vejo isso */}
          <label htmlFor="descricao">Descrição:</label>
          <input className={styles.input}
            type="text"
            name="descricao"
            placeholder="Insira a descricao do produto"
            {...register("descricao")}
          />
          <p className="error-message">{errors.descricao?.message}</p>{" "}
          {/* depois eu vejo isso */}
          <label htmlFor="imagem">Imagem:</label>
          <input className={styles.input}
            type="text"
            name="imagem"
            placeholder="Insira a imagem do produto"
            {...register("imagem")}
          />
          <p className="error-message">{errors.imagem?.message}</p>{" "}
          {/* depois eu vejo isso */}
          <button className={styles.submit}>Confirmar</button>
        </form>
        <Link class="h1 text-light" to="/"><u>Voltar</u></Link>
      </div>
      </div>
      
    
  );
};

export default PostarProduto;
