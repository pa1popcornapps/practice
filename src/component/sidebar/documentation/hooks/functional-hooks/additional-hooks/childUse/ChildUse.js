import React, { forwardRef, useImperativeHandle, useState } from 'react';
function ChildUse(props, ref) {
    const [openModal, setOpenModal] = useState(false);
    useImperativeHandle(ref, () => ({
        openModal: (value) => setOpenModal(value),
    }));

    if (!openModal) return null;
    return (
        <div className="use-layout">
            <h5>Child Use</h5>
            <div>
                <p>This is a modal!</p>
                <button onClick={() => setOpenModal(false)}> Close </button>
            </div>
        </div>
    );
}
export default forwardRef(ChildUse);