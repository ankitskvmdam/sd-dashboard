export const objectToArray = obj => {
    const arr = []
    for (const [_, value] of Object.entries(obj)) {
        console.log(value)
        arr.push(value)
    }

    return arr
}

export const stringToArray = str => {
    str = str.replace("[", "")
    str = str.replace("]", "")

    return str.split(",")
}