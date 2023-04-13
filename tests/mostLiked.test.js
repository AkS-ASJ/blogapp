const listHelper = require("../utils/list_helper");
const helper = require('./test_helper')
const _ = require('lodash')


describe('most liked', () => {
    test('return most liked blog', () => {
        const blogs = helper.initialBlogs
        const likesOnly = blogs.map(each => each.likes)

        const result = listHelper.favoriteBlog(likesOnly, blogs)
        expect(result).toEqual(blogs[1])
    })

    test('return name of author with most blogs', () => {
        const blogs = helper.initialBlogs
        const authorList = blogs.map(each => each.author)

        const result = _.head(_(authorList)
            .countBy()
            .entries()
            .maxBy(_.last));

        const result2 = _.entries(_.countBy(authorList))
            .map(([author, blogs]) => ({ author, blogs }))
            .sort((e, f) => f.blogs - e.blogs);


        expect(result).toEqual(blogs[2].author)
        expect(result2[0]).toEqual({
            author: "Robert C. Martin",
            blogs: 2
        })
    })

    test('most liked author', () => {
        const blogs = helper.initialBlogs
        const getMostLikes = (blogs) => blogs
            .reduce(({sums,most}, {likes, author}) => {
                sums[author] = likes = (sums[author] || 0) + likes;
                if (likes > most.likes) most = {author,likes};
                return {sums,most};
            }, {sums: {}, most: {likes:0} })
            .most

        const result = getMostLikes(blogs)

        expect(result).toEqual({
            author: "Robert C. Martin",
            likes: 20
        })
    })
})