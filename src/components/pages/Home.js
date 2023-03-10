import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../projects/Card";
import { BsArrowDownCircle } from "react-icons/bs";
import { IoCaretForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Home() {
  const [tasks, setTasks] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.length > 3){
          navigate('/tasks/1')
        } else {
          setTasks(data);
        }
      });
  }, []);

  function removeTask(id) {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        const tasksUpdated = tasks.filter((task) => task.id != id)
        setTasks(tasksUpdated)
      });
  }

  function editTask(id){
    navigate(`/edit/${id}`)
  }

  function doneTask(id){
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => res.json())
      .then((data) => {
        const doneData = {
          doneTask : !data.doneTask,
        }
    
        fetch(`http://localhost:5000/tasks/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(doneData)
        })
          .then((res) => res.json())
          .then((data) => {
            const tasksUpdated = tasks.filter((task) => task.id !== data.id)
            setTasks([data, ...tasksUpdated])
          });
      });
  }

  return (
    <HomeContainer>
      {tasks?.map((task) => (
        <Card
          name={task.nameTask}
          hour={task.hourTask}
          key={task.id}
          id={task.id}
          color={task.colorTask}
          done={task.doneTask}
          handleRemove={removeTask}
          handleEdit={editTask}
          handleDone={doneTask}
        />
      ))}
      {tasks?.length === 0 && (
        <NoneTracksContainer>
          <h2>Adicione uma tarefa!</h2>
          <p>?? f??cil, deixa eu te ajudar</p>
          <BsArrowDownCircle />
        </NoneTracksContainer>
      )}
      {tasks?.length > 3 && 
      <RightButton>
        <IoCaretForward />
      </RightButton>
      }
    </HomeContainer>
  );
}

const RightButton = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #57bff9;
  color: white;
  right: -25px;
  top: 300px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .3s;

  :hover{
    transform: scale(1.1)
  }

  :active{
    transform: scale(0.9)
  }

  *{
    width: 25px;
    height: 25px;
  }
`

const HomeContainer = styled.div`
  flex: 80%;
`;

const NoneTracksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  color: #57bff9;
  gap: 30px;
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

  p {
    opacity: 0.6;
  }

  *:nth-child(3) {
    width: 50px;
    height: 50px;
  }
`;

export default Home;
