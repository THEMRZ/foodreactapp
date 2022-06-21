import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';

function Veggie() {

    const [veggie, setVeggie] = useState([]);

    useEffect(() => { 
        getVeggie();
    }, []);

    const getVeggie = async () => {

        const check = localStorage.getItem('veggie');

        if(check){
            //devemos converter a string para array para poder setar no state
            setVeggie(JSON.parse(check))
        }else{            
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json();
            //local storage só aceita string por esse motivo passamos o array pra string
            localStorage.setItem('veggie', JSON.stringify(data.recipes));
            setVeggie(data.recipes)
        }
    }

    return (
        <Wrapper>
            <h3>Escolhas Vegetarianas</h3>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '5rem'

            }}>
                {veggie.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to={"/recipe/" + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title}></img>
                                    <Gradient></Gradient>
                                </Link>
                            </Card>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;  
  overflow: hidden;
  position: relative;

  img{
      border-radius: 2rem;
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
  p{
      position: absolute;
      z-index: 10;
      left: 50%;
      bottom: 0%;
      transform: translate(-50%, 0%);
      color: white;
      text-align: center;
      font-weight: 600;
      font-size: 1rem;
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
  }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;


export default Veggie
