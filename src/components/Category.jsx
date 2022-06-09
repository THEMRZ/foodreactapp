import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
    return (
      <List>
          <NavLink to={'/cousine/Italian'}>
              <FaPizzaSlice/>
              <h4>Italiana</h4>
          </NavLink>
          <NavLink to={'/cousine/American'}>
              <FaHamburger/>
              <h4>Americana</h4>
          </NavLink>
          <NavLink to={'/cousine/Thai'}>
              <GiNoodles/>
              <h4>Thailandesa</h4>
          </NavLink>
          <NavLink to={'/cousine/Japanese'}>
              <GiChopsticks/>
              <h4>Japonesa</h4>
          </NavLink>
      </List>
    );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`

export default Category