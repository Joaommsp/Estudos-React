import useAppContext from "../hook/UseAppContext";

export default function ChildrenTwo() {
  const {name, setName} = useAppContext()
  return <button onClick={() => setName("João da Massa")}>Mude o nome</button>;
}
