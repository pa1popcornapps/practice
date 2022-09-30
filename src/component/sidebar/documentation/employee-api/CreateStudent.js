import React,{useParams } from 'react';

function CreateStudent() {
    let { id } = useParams();

    return (
        <div>
            <h5>Create Student</h5>
            <h3>ID: {id}</h3>
        </div>
    );
}

export default CreateStudent;