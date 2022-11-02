import { Divider, Input } from 'antd';
import {useState} from "react"


function Search(props) {

    const [searchInput, setSearchInput] = useState("")

    const handleChange = (event) => {
        setSearchInput(event.target.value)
        props.listadoFiltrado(event.target.value)
    }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchInput} type="text" placeholder='Enter search query' onChange={handleChange} />
    </>
  );
}

export default Search;