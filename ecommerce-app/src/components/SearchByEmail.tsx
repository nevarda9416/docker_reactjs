import React from "react";
import _ from "lodash";
import {debounce} from "lodash";

const SearchByEmail = React.memo((props: { getAllUsers: any; listUsers: any; setListUser: any; }) => {
    const {getAllUsers, listUsers, setListUser} = props;
    const handleSearch = debounce((event: any) => {
        let term = event;
        if (term) {
            let listUsersCopy = _.cloneDeep(listUsers);
            listUsersCopy = listUsersCopy.filter((item: {
                email: { include: (arg0: any) => any; };
            }) => item.email.includes(term));
            setListUser(listUsersCopy);
        } else {
            getAllUsers(1);
        }
    }, 500);
    return (
        <div className="col=md-5">
            {" "}
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">
                    Search user's email
                </span>
                <input type="text" className="form-control" placeholder="Enter email" onChange={(event) => {
                    handleSearch(event.target.value)
                }}/>
            </div>
        </div>
    );
});
export default SearchByEmail;