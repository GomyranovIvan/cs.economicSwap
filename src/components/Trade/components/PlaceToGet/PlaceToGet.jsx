import React from "react"
export default function PlaceToGet({ active }) {
    return (
        <>
            {active && (
            <div className="place-get__main">
                <p className="place-get__text-placeholder">Добавьте предметы, которые хотите обменять</p>
            </div>
            )}
        </>
    )
}