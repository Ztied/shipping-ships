const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],

    haulers: [
        { id: 1, name: "Pioneering Spirit", docksId: 3 },
        { id: 2, name: "Boaty McBoatFace", docksId: 1},
        { id: 3, name: "Seawise Giant", docksId: 4},
        { id: 4, name: "Cargo Wargo", docksId: 2}
    ],

    shippingShips: [
        { id: 1, name: "Esso Atlantic", haulersId: 4},
        { id: 2, name: "Prairial", haulersId: 3},
        { id: 3, name: "Palaris Royal", haulersId: 2},
        { id: 4, name: "Rivoli", haulersId: 1},
        { id: 5, name: "Champs Elysee", haulersId: 2},
        { id: 6, name: "Ever Ace", haulersId: 4},
        { id: 7, name: "Nissei Maru", haulersId: 3},
        { id: 8, name: "MSC Gulsun", haulersId: 1},
        { id: 9, name: "HMM Rotterdam", haulersId: 1},
        { id: 10, name: "CMA CGM Trocadero", haulersId: 3}
    ]
}


export const getDocks = () => {
    return database.docks.map(docks => ({...docks}))
}

export const getHaulers = () => {
    return database.haulers.map(haulers => ({...haulers}))
}

export const getShippingShips = () => {
    return database.shippingShips.map(shippingShips => ({...shippingShips}))
}