import { useEffect, useState } from "react";
import styled from "styled-components";
import { MdOutlineDone } from "react-icons/md";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function Card() {
  const [color, setColor] = useState();
  const [active, setActive] = useState();

  useEffect(() => {
    const acceptableColors = [
      "#154D63",
      "#97E9E9",
      "#7BBBAD",
      "#FFD296",
      "#FF8A77",
    ];
    setColor(
      acceptableColors[Math.floor(Math.random() * acceptableColors.length)]
    );
  }, []);

  return (
    <CardContainer>
      <CardInfo>
        <h2>9:25</h2>
        <h2>Teamwork</h2>
      </CardInfo>
      <CardColor
        color={color}
        active={active}
        onClick={() => setActive(!active)}
      >
        <AiOutlineClose />
      </CardColor>
      <DoneTask active={active}>
        <MdOutlineDone />
      </DoneTask>
      <EditTask active={active}>
        <FaPen />
      </EditTask>
      <RemoveTask active={active}>
        <FaTrashAlt />
      </RemoveTask>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 100%;
  height: 33%;
  transition: 0.5s;
  background: white;
  padding: 20px 50px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;

  &:hover {
    transform: scale(1.1);
    border-left: 10px solid #57bff9;
    box-shadow: 0px 0px 10px -5px #202020;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  h2:nth-child(1) {
    font-weight: normal;
    color: #99999990;
  }

  h2:nth-child(2) {
    font-weight: normal;
    color: #666;
  }
`;

const CardColor = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color};
  box-shadow: 0px 5px 20px -10px #999;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  transition: 0.4s;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    transform: scale(0.9);
  }

  * {
    opacity: ${(props) => (props.active ? "1" : "0")};
    transition: .3s;
    width: 20px;
    height: 20px;
    color: white;
  }
`;

const EditTask = styled.div`
  top: ${(props) => (props.active ? "50px" : "50px")};
  right: ${(props) => (props.active ? "150px" : "50px")};
  box-shadow: ${(props) => (props.active ? "0px 5px 20px -10px #999" : "none")};
  z-index: 0;
  * {
    width: 20px;
    height: 20px;
  }

  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #57bff9;
  background-color: #fff;
  transition: 0.4s;
  cursor: pointer;
`;

const RemoveTask = styled.div`
  bottom: ${(props) => (props.active ? "-25px" : "50px")};
  right: ${(props) => (props.active ? "100px" : "50px")};
  box-shadow: ${(props) => (props.active ? "0px 5px 20px -10px #999" : "none")};
  z-index: 0;
  * {
    width: 20px;
    height: 20px;
  }

  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #57bff9;
  background-color: #fff;
  transition: 0.4s;
  cursor: pointer;
`;

const DoneTask = styled.div`
  top: ${(props) => (props.active ? "-25px" : "50px")};
  right: ${(props) => (props.active ? "100px" : "50px")};
  box-shadow: ${(props) => (props.active ? "0px 5px 20px -10px #999" : "none")};
  z-index: 0;
  * {
    width: 20px;
    height: 20px;
  }

  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #57bff9;
  background-color: #fff;
  transition: 0.4s;
  cursor: pointer;
`;

export default Card;
