import { useParams } from "react-router-dom";

export default function MePage() {
  const { user } = useParams();
  console.log(user);

  return <main className="row justify-content-center"></main>;
}
