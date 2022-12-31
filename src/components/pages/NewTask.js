import styled from "styled-components";

function NewTask() {
  return (
    <NewTaskContainer>
      <h1>New Task</h1>
      <form>
        <FormInputs>
          <input type={"number"} required placeholder="Task hour"></input>
          <input type={"text"} required placeholder="Task name"></input>
        </FormInputs>
        <FormControl>
          <button>New Task</button>
        </FormControl>
      </form>
    </NewTaskContainer>
  );
}

const NewTaskContainer = styled.div`
  flex: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  h1{
    color: #57BFF9;
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

  input{
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

  button{
    padding: 10px 20px;
    background: white;
    border: 1px solid #57BFF9;
    border-radius: 30px;
    color: #57BFF9;
  }
`;

export default NewTask;
