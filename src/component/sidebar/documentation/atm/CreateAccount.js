import React, { useState } from "react";
import axios from "axios";
function CreateAccount(props) {
    const [accountDetails, setAccount] = useState({
        id: '', age: '', date: '', name: '',
        mobile: '', userId: '', balance: '', deposit: '', location: '', withdraw: '', accountNo: ''
    });
   
    const apiUrl = "https://api-generator.retool.com/4dcBri/data";
    const InsertAccount = (e) => {
        e.preventDefault();
        const data = {
            id: accountDetails.id, age: accountDetails.age, date: accountDetails.date, name: accountDetails.name,
            mobile: accountDetails.mobile, userId: accountDetails.userId, balance: accountDetails.balance, deposit: accountDetails.deposit,
            location: accountDetails.location, withdraw: accountDetails.withdraw, accountNo: accountDetails.accountNo
        }
        axios.post(apiUrl, data)
            .then((result) => {
                props.history.push('/AccountList')
            });
    };
    const onChange = (e) => {
        e.persist();
        setAccount({ ...accountDetails, [e.target.name]: e.target.value });
    }
    return (
        <div className="create-account">
            <h5>Create Account</h5>
            <div className="flex-row align-items-center">
            <div>
                <div className="justify-content-center">
                    <div>
                        <div>
                            <div>
                                <form onSubmit={InsertAccount}>
                                <div className="row row-cols-2">
                                        <div className="mb-3 group-item">
                                            <label>Name</label>
                                            <input type="text" name="name" id="name" placeholder="name" value={accountDetails.name} onChange={onChange} />
                                        </div>
                                        <div className="mb-3 group-item">
                                            <label>Age</label>
                                            <input type="text" placeholder="age" name="age" id="age" value={accountDetails.age} onChange={onChange} />
                                        </div>
                                        <div className="mb-3 group-item">
                                            <label>Date</label>
                                            <input type="date" placeholder="date" name="date" id="date" value={accountDetails.date} onChange={onChange} />
                                        </div>
                                        <div className="mb-3 group-item">
                                            <label>Mobile</label>
                                            <input type="number" placeholder="mobile" name="mobile" id="mobile" value={accountDetails.mobile} onChange={onChange} />
                                        </div>
                                        <div className="mb-3 group-item">
                                            <label>User Id</label>
                                            <input type="text" placeholder="userId" name="userId" id="userId" value={accountDetails.userId} onChange={onChange} />
                                        </div>
                                        <div className="mb-3 group-item">
                                            <label>Balance</label>
                                            <input type="text" placeholder="balance" name="balance" id="balance" value={accountDetails.balance} onChange={onChange} />
                                        </div>
                                        <div className="mb-3 group-item">
                                            <label>Deposite</label>
                                            <input type="text" placeholder="deposit" name="deposit" id="deposit" value={accountDetails.deposit} onChange={onChange} />
                                        </div>
                                        <div className="mb-3 group-item">
                                            <label>Account No</label>
                                            <input type="text" placeholder="accountNo" name="accountNo" id="accountNo" value={accountDetails.accountNo} onChange={onChange} />
                                        </div>
                                        <div className="mb-3 group-item">
                                            <label>Location</label>
                                            <input type="text" placeholder="location" name="location" id="location" value={accountDetails.location} onChange={onChange} />
                                        </div>
                                        <div className="mb-3 group-item">
                                            <label>Withdraw</label>
                                            <input type="text" placeholder="withdraw" name="withdraw" id="withdraw" value={accountDetails.withdraw} onChange={onChange} />
                                        </div>
                                        <div className="p-4">
                                            <div>
                                                <div xs="12" sm="6">
                                                    <button type="submit" className="btn btn-info mb-1" block><span>Save</span></button>
                                                </div>
                                                <div xs="12" sm="6">
                                                    <button className="btn btn-info mb-1" block><span>Cancel</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default CreateAccount;