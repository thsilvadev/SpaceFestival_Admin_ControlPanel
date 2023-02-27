import Produto from "../components/Produto";

import Tabs from "../components/tabs/Tabs";
import getProdutos from "../services/produtos/getProdutos";

import styles from "../styles/Produtos.module.css";

import React, { useEffect, useState} from 'react';




function Produtos() {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: produtos } = await getProdutos();
      setProdutos(produtos);
    };
    fetchData();
    console.log(produtos);
  }, []);


  return (
    <>
      <div className={styles.Container}>
        <Tabs buttonType="Produtos" />


          <div class="text-center">
            <div class="row justify-content-around">
            {
                produtos.map((produto) => ( 
                    <Produto 
                        peca={produto.peca}
                        valor={produto.valor}
                        foto={produto.foto}
                        fotoHover={produto.fotoHover}
                    />
                ) )
            }
            </div>
          </div>
        </div>

    </>
  );
}

export default Produtos;
