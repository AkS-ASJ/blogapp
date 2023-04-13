const dummy = () => {
    return 1;
}

const totalLikes = array => {
    const reducer = (sum, item) => {
        return sum + item
    }

    return array.length === 0
        ? 0 : array.reduce(reducer, 0)
}

const favoriteBlog = (array, array2) => {
    const result = Math.max(...array)
    const result2 = array2.find(item => item.likes === result)

    return result2
}

module.exports = {
    dummy, totalLikes, favoriteBlog
}