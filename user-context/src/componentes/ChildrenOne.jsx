import useAppContext from "../hook/UseAppContext";
import  ChildrenTwo  from "./ChildrenTwo";

export default function ChildrenOne() {

  const {name, num} = useAppContext()

  return <div>{name} e número : {num}</div>
}
