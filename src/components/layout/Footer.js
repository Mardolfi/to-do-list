import styled from "styled-components";
import { MdAdd } from 'react-icons/md'
import { useNavigate } from "react-router-dom";

function Footer() {

    const navigate = useNavigate();

    function createTask() {
        navigate('/newtask')
    }

    return (
        <FooterContainer onClick={createTask}>
            <AddIcon />
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: -40px;
    width: 80px;
    height: 80px;
    left: 40%;
    border-radius: 50%;
    background-image: linear-gradient(45deg, #30EFF8, #57BFF9);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    transition: .4s;

    :hover{
        transform: scale(1.1);
    }

    :active{
        transform: scale(0.95);
    }
`

const AddIcon = styled(MdAdd)`
    width: 50px;
    height: 50px;
`

export default Footer;