import { useEffect, useState } from "react";
import styled from "styled-components";

function Header() {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [dayOfWeek, setDayOfWeek] = useState();

  useEffect(() => {
    const date = new Date();

    const dayOfWeekData = date.getDay();

    setDay(date.getDate());

    const monthData = date.getMonth();

    switch (monthData) {
      case 0:
        setMonth("January");
        break;
      case 1:
        setMonth("February");
        break;
      case 2:
        setMonth("March");
        break;
      case 3:
        setMonth("April");
        break;
      case 4:
        setMonth("May");
        break;
      case 5:
        setMonth("June");
        break;
      case 6:
        setMonth("July");
        break;
      case 7:
        setMonth("August");
        break;
      case 8:
        setMonth("September");
        break;
      case 9:
        setMonth("October");
        break;
      case 10:
        setMonth("November");
        break;
      case 11:
        setMonth("December");
        break;

      default:
        break;
    }

    switch (dayOfWeekData) {
      case 0:
        setDayOfWeek("sunday");
        break;
      case 1:
        setDayOfWeek("monday");
        break;
      case 2:
        setDayOfWeek("tuesday");
        break;
      case 3:
        setDayOfWeek("wednesday");
        break;
      case 4:
        setDayOfWeek("thursday");
        break;
      case 5:
        setDayOfWeek("friday");
        break;
      case 6:
        setDayOfWeek("saturday");
        break;

      default:
        break;
    }
  }, []);

  return (
    <HeaderContainer>
      <h2>
        {day} {month}, {dayOfWeek}
      </h2>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex: 20%;
  background-image: linear-gradient(45deg, #30eff8, #57bff9);
  padding: 0 50px;
  align-items: center;
  color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: relative;

  h2 {
    font-weight: normal;
  }
`;

export default Header;
