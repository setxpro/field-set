import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import * as C from "./styles";

const CreateUser: React.FC = () => {
  const [newPicture, setNewPicture] = useState<string | ArrayBuffer | null>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Member");
  const [assignment, setAssignment] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();

  const handleProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;

    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        setNewPicture(reader.result);
      },
      false
    );
    // Caso file esteja populado
    // dispara a função.
    if (file) {
      reader.readAsDataURL(file[0]);
    }
  };

  const handleBase64 = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log({
      base64: newPicture,
    });
  };

  const createUser = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const { data } = await axios.post(
      "https://app-cpmy.herokuapp.com/auth/register",
      {
        name,
        email,
        role,
        assignment,
        avatar: newPicture,
        password,
      }
    );
    toast("Usuário Cadastrado com sucesso!");
    navigate("/users");
    return data;
  };

  return (
    <C.Container>
      <C.ContentHeader>
        <h1>Cadastro de Usuários</h1>
      </C.ContentHeader>
      <C.ContenBody>
        <form>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="assignment"
              placeholder="Atribuição"
              value={assignment}
              onChange={(e) => setAssignment(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Confirmar Senha"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <div className="input-group">
            <select onChange={(e) => setRole(e.target.value)}>
              <option disabled>Cargo</option>
              <option>Member</option>
              <option>Owner</option>
            </select>
          </div>
          <div className="input-group-file-btn">
            <input
              type="file"
              name="profile"
              accept="image/*"
              onChange={(e) => handleProfile(e)}
            />
            <button onClick={handleBase64}>Foto Ok!</button>
          </div>
          <button onClick={createUser} className="send-btn">
            CADASTRAR
          </button>
        </form>
      </C.ContenBody>
    </C.Container>
  );
};

export default CreateUser;
