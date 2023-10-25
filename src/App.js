import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import "./styles.css";

import { Draggable } from "./components/UI/Draggable";
import { Droppable } from "./components/UI/Droppable";

export default function App() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Draggable>Drag me</Draggable>;

  function handleDragEnd(event) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }

  console.log(isDropped);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : null}
      <Droppable>{isDropped ? draggableMarkup : "Drop here"}</Droppable>
    </DndContext>
  );
}
