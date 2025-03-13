import {CSVLink} from "react-csv";
import {useState} from "react";

const ExportCSV = (props: { listUsers: any; }) => {
    const {listUsers} = props;
    const [dataExport, setDataExport] = useState<any>([]);
    const getAllUsersExport = (_event: any, done: () => void) => {
        let result = [];
        if (listUsers && listUsers.length > 0) {
            result.push(["Id", "Email", "First name", "Last name"]);
            listUsers.map((item: { id: any; email: any; first_name: any; last_name: any; }, index: any) => {
                let arr = [];
                arr[0] = item.id;
                arr[1] = item.email;
                arr[2] = item.first_name;
                arr[3] = item.last_name;
                result.push(arr);
            });
            setDataExport(result);
            done();
        }
    };
    return (
        <div>
            <CSVLink
                data={dataExport}
                className="btn btn-primary"
                filename={"ListUsers.csv"}
                asyncOnClick={true}
                onClick={(event: any, done: any) => getAllUsersExport(event, done)}
            >
                <span className="me-1">
                    <i className="fa-solid fa-download"></i>{" "}
                </span>
                Export
            </CSVLink>
        </div>
    );
};
export default ExportCSV;