import apiRequest from "../api/ApiRequest.jsx";
import { defaultLimit, defaultPage, defaultSearchQuery } from "../config/constants.jsx";

const getPosts = async (page = defaultPage, limit = defaultLimit, searchQuery = defaultSearchQuery) => {
    const fetchUrl = `homepage/posts?page=${page}&limit=${limit}&searchQuery=${searchQuery}`;

    try {
        const data = await apiRequest({ method: "GET", fetchUrl });
        return {
            isSuccess: true,
            message: 'Posts fetched successfully',
            posts: data.posts,
            meta: data.meta,
            queryParams: { page, limit, searchQuery }
        };
    } catch (error) {
        console.error('Error fetching posts:', error);
        return {
            isSuccess: false,
            message: 'Failed to fetch posts',
            error: error.message,
            posts: [],
            meta: null,
            queryParams: { page, limit, searchQuery }
        };
    }
};

export default getPosts;
