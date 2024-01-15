import { useUserContext } from "../hooks/UserContext";
import Chip from "./Chip";

const UserChips = () => {
  const { state, dispatch } = useUserContext();

  const handleRemoveChip = (id: number) => {
    dispatch({ type: "REMOVE_CHIP", payload: id });
  };

  return (
    <>
      {state?.userChips?.map(({ id, name, avatar }) => (
        <span
          key={id}
          className="bg-slate-200 px-4 py-2 rounded-full cursor-pointer m-1 flex justify-center items-center gap-2"
          onClick={() => handleRemoveChip(id)}
        >
          <Chip name={name} avatar={avatar} />
        </span>
      ))}
    </>
  );
};

export default UserChips;
