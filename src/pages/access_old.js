
import { useEffect, useState, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { getAccess } from "../store/access"
import { Typeahead } from 'react-bootstrap-typeahead';
import { Modal, FormControl, InputGroup, Button, ButtonToolbar } from 'react-bootstrap';


const serchAccessDebounce = debounce((query, dispatch) => {
  dispatch(getAccess(query));
}, 1000);

export const AccessPage1 = () => {
    const [value, setValue] = useState("");
    const [tugleAccess, setTugleAccess] = useState(false)
    const [valueHeader, setValueHeader] = useState('')
    const [valueDescription, setValueDescription] = useState('')

    // const { access, error, pending } = useSelector((state) => state.access);
    // const ref = useRef();
    const dispatch = useDispatch();

    let tugleCard = false
    const options = ["sddfsfsdf", "4ssdfsfd56", "7sdfsdfsdf89", "1sdfsdf01"]
    useEffect(() => {
        serchAccessDebounce(value, dispatch);
    }, [value, dispatch]);

    return (
        <div className="container">
            <h1>Access</h1>
            {tugleAccess ?
                <div className="mb-6 col-sm-8">
                    <InputGroup className="mb-3">
                        <Button onClick={()=>{setTugleAccess(!tugleAccess)}} variant="outline-secondary">&#10094;</Button>
                        <FormControl value={valueHeader} onChange={(e) => setValueHeader(e.target.value)} type="text" placeholder="Заголовок" />
                    </InputGroup>
                    <FormControl value={valueDescription} onChange={(e) => setValueDescription(e.target.value)} className="mb-2" as="textarea" rows={valueDescription.split('\n').length > 25 ? 25 : valueDescription.split('\n').length } placeholder="Описание" />
                </div>
                :
                <>
                    <div className="col-sm-8 mb-6">
                        <InputGroup>
                            <FormControl value={value} onChange={(e) => setValue(e.target.value)} type="text"  placeholder="Search"  />
                        <Button onClick={() => {
                            setValueHeader('');
                            setValueDescription('');
                            setTugleAccess(!tugleAccess)
                        }} variant="outline-secondary">+</Button>

                        </InputGroup>
                </div>
                <div className="row mt-5 " >
                    {access.map((access) => (
                        <div className="col-lg-3 mb-4 grid-margin" key={access.id} onClick={() => {
                            setValueHeader(access.header);
                            setValueDescription(access.discription);
                            setTugleAccess(!tugleAccess)
                        }} >
                            <div className="card h-100">
                                <h4 className="card-header text-white bg-secondary">{access.header}</h4>
                                <div className="card-body">
                                    <p className="card-text textbox ">{access.discription}</p>
                                </div>
                                {/* <div className="card-footer">
                                <Button variant="btn btn-primary">Learn More</Button>
                            </div> */}
                            </div>
                        </div>
                    ))}
                </div>
                </>
            }
            
            {/* <AddTags options={options} ref={ref} />     */}
            {/* <div className="row mb-4">
            <div className="col-sm-12 grid-margin">
                <div className="card h-100">
                <h4 className="card-header">Table</h4>
                <div className="card-body">
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </Table>
                </div>
                </div>
            </div>
            </div> */}
      </div>
  )
}

const AddTagssss = (options, ref) => {
//   const ref = useRef();
console.log("options",options)
  return (
     <Fragment>
      <Typeahead
        defaultSelected={options.slice(0, 4)}
        id="public-methods-example"
        labelKey="name"
        // multiple
        options={options}
        placeholder="Choose a state..."
        ref={ref}
      />
      <ButtonToolbar style={{ marginTop: '10px' }}>
        <Button onClick={() => ref.current.clear()}>
          Clear
        </Button>
        <Button onClick={() => ref.current.focus()}>
          Focus
        </Button>
        <Button
          onClick={() => {
            ref.current.focus();
            setTimeout(() => ref.current.blur(), 1000);
          }}>
          Focus, then blur after 1 second
        </Button>
        <Button onClick={() => ref.current.toggleMenu()}>
          Toggle Menu
        </Button>
          </ButtonToolbar>
          
     </Fragment>
  );
};

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

