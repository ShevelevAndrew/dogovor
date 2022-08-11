import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';


export const Tags = ({objTag, idClient}) => {
    const [selected, setSelected] = useState([]);
    const { clients } = useSelector ((state) => state.clients);

    useEffect(() => {
        objTag(selected)
    },[selected,objTag])

    const getDefaultSelect = () => {
        let filter
        let newFilter = []
        idClient && idClient.map((cli) => {
            filter = clients.filter((client) => {
                    if (client.ID === cli.clientid) {
                    return true
                } else {
                    return false
                }
            })

            newFilter.push(...filter)
            return true
        })
        return newFilter
    }

    return (
        <div className="mb-3">
        <h2>Tags</h2>
        <Typeahead className="tc-w"
            id="my-typeahead-id"
            labelKey="NAME"
            defaultSelected={getDefaultSelect()}
            onChange={(selected) => {
                setSelected(selected)
            }}
            multiple
        options={clients}
        />
       </div>
    )
}