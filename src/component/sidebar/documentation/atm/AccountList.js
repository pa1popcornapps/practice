import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
function AccountList(props) {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const GetData = async () => {
        const result = await axios('https://api-generator.retool.com/4dcBri/data');
        setData(result.data);
    };
    useEffect(() => {

        GetData();
    }, []);
    let deleteeployee = (l) => {
        alert(l.id)
        let g = l.id
        axios.delete('https://api-generator.retool.com/4dcBri/data/' + g)
            .then((result) => {
                props.history.push('/EmployeList')
            });
        GetData();
    };
    let editemployee = (l) => {
        props.history.push({
            pathname: '/edit/' + l.id
        });
    };
    
    function handleChange(event) {
        let l=String(event.target.value);
        let arr=[]
            for(let key in data){
                let x=String(data[key].accountNo)
                arr.push(x.substring(0,l.length))
            }
            let fil=[]
            let main=[]
            for(let i=0;i<arr.length;i++){
                if(l==arr[i]){
                   fil.push(i)
                   console.log(data[i])
                   main.push(data[i])
                }
            }
            setData1(main);
            
      }
    return (
        <div className="account-list">
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <i className="fa fa-align-justify"></i> Account Details
                            </div>
                            <input name="firstName" onChange={handleChange} />
                            <div>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Age</th>
                                            <th>Account No</th>
                                            <th>Date</th>
                                            <th>Location</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data1.map((item) => {
                                                return <tr>
                                                    <td>{item.name}</td>
                                                    <td>{item.age}</td>
                                                    <td>{item.accountNo}</td>
                                                    <td>{item.date}</td>
                                                    <td>{item.location}</td>
                                                    <td>
                                                        <div class="btn-group">
                                                            <button className="btn btn-warning" onClick={() => { editemployee(item) }}>Edit</button>
                                                            <button className="btn btn-warning" onClick={() => { deleteeployee(item) }}>Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AccountList;