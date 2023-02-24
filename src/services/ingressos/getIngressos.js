import Api from '../Api'



const ingressosFromApi = {
    data: [
        {
            id: "0",
            valor: "R$ 150,00",
            data_evento: "12/04/2023",
            quantidade: 10,
            foto_disponivel: "https://dummyimage.com/300x200/000/fff&text=foda-se",
            foto_indisponivel: "https://dummyimage.com/300x200/000/fff&text=foda-se2"

        },

        {
            id: "1",
            valor: "R$ 250,00",
            data_evento: "13/04/2023",
            quantidade: 10,
            foto_disponivel: "https://dummyimage.com/300x200/000/fff&text=foda-se",
            foto_indisponivel: "https://dummyimage.com/300x200/000/fff&text=foda-se2"

        },

        {
            id: "2",
            valor: "R$ 150,00",
            data_evento: "14/04/2023",
            quantidade: 10,
            foto_disponivel: "https://dummyimage.com/300x200/000/fff&text=foda-se",
            foto_indisponivel: "https://dummyimage.com/300x200/000/fff&text=foda-se2"
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