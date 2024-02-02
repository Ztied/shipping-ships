import { getHaulers, getShippingShips } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
    const itemClicked = clickEvent.target

    if (itemClicked.dataset.type === "hauler") {

        const haulerId = itemClicked.dataset.id

        let shipCounter = 0

        const shippingShips = getShippingShips()
        for (const ships of shippingShips) {
            if(parseInt(haulerId) === ships.haulersId) {
                shipCounter++
                }
            }
            window.alert(`This hauler is carrying ${shipCounter} shipping ships`)
        }
    } 
)

export const HaulerList = () => {
    const haulers = getHaulers()

    let haulerHTML = "<ul>"

    for (const haul of haulers) {
        haulerHTML += `<li data-id="${haul.id}"
        data-type="hauler">
        ${haul.name}
        </li>`
    }

    haulerHTML += "</ul>"

    return haulerHTML
}