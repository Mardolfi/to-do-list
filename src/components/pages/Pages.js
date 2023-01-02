import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../projects/Card";
import { BsArrowDownCircle } from "react-icons/bs";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

function Pages() {
  const [tasks, setTasks] = useState();
  const { page } = useParams();
  const [isBackPage, setIsBackPage] = useState();
  const [isNextPage, setIsNextPage] = useState();
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
        setTasks(data.slice(Number(page - 1) * 3, page * 3));

        const backPage = Number(page - 2) * 3;

        if (backPage >= 0) {
          setIsBackPage(true);
        } else {
          setIsBackPage(false);
        }

        const nextPage = Number(page) * 3;

        if (nextPage >= data.length) {
          setIsNextPage(false);
        } else {
          setIsNextPage(true);
        }
      });
  }, [page]);

  function removeTask(id) {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        fetch("http://localhost:5000/tasks", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setTasks(data.slice(Number(page - 1) * 3, page * 3));

            const backPage = Number(page - 2) * 3;

            if (backPage >= 0) {
              setIsBackPage(true);
            } else {
              setIsBackPage(false);
            }

            const nextPage = Number(page) * 3;

            if (nextPage >= data.length) {
              setIsNextPage(false);
            } else {
              setIsNextPage(true);
            }
          });
      });
  }

  function editTask(id) {
    navigate(`/edit/${id}`);
  }

  function doneTask(id) {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const doneData = {
          doneTask: !data.doneTask,
        };

        fetch(`http://localhost:5000/tasks/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(doneData),
        })
          .then((res) => res.json())
          .then((data) => {
            const tasksUpdated = tasks.filter((task) => task.id !== data.id);
            setTasks([data, ...tasksUpdated]);
          });
      });
  }

  function nextPage() {
    navigate(`/tasks/${Number(page) + 1}`);
  }

  function backPage() {
    navigate(`/tasks/${Number(page) - 1}`);
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
          <p>É fácil, deixa eu te ajudar</p>
          <BsArrowDownCircle />
        </NoneTracksContainer>
      )}
      {isNextPage && (
        <RightButton onClick={nextPage}>
          <IoCaretForward />
        </RightButton>
      )}

      {isBackPage && (
        <LeftButton onClick={backPage}>
          <IoCaretBack />
        </LeftButton>
      )}
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
  transition: 0.3s;

  :hover {
    transform: scale(1.1);
  }

  :active {
    transform: scale(0.9);
  }

  * {
    width: 25px;
    height: 25px;
  }
`;

const LeftButton = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #57bff9;
  color: white;
  left: -25px;
  top: 300px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    transform: scale(1.1);
  }

  :active {
    transform: scale(0.9);
  }

  * {
    width: 25px;
    height: 25px;
  }
`;

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

export default Pages;
