import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/Auth/AuthContext";

import * as C from "./styles";

const Sidebar = () => {
  const { signout } = useContext(AuthContext);

  return (
    <C.Container>
      <C.Logo>
        <h1>Fieldset</h1>
      </C.Logo>
      <C.Nav>
        <ul>
          {/* <Link to="/">Vendas do flex</Link> */}
          <Link to="/relatorio-vendas">Relatório de Vendas</Link>
          <Link to="/users">Usuários</Link>
          <Link to="" onClick={signout}>
            LOGOUT
          </Link>
        </ul>
      </C.Nav>
    </C.Container>
  );
};

export default Sidebar;
