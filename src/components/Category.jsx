import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
    return (
      <List>
          <Slink to={'/cuisine/Italian'}>
              <FaPizzaSlice/>
              <h5>Italiana</h5>
          </Slink>
          <Slink to={'/cuisine/American'}>
              <FaHamburger/>
              <h5>Americana</h5>
          </Slink>
          <Slink to={'/cuisine/Thai'}>
              <GiNoodles/>
              <h5>Thailandesa</h5>
          </Slink>
          <Slink to={'/cuisine/Japanese'}>
              <GiChopsticks/>
              <h5>Japonesa</h5>
          </Slink>
      </List>
    );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  h5{
    color: white;
  }
  svg{
    color: white;
    font-size: 1.5rem;
  }
  &.active{
      background: linear-gradient(to right, #f27121, #e94057);
      svg{
          color: white;
      }
      h5{
          color: white;
      }
  }
`;

export default Category