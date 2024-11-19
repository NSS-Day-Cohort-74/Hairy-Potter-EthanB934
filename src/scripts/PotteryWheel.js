let id = 0

export const makePottery = (shape, weight, height) => {
    const potteryPiece = 
        {
            shape: shape,
            weight: weight,
            height: height,
            id: id++
        }
    
    return potteryPiece
}