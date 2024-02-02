import { DockList } from "./docklist.js"
import { HaulerList } from "./haulers.js"
import { ShippingList } from "./shipping.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping ship ships</h1>
<article class="details">
    <section class="detail--column list details__ships">
        <h2>Docks</h2>
        ${DockList()}
    </section>
    <section class="detail--column list details__ships">
        <h2>Haulers</h2>
        ${HaulerList()}
    </section>
    <section class="detail--column list details__ships">
        <h2>Shipping</h2>
        ${ShippingList()}
    </section>
</article>

<article class="assignments">
    <h2>Current Assignments</h2>
    
</article>
`

mainContainer.innerHTML = applicationHTML