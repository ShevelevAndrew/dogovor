import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { format } from "date-fns"
import { getPhone } from "../../store/clients"
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import debounce from "lodash.debounce";

const getCallPhoneDebounce = debounce((dispatch) => {
  dispatch(getPhone({datein: format(new Date(), "dd.MM.yyyy")}))
}, 1000);


export const InPhoneComponent = () => {
    const { inphone } = useSelector((state) => state.clients)
    const dispatch = useDispatch()

    // const getIncall = (dispatch) => {
    //     if (inphone.lenght === 0) { dispatch(getPhone([])) }
    // }

    useEffect(() => {
        getCallPhoneDebounce(dispatch)
    }, [dispatch])

    setTimeout(() => {
        getCallPhoneDebounce(dispatch)
    }, 60000);

    const columns = [
  {
    dataField: "DATE_TIME",
    formatter: (cell, row, rowIndex, colIndex) => format(new Date(cell), "dd.MM.yyyy HH:mm:ss"),
    text: "Дата время",
    align: 'left',
    // headerStyle: { width: 200 },
    // style:{'backgroundColor': '#ffd', 'width':"20"},
    sort: true
  },
  {
    dataField: "NUM_TEL",
    text: "№ телфона",
    // headerStyle: { width: 200 },
    sort: true
  },
  {
    dataField: "CLIENT_NAME",
    text: "Орг.",
    // headerStyle: { width: 300 },
    sort: true
  }
    ];

    return (
        <div>
            <div className="mall-20">
            <BootstrapTable
                bootstrap4
                keyField="ID"
                data={inphone}
                columns={columns}
                pagination={paginationFactory({ sizePerPage: 5 })}
            />
            </div>


            {/* {inphone.map((inCall) => (
                <div className="col-lg-3 mb-4" key={inCall.DATE_TIME}>
                    <div className="mb-8">
                        {format(new Date(inCall.DATE_TIME), "dd.MM.yyyy HH:mm:ss")}
                        {inCall.NUM_TEL}
                        {inCall.CLIENT_NAME}
                        <hr />
                    </div>
                </div>
            ))} */}
        </div>
    )
}