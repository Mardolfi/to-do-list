import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { v4 } from "uuid";

function Edit() {
  const navigate = useNavigate();
  const {id} = useParams()

  const [hour, setHour] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method:'GET',
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then((res) => res.json())
    .then((data) => {
      setHour(data.hourTask)
      setName(data.nameTask)
    })
  }, [])

  function addTask(e) {
    const acceptableColors = [
      "#154D63",
      "#97E9E9",
      "#7BBBAD",
      "#FFD296",
      "#FF8A77",
    ];

    const color =
      acceptableColors[Math.floor(Math.random() * acceptableColors.length)];

    e.preventDefault();

    const task = {
      hourTask: hour,
      nameTask: name,
      id: v4(),
      colorTask: color,
    };

    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/");
      });
  }

  return (
    <EditTaskContainer>
      <h1>Edit Task</h1>
      <form onSubmit={addTask}>
        <FormInputs>
          <input
            type={"time"}
            required
            placeholder="Task hour"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          ></input>
          <input
            type={"text"}
            required
            placeholder="Task name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </FormInputs>
        <FormControl>
          <button>Edit Task</button>
        </FormControl>
      </form>
    </EditTaskContainer>
  );
}

const EditTaskContainer = styled.div`
  flex: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  animation: opacity 1s;

  @keyframes opacity {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  h1 {
    color: #57bff9;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input {
    padding: 15px 30px;
    border-radius: 50px;
    border: 2px solid #eee;
    background: white;
    outline: none;
  }
`;

const FormControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    padding: 10px 20px;
    background: white;
    border: 1px solid #57bff9;
    border-radius: 30px;
    color: #57bff9;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    transform: scale(1.1);
  }

  button:active {
    transform: scale(0.9);
  }
`;

export default Edit;
