export const firePottery = (potteryObj, temperature) => {
    return {
        ...potteryObj,
            fired: true,
            cracked: firedResult(temperature)
    }
}

const firedResult = (temperature) => {
    if(temperature <= 2200) {
        return false
    }
    if(temperature >= 2200) {
        return true
    }
}