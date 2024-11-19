const potteryPieces = []

export const toSellOrNotToSell = (potteryObject) => {
    if(potteryObject.weight >= 6) {
        potteryObject.price = 40
        }
    if(potteryObject.weight < 6) {
      potteryObject.price = 20  
    }
    if(potteryObject.cracked === false) {
        potteryPieces.push(potteryObject)
    }
}

export const usePottery = () => {
    return potteryPieces
}