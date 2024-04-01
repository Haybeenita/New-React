import { useState } from "react";

const SearchArray = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  
  const data = ["cow", "Goat", "Cubana", "Nkechi", "plantain", "Egg", "ice-cream"];

  const handleSearch = (event) => {
    const searchText = event.target.value.toLowerCase();
    setSearchText(searchText);

    const results = data.filter(item =>
      item.toLowerCase().includes(searchText)
    );
    setSearchResults(results);
  };

  return (
    <div className=" bg-blue-900 w-[17rem] h-[15rem] ml-[30rem] pl-[2rem] mt-[2rem] rounded-2xl">
    <div>
    <input
      className="mt-[2rem] px-3"
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearch}
      />

    

      <ul>
        {searchResults.map((item, index) => (
            <ol key={index}>
            <li className="list-disc">{item}</li>
            </ol>
          
        ))}
      </ul>
      </div>
    </div>
  );
};

export default SearchArray;
