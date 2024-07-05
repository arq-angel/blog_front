const LogQueryParams = ({page = null, limit = null, searchQuery = null }) => {
    if (page) {
        console.log("page: ", page)
    }
    if (limit) {
        console.log("limit: ", limit)
    }
    if (searchQuery) {
        console.log("searchQuery: ", searchQuery)
    }
}

export default LogQueryParams;
