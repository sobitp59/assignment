import { Dispatch, SetStateAction } from "react";
import { UserType } from "../types";
import { useUserContext } from "../hooks/UserContext";
import User from "./User";

const FilterUser = ({
  allUsers,
  setSearchQuery,
}: {
  allUsers: UserType[];
  setSearchQuery: Dispatch<SetStateAction<string>>;
}) => {
  const { dispatch } = useUserContext();

  const handleAddChip = (id: number) => {
    dispatch({ type: "ADD_CHIP", payload: id });
    setSearchQuery("");
  };
  return (
    <div className="border-2 shadow-md max-h-[400px] overflow-y-scroll cursor-pointer rounded-sm">
      {allUsers.length === 0 && <p>No user found matching your criteria!</p>}

      {allUsers?.map(({ id, name, email, avatar }: UserType) => (
        <section
          key={id}
          className="flex  justify-start items-center gap-4 p-4  hover:bg-slate-100"
          onClick={() => handleAddChip(id)}
        >
          <User name={name} email={email} avatar={avatar} />
        </section>
      ))}
    </div>
  );
};

export default FilterUser;
