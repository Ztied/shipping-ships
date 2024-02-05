import { getDocks, getHaulers } from "./database.js"


export const DockList = () => {
    const docks = getDocks()
    const haulers = getHaulers()
    document.addEventListener (
        "click",
        (clickEvent) => {
            const itemClicked = clickEvent.target

            const dockId = itemClicked.dataset.id

            let dock = ""

            const allDocks = getDocks()
            for(const docks of allDocks) {
                if(docks.id === parseInt(dockId)) {
                    dock = docks.location
                }
            }

            const haulersId = itemClicked.dataset.haulid

            const hauler = getHaulers()

            let hauls = ""

            for(const haul of hauler) {
                if(haul.id === parseInt(haulersId)) {
                    hauls = haul.name
                }
            }
            window.alert(`The ${dock} is currently unloading ${hauls}`)
        }
    )
    
    
    let docksHTML = "<ul>"
        let hauls = []
    for (const dock of docks) {
       for(const haul of haulers){
             hauls = haul.id
        }
    
    docksHTML += `<li data-id=${dock.id} data-haulId=${hauls}>${dock.location} can hold ${dock.volume} million tons of cargo</li>`
        
    }

    docksHTML += "</ul>"

    return docksHTML
}

// for (const dock of docks) {
        
// }
// for(const haul of haulers){
//     hauls = haul.id
// } 

// docksHTML += `<li data-id=${dock.id} data-haulId=${hauls}>${dock.location} can hold ${dock.volume} million tons of cargo</li>`