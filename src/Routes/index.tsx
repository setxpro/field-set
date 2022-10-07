import { Routes, Route } from "react-router-dom";
import ModalUsers from "../Components/ModalUsers";
import SignInSide from "../Pages/Login/Signin";
import Private from "../Pages/Private";
import RelatorioDeVendas from "../Pages/Tables/RelatorioDeVendas";
import TableUsers from "../Pages/Tables/Users";
import CreateUser from "../Pages/Tables/Users/CreateUser";
import UpdateUser from "../Pages/Tables/Users/UpdateUser";
import VendasDoFlex from "../Pages/Tables/VendasDoFlex";
import Security from "../Security";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Security>
            <Private>
              <VendasDoFlex />
            </Private>
          </Security>
        }
      />
      <Route
        path="/relatorio-vendas"
        element={
          <Security>
            <Private>
              <RelatorioDeVendas />
            </Private>
          </Security>
        }
      />
      <Route
        path="/users"
        element={
          <Security>
            <Private>
              <TableUsers />
            </Private>
          </Security>
        }
      />
      <Route
        path="/create-users"
        element={
          <Security>
            <Private>
              <CreateUser />
            </Private>
          </Security>
        }
      />
      <Route
        path="/users/:_id"
        element={
          <Security>
            <Private>
              <ModalUsers />
            </Private>
          </Security>
        }
      />
      <Route
        path="/user-update/:_id"
        element={
          <Security>
            <Private>
              <UpdateUser />
            </Private>
          </Security>
        }
      />
    </Routes>
  );
};
