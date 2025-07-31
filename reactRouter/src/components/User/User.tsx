import { useParams } from "react-router-dom";

interface Props {}

function User(props: Props) {
  const {} = props;
  const { id } = useParams();

  return (
    <p className="bg-gray-600 text-white text-3xl p-4 text-center">
      User :{id}
    </p>
  );
}

export default User;
