import { useEffect, useState } from "react";
import styled from "styled-components";

function Header() {

    const [day, setDay] = useState()
    const [month, setMonth] = useState()
    const [dayOfWeek, setDayOfWeek] = useState()

    useEffect(() => {
        const date = new Date;

        const dayOfWeekData = date.getDay();

        setDay(date.getDate())

        const monthData = date.getMonth()

        switch (monthData) {
            case 1:
                setMonth('January')
                break;
            case 2:
                setMonth('February')
                break;
            case 3:
                setMonth('March')
                break;
            case 4:
                setMonth('April')
                break;
            case 5:
                setMonth('May')
                break;
            case 6:
                setMonth('June')
                break;
            case 7:
                setMonth('July')
                break;
            case 8:
                setMonth('August')
                break;
            case 9:
                setMonth('September')
                break;
            case 10:
                setMonth('October')
                break;
            case 11:
                setMonth('November')
                break;
            case 12:
                setMonth('December')
                break;
        
            default:
                break;
        }

        switch (dayOfWeekData) {
            case 1:
                setDayOfWeek('monday')
                break;
            case 2:
                setDayOfWeek('tuesday')
                break;
            case 3:
                setDayOfWeek('wednesday')
                break;
            case 4:
                setDayOfWeek('thursday')
                break;
            case 5:
                setDayOfWeek('friday')
                break;
            case 6:
                setDayOfWeek('saturday')
                break;
            case 7:
                setDayOfWeek('sunday')
                break;

            default:
                break;
        }
    }, [])

    return (
        <HeaderContainer>
            <h2>{day} {month}, {dayOfWeek}</h2>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
    display: flex;
    flex: 20%;
    background-image: linear-gradient(45deg, #30EFF8, #57BFF9);
    padding: 0 50px;
    align-items: center;
    color: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    h2{
        font-weight: normal;
    }
`

export default Header;