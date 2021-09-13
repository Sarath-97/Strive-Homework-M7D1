import {Form, Button} from 'react-bootstrap'

const SearchBar = () => {
    return (
        <div>
            <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
        </div>
    )
}

export default SearchBar