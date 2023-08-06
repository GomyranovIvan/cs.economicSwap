import React from "react"
export default function PlaceToGive({ active }) {
    return (
        <>
            {active && (
            <div className="place-give__main">
                <p className="place-give__text-placeholder" >Добавьте предметы, которые хотите обменять</p>
            </div>
            )}
        </>
    )
}