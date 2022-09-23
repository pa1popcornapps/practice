import React from 'react';
export default function SideBar() {
   
        return (
        <div className="side-bar">
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                Documentation
            </button>
            <div className="offcanvas offcanvas-start" id="demo">
                <div className="offcanvas-body">
                    <div className="offcanvas-header row justify-content-end">
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <nav>
                        <h5>React Router Example</h5>
                    </nav>

                </div>
            </div>
        </div>
    );
}