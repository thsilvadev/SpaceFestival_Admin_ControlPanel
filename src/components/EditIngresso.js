import {useForm} from 'react-hook-form';
import {YupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

//Transformar alert em Toasfify //

import axios from 'axios';
import React, {useEffect, useForm} from 'react';
import {useNavigate} from 'react-router-dom';

//css
import styles from "../styles/EditIngresso.module.css";



const validarIngresso = yup.object({
    nome: yup.string().required("O nome do ingresso é obrigatório.").max(30,"O nome precisa ter menos de 30 caracteres.").min(4,"O nome precisa ter pelo menos 4 caracteres"),
    quantidade: yup.number().required("Insira a quantidade de ingressos a vender."),
    data_evento: yup.date().required("Data obrigatória."),
    valor: yup.string().required("Insira o valor do ingesso.").max(10,"valor grande demais!"),
    foto: yup.string().required("Insira o link URL da foto desejada para o ingresso."),
    foto_disponivel: yup.string().required("Insira o link URL da foto em formato quadrangular para o ingresso."),
    foto_indisponivel: yup.string().required("Insira o link URL da foto em formato quadrangular para o ingresso (ESGOTADO).")
})










//COMPONENTE

const EditIngresso = () => {

    const {id} = useParams;

    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8800/ingresso/${id}`) .then ((response) => { reset(response._eventodata_evento)})
    }, [])

    const { register, handleSubmit, formState: { errors }, reset } = useForm ({
        resolver: YupResolver(validarIngresso)
    })

    const addPost = _eventodata_evento => axios.put(`http://localhost:8800/ingresso/${id}`, _eventodata_evento) 
        .then (() => {
            navigate("/ingresso");
            alert ("Ingresso editado com sucesso.");
    })
        .catch (() => {
            alert("Erro ao editar o ingresso.")
        })


    return (
        <div className="Container">
            <h1 className="my-3  text-center">Editar Ingresso</h1>
            <form className="d-flex justify-content-center" onSubmit={handleSubmit(addPost)}>
                <label htmlFor="nome">Nome do Ingresso:</label>
                <input type="text"
                name="nome"
                placeholder="Coloque o nome da bebida"
                {...register('nome')}/>
                <p className="error-message">{errors.nome?.message}</p> {/* depois eu vejo isso */}

                <label htmlFor="nome">Data do Evento:</label>
                <input type="date"
                name="data_evento"
                placeholder="Insira a data relativa ao ingresso"
                {...register('data_evento')}/>
                <p className="error-message">{errors.data_evento?.message}</p> {/* depois eu vejo isso */}

                <label htmlFor="nome">Valor:</label>
                <input type="text"
                name="valor"
                placeholder="Insira o preço do ingresso"
                {...register('valor')}/>
                <p className="error-message">{errors.valor?.message}</p> {/* depois eu vejo isso */}

                <label htmlFor="nome">Quantidade:</label>
                <input type="text"
                name="quantidade"
                placeholder="Insira o número de ingressos à venda"
                {...register('quantidade')}/>
                <p className="error-message">{errors.quantidade?.message}</p> {/* depois eu vejo isso */}

                <label htmlFor="nome">Imagem:</label>
                <input type="text"
                name="foto"
                placeholder="Insira a URL da imagem do ingresso (oficial)"
                {...register('foto')}/>
                <p className="error-message">{errors.foto?.message}</p> {/* depois eu vejo isso */}

                <label htmlFor="nome">Imagem quadrada:</label>
                <input type="text"
                name="foto"
                placeholder="Insira a URL da imagem do ingresso (versão quadrada)"
                {...register('foto')}/>
                <p className="error-message">{errors.foto?.message}</p> {/* depois eu vejo isso */}

                <label htmlFor="nome">Imagem quadrada (de ingresso esgotado):</label>
                <input type="text"
                name="foto"
                placeholder="Insira a URL da imagem do ingresso (versão quadrada) para mostrar quando o ingresso estã indisponível"
                {...register('foto')}/>
                <p className="error-message">{errors.foto?.message}</p> {/* depois eu vejo isso */}

                <button className='btn-edit'>Edotar</button>
            </form>
        </div>
    )
}

export default EditIngresso;