import { useEffect, useState} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import React from 'react'

function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instrucoes");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
    const detailData = await data.json();
    setDetails(detailData);
  }


  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  
  return (
    <DetailWrapper
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      <div>
        <h2>{ details.title }</h2>
        <img src={ details.image } alt=''></img>
      </div>
      <Info>
        <Button className={activeTab === "instrucoes" ? "active" : ""} 
        onClick={() => setActiveTab("instrucoes")}>
          Instruções
          </Button>
        <Button className={activeTab === "ingredientes" ? "active" : ""}
        onClick={() => setActiveTab("ingredientes")}>
          Ingredientes
        </Button>
        {activeTab === 'instrucoes' && (
          <div>
            <h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
            <h4 dangerouslySetInnerHTML={{ __html: details.instructions }}></h4>
          </div>
        )}
        {activeTab === 'ingredientes' && (
        <ul>
          {details.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        )}
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper =  styled(motion.div)`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid #313131;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;


export default Recipe