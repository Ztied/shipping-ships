import { getShippingShips, getHaulers } from "./database.js"


export const ShippingList = () => {
    const shippers = getShippingShips()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        
        const haulersId = itemClicked.dataset.haulerForeignKey

        // let haulingShip = { name: ""}

        const hauler = getShippingShips() 
        for(const haul of hauler) {
            if(haul.id === parseInt(haulersId)){
                window.alert(` is being hauled by ${haul.name}`)
            }
            
        }
    }
)

    let shippersHTML = "<ul>"

    for (const ship of shippers) {
        shippersHTML += `<li data-haulerForeignKey=${ship.haulersId}>${ship.name}</li>`
    }

    shippersHTML += "</ul>"

    return shippersHTML
}