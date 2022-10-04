import React, { useState, useEffect } from 'react'
import axios from 'axios';
function EditAccount(props) {

    const [accountDetails, setAccount] = useState({
        id: '', age: '', date: '', name: '',
        mobile: '', userId: '', balance: '', deposit: '', location: '', withdraw: '', accountNo: ''
    });
    const [fullData, setFullAccount] = useState({
        id: '', age: '', date: '', name: '',
        mobile: '', userId: '', balance: '', deposit: '', location: '', withdraw: '', accountNo: ''
    })
    const [bal, setBal] = useState()
    const Url = "https://api-generator.retool.com/4dcBri/data/" + props.match.params.id;
    const fullUrl = "https://api-generator.retool.com/4dcBri/data"
    const GetFullData = async () => {
        const result = await axios(fullUrl);
        setFullAccount(result.data);
    };
    useEffect(() => {

        GetFullData();

    }, [fullUrl]);

    let lastArr = [];
    let x;
    for (let i = 0; i < fullData.length; i++) {
        if (fullData[i].accountNo === accountDetails.accountNo) {
            lastArr.push(fullData[i])
        }
    }
    if (lastArr.length >= 1) {
        x = lastArr[lastArr.length - 1].accountNo
    };
    let b;
    let y;
    const handleInputDeposit = (e) => {
        e.persist();
        if (lastArr.length >= 1) {
            b = Number(lastArr[lastArr.length - 1].balance)
            y = b + Number(e.target.value)
            setBal(y);
        }
    }
    const handleInputWithdraw = (e) => {
        e.persist();
        if (lastArr.length >= 1) {
            b = Number(lastArr[lastArr.length - 1].balance)
            y = b - Number(e.target.value)
            setBal(y);
        }

    }
    useEffect(() => {
        const GetData = async () => {
            const result = await axios(Url);
            setAccount(result.data);
        };
        GetData();
    }, [Url]);



    const UpdateAccount = (e) => {
        e.preventDefault();
        const data = {
            id: props.match.params.id, age: accountDetails.age, date: accountDetails.date, name: accountDetails.name,
            mobile: accountDetails.mobile, userId: accountDetails.userId, balance: accountDetails.balance, deposit: accountDetails.deposit,
            location: accountDetails.location, withdraw: accountDetails.withdraw, accountNo: accountDetails.accountNo
        }
        axios.put(Url, data)
            .then((result) => {
                props.history.push('/AccountList')
            });

    };
    const onChange = (e) => {
        e.persist();
        setAccount({ ...accountDetails, [e.target.name]: e.target.value });
    }
    return (
        <div>
            <div>
                <div className="justify-content-center">
                    <div>
                        <div>
                            <div>
                                <form onSubmit={UpdateAccount}>
                                    <h1>Update Employee</h1>
                                    <div className="">
                                        <h5>Current Balance :<span>{accountDetails.balance}</span></h5>
                                    </div>
                                    <div className="row row-cols-2">
                                        <div className="mb-3 group-item">
                                            <label>Name</label>
                                            <input type="text" name="name" id="name" placeholder="name" value={accountDetails.name} onChange={onChange} />
                                        </div>
                                        <div className="mb-3 group-item">
                                            <label>Age</label>
                                            <input type="text" placeholder="age" name="Department" id="age" value={accountDetails.age} onChange={onChange} />
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
                                            <input type="text" placeholder="balance" name="balance" id="balance" value={bal} onChange={onChange} />
                                        </div>
                                        <div className="mb-3 group-item">
                                            <label>Deposite</label>
                                            <input type="text" placeholder="deposit" name="deposit" id="deposit" onChange={handleInputDeposit} />
                                        </div>
                                        <div className="mb-3 group-item">
                                            <label>Account No</label>
                                            <input type="text" placeholder="accountNo" name="accountNo" id="accountNo" value={x} onChange={onChange} />
                                        </div>
                                        <div className="mb-3 group-item">
                                            <label>Location</label>
                                            <input type="text" placeholder="location" name="location" id="location" value={accountDetails.location} onChange={onChange} />
                                        </div>
                                        <div className="mb-3 group-item">
                                            <label>Withdraw</label>
                                            <input type="text" placeholder="withdraw" name="withdraw" id="withdraw" onChange={handleInputWithdraw} />
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
        </div >
    )
}
export default EditAccount;