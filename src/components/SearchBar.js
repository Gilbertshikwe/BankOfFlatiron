import { useState } from "react"

export default function SearchBar({onSearch}){
  //state to save the inputs text from the input box
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
      //  console.log(event.target.value)
          //capture forms input
         const value = event.target.value;
         setSearchTerm(value)
         //child back to parent communication
         onSearch(searchTerm)

  }

    return (
       <>
         <div>
          <label htmlFor="search">Search:</label>
          <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleInputChange}    
          placeholder="Search Description"      
          />
         </div>
       </>
    )
}
