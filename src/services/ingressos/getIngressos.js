import Api from '../Api'



const ingressosFromApi = {
    data: [
        {
            nome: "Primeiro dia",
            id: "0",
            valor: "R$ 150,00",
            data_evento: "12/04/2023",
            quantidade: 10,
            foto_disponivel: "https://dummyimage.com/300x200/000/fff&text=ingresso1",
            foto_indisponivel: "https://dummyimage.com/300x200/000/fff&text=imagem2"

        },

        {
            nome: "Segundo dia",
            id: "1",
            valor: "R$ 150,00",
            data_evento: "13/04/2023",
            quantidade: 10,
            foto_disponivel: "https://dummyimage.com/300x200/000/fff&text=ingresso2",
            foto_indisponivel: "https://dummyimage.com/300x200/000/fff&text=imagem2"

        },

        {
            nome: "Terceiro dia",
            id: "2",
            valor: "R$ 150,00",
            data_evento: "14/04/2023",
            quantidade: 10,
            foto_disponivel: "https://dummyimage.com/300x200/000/fff&text=ingresso3",
            foto_indisponivel: "https://dummyimage.com/300x200/000/fff&text=imagem2"
        },

        {
            nome: "Passaporte",
            id: "2",
            valor: "R$ 350,00",
            data_evento: "de 12 a 14 de Abril",
            quantidade: 10,
            foto_disponivel: "https://dummyimage.com/300x200/000/fff&text=imagem",
            foto_indisponivel: "https://dummyimage.com/300x200/000/fff&text=imagem2"
        }

    ]
}

const getIngressos = async () => {

    return ingressosFromApi;
    // try{
    //     const ingressos = await  Api.get("/ingressos")
    //     return ingressos;
    // } catch (error){
    //     console.log("deu merda")
    // }
    
}

export default getIngressos;