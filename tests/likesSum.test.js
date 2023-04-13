
const listHelper = require('../utils/list_helper')
describe('total likes', () => {
    const listWithOneBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        }
    ]

    const likesOnly = listWithOneBlog.map(each => each.likes)

    test('when list has only one blog, equals the likes of that', () => {
        const result = listHelper.totalLikes(likesOnly)
        expect(result).toBe(5)
    })


   test('of empty list is 0', () => {
       const e = listHelper.totalLikes([])
        expect(e).toBe(0)
    })
})