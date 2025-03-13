import React from "react";
import Papa from "papaparse";
import {toast} from "react-toastify";

const ImportCSV = (props: { setListUser: any; }) => {
    const {setListUser} = props;
    const handleImportCSV = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event?.target?.files && event.target.files[0]) {
            let file = event.target.files[0];
            if (file.type !== "text/csv") {
                toast.error("Only accept text/csv file!");
                return;
            }
            Papa.parse(file, {
                // header: true,
                complete: (result: { data: any; }) => {
                    let rawCSV = result.data;
                    if (rawCSV.length > 0) {
                        if (rawCSV[0] && rawCSV[0].length === 3) {
                            if (
                                rawCSV[0][0] !== "email" ||
                                rawCSV[0][1] !== "first_name" ||
                                rawCSV[0][2] !== "last_name"
                            ) {
                                toast.error("Wrong format header CSV file!");
                            } else {
                                let results: {}[] = [];
                                rawCSV.map((item: string | any[], index: number) => {
                                    if (index > 0 && item.length === 3) {
                                        let obj = {};
                                        obj.email = item[0];
                                        obj.first_name = item[1];
                                        obj.last_name = item[2];
                                        results.push(obj);
                                    }
                                })
                                setListUser(results);
                                toast.success("Import CSV file successfully!");
                            }
                        } else {
                            toast.error("Not found data on CSV file!");
                        }
                    }
                }
            });
        }
    };
    return (
        <>
            <label className="btn btn-primary btn-import" htmlFor="file" type="button">
                <span>
                    <i className="fa-solid fa-file-import me-2"></i>
                </span>
                Import
            </label>
            <input type="file" id="file" hidden onChange={(event) => {
                handleImportCSV(event)
            }}/>
        </>
    );
};
export default ImportCSV;