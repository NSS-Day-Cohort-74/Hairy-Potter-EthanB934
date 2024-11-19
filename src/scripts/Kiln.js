export const firePottery = (potteryObj, temperature) => {
    potteryObj.fired = true
    if(temperature <= 2200) {
        potteryObj.cracked = false
    }
    if(temperature > 2200) {
        potteryObj.cracked = true
    }
    return potteryObj
}