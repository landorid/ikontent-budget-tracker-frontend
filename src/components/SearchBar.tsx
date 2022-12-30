import { ChangeEvent } from "react";
import { useAppSelector, useAppDispatch } from "../store/store";
import { selectSearchText, setSearch } from "../store/ui.slice";
import { Input } from "./Input";

export default function SearchBar() {
  const searchText = useAppSelector(selectSearchText);
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(event.currentTarget.value));
  };
  return (
    <Input
      value={searchText}
      onChange={handleChange}
      placeholder="Type to search"
      type="search"
    />
  );
}
