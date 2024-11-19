import { usePottery } from "./PotteryCatalog.js"

const potteryPieces = usePottery()

console.log(potteryPieces)

export const potteryList = () => {
    let html = " "
    for (const potteryPiece of potteryPieces) {
       html += `<section class="pottery" id="pottery--1">
            <h2 class="pottery_shape">${potteryPiece.shape}</h2>
            <div class="pottery_properties">
            ${potteryPiece.shape} weighs ${potteryPiece.weight} pounds and is ${potteryPiece.height} inches tall.
            </div>
            <div class="pottery_price">
            Price is ${potteryPiece.price}
            </div>
        </section>`
    }
    return html
}