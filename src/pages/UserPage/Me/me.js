import { useParams } from "react-router-dom";

export default function MePage() {
  const { user } = useParams();

  return <main className="row justify-content-center">ME PAGE</main>;
}
