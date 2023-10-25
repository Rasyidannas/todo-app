import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({ id: "droppable" });
  // console.log(isOver);

  return <div ref={setNodeRef}>{props.children}</div>;
}
