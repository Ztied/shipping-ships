import { getShippingShips, getHaulers } from "./database.js"


export const ShippingList = () => {
    const shippers = getShippingShips()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        
        const shipperId = itemClicked.dataset.id

        let ships = ""

        const shipper = getShippingShips() 
        for(const ship of shipper) {
            if(ship.id === parseInt(shipperId)){
                ships = ship.name
            }
            
        }
        const haulersId = itemClicked.dataset.haulerforeignkey
        
        const hauler = getHaulers() 

        let hauls = ""

        for(const haul of hauler) {
            if(haul.id === parseInt(haulersId)){
                hauls = haul.name
            }
        } 
        window.alert(`${ships} is being hauled by ${hauls}`)
    }
)

    let shippersHTML = "<ul>"

    for (const ship of shippers) {
        shippersHTML += `<li    data-id=${ship.id} data-haulerForeignKey=${ship.haulersId}>${ship.name}</li>`
    }

    shippersHTML += "</ul>"

    return shippersHTML
}