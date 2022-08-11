
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { getAccess, createAccess } from "../../store/access"
import { getClients } from "../../store/clients"
import { Alert, FormControl, InputGroup, Button, Spinner } from 'react-bootstrap';
import { Tags } from "./tags"


const serchAccessDebounce = debounce((query, dispatch) => {
  dispatch(getAccess(query));
}, 700);



export const AccessComponent = () => {
    const [value, setValue] = useState("");
    const [tugleAccess, setTugleAccess] = useState(false)
    const [valueID, setValueID] = useState(null)
    const [accessTag, setAccessTag] = useState([])
    const [valueHeader, setValueHeader] = useState('')
    const [valueDescription, setValueDescription] = useState('')

    const [show, setShow] = useState(true);

    const { access, error, pending } = useSelector((state) => state.access);

    const dispatch = useDispatch();

    const addTags = useCallback((objTag) => {
        setAccessTag(objTag)
    }, [])

    const errorMessage = (error) => {
        if (show) {
            return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>{error.status}</Alert.Heading>
                <p>
                {error.statusText}
                </p>
            </Alert>
            );
        }
        return <Button onClick={() => setShow(true)}>Show Alert</Button>
    }

    useEffect(() => {
        serchAccessDebounce(value, dispatch);
    }, [value, dispatch]);

    useEffect(() => {
        dispatch(getClients())
    }, [dispatch])

    const getValue = (id) => {
        return access.filter((access)=>{return access.id === id})
    }
    const createOrUpdate = () => {
        if (!!valueHeader || !!valueDescription) {
            dispatch(createAccess({
                id: valueID,
                header: valueHeader,
                discription: valueDescription,
                accesstags: accessTag
            }))

            serchAccessDebounce(value, dispatch);
        }
        setTugleAccess(!tugleAccess)
    }

    return (
        <div className="container">
            <h1>Access</h1>
            {error && errorMessage(error)}
            {tugleAccess ?
                <div className="mb-6 col-sm-8">
                    <InputGroup className="mb-3">
                        <Button
                            onClick={() => { createOrUpdate() }}
                            variant="outline-secondary">
                            &#10094;
                        </Button>
                        <FormControl
                            value= {valueHeader}
                            onChange={(e) => setValueHeader(e.target.value)}
                            type="text"
                            placeholder="Заголовок"
                        />
                    </InputGroup>
                    <Tags
                        objTag={addTags}
                        idClient={valueID ? getValue(valueID)[0].accesstags : ''}
                    />
                    <FormControl
                        value={valueDescription}
                        onChange={(e) => setValueDescription(e.target.value)}
                        className="mb-2"
                        as="textarea"
                        rows={valueDescription.split('\n').length > (window.innerHeight - 120) / 34
                            ? (window.innerHeight - 120) / 34
                            : valueDescription.split('\n').length} placeholder="Описание"
                    />
                </div>
                :
                <>
                    <div className="col-sm-8 mb-6">
                        <InputGroup>
                            <FormControl value={value} onChange={(e) => setValue(e.target.value)} type="text"  placeholder="Search"  />
                                {pending && <Spinner animation="border" variant="outline-secondary" size="sm" />}
                                <Button variant="outline-secondary" onClick={()=>{setValue('')}}>X</Button>

                                <Button onClick={() => {
                                    setValueID(null);
                                    setValueHeader("")
                                    setValueDescription("")
                                    setTugleAccess(!tugleAccess)
                                }} variant="outline-secondary">+</Button>
                        </InputGroup>
                </div>
                <div className="row mt-5 " >
                    {access.map((access) => (
                        <div className="col-lg-3 mb-4 grid-margin" key={access.id} onClick={() => {
                            setValueID(access.id);
                            setValueHeader(getValue(access.id)[0]?.header)
                            setValueDescription(getValue(access.id)[0]?.discription)
                            setTugleAccess(!tugleAccess)
                        }} >
                            <div className="card h-100">
                                <h4 className="card-header text-white bg-secondary">{access.header}</h4>
                                <div className="card-body">
                                    <p className="card-text textbox ">{access.discription}</p>
                                </div>
                                <div className="card-header text-white bg-secondary botom-card">
                                    {
                                        access.accesstags.length > 0 && access.accesstags.map((tag) => {
                                            return <div key={tag.id}>{tag.name}</div>
                                        })
                                    }
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
      </div>
  )
}


