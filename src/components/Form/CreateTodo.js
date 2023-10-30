import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../../store/task-slice";
import useInput from "../../hooks/use-input";

import Button from "../UI/Button";
import IconCheck from "../Icons/IconCheck";

function CreateTodo() {
  const [completed, setCompleted] = useState(false);

  const completedSwitchHandler = () => {
    setCompleted((prevState) => !prevState);
  };

  const dispacth = useDispatch();

  // valication for inoout new todo
  const isTodo = (value) => value.match(/^[A-Za-z0-9/&$. ]+$/);

  // costum hooks for input
  const {
    value: todoValue,
    isValid: todoValid,
    hasEmpty: todoHasEmpty,
    hasError: todoHasError,
    valueChangeHandler,
    inputBlurHandler,
    reset: todoReset,
  } = useInput(isTodo);

  //this is for dispacth data to redux
  const enterHandler = (event) => {
    if (event.key === "Enter" && !todoHasEmpty) {
      const todoPayload = {
        id: uuidv4(),
        title: todoValue,
        completed,
      };
      dispacth(taskActions.add(todoPayload));
      todoReset();
    }
  };

  return (
    <div className="relative">
      <Button
        className={` absolute top-1/2 left-4 -translate-y-1/2 w-6 h-6 rounded-2xl border border-lightGrayishBlue flex items-center justify-center ${
          completed ? "check-background" : "bg-transparent"
        }`}
        type="button"
        onClick={completedSwitchHandler}
      >
        {completed && <IconCheck />}
      </Button>
      <input
        className="py-4 pl-14 pr-8 w-full rounded text-lg bg-veryLightGray"
        type="text"
        placeholder="Create a new todo..."
        value={todoValue}
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
        onKeyDown={enterHandler}
      />
    </div>
  );
}

export default CreateTodo;
