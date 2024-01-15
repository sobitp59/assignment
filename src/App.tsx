import { useState } from "react";
import "./App.css";
import { useUserContext } from "./hooks/UserContext";
import FilterUser from "./components/FilterUser";
import UserChips from "./components/UserChips";

function App() {
  const [isInputInFocus, setIsInputInFocus] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { state } = useUserContext();

  const allUsers = state?.allUsers?.filter(({ name }) =>
    name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-4xl font-black mb-4">Filter</h1>
      <div className="w-full flex flex-wrap border-b-2 border-b-blue-500 mb-5">
        <UserChips />

        <input
          onFocus={() => setIsInputInFocus(true)}
          type="text"
          value={searchQuery}
          className="outline-none mb-1 h-16 px-4 py-2 "
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search here..."
        />
      </div>

      {isInputInFocus ? (
        <FilterUser allUsers={allUsers} setSearchQuery={setSearchQuery} />
      ) : null}
    </div>
  );
}

export default App;
