import React from 'react';
export default function Navbar() {
    return (
        <div className="header">
            <div className="col">
                <p>React Tutorial</p>
            </div>
            <div className="col">
                <button>Dashboard</button>
                <button>Login</button>
            </div>
        </div>
    );
}