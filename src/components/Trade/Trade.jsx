import PlaceToGive from "./components/PlaceToGive/PlaceToGive"
import PlaceToGet from "./components/PlaceToGet/PlaceToGet"
import FunctionalPanel from "./components/FunctionalPanel/FunctionalPanel"

export default function Trade() {
    return (
        <div className="trade">
        <PlaceToGive />
        <FunctionalPanel />
        <PlaceToGet />
        </div>
    )
}