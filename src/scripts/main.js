// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("cup", 3, 4)
let frame = makePottery("picture frame", 8, 10)
let necklace = makePottery("bead necklace", 2, 2)
let figurine = makePottery("portrait figure", 8, 20)
let broom = makePottery("replica", 6, 9)

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2200)
let firedFrame = firePottery(frame, 2187)
let firedNecklace = firePottery(necklace, 3000)
let firedFigurine = firePottery(figurine, 5678)
let firedBroom = firePottery(broom, 2024)
// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedFrame)
toSellOrNotToSell(firedNecklace)
toSellOrNotToSell(firedFigurine)
toSellOrNotToSell(firedBroom)
// Invoke the component function that renders the HTML list

