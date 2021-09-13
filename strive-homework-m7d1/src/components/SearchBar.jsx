import {Form, Button, FormControl, Container} from 'react-bootstrap'
import { useState, useEffect } from 'react'


const SearchBar = () => {

    const {searchValue, setSearchValue} = useState("")

    useEffect(() => {
        getData()
    }, [searchValue])
    
    const getData = async () => {
        try {
            const response = await fetch("https://remotive.io/api/remote-jobs?search=front%20end")
            if (response.ok) {
                let data = await response.json()
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container className="d-flex justify-content-center">
            <Form inline>
      <FormControl  type="text"
      value={searchValue} 
      onChange={e => setSearchValue(e.target.value)}
      placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    </Container>
    )
}

export default SearchBar