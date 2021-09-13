import { Form, Button, FormControl} from "react-bootstrap";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getData();
  }, [searchValue]);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?title=developer`
      );
      if (response.ok) {
        let {data} = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
      <Form inline>
        <FormControl
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    
  );
};

export default SearchBar;
