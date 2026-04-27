import React from "react";

export function DeleteConfirmDialog({isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div>
            <div>
                <h3>Delete Apllication</h3>
                <p>This action cannot be undone. Are you sure you want to delete?</p>

                <div>
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={onConfirm}>Delete</button>
                </div>
            </div>
        </div>
    )
}