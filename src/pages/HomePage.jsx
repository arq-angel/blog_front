import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import BlogPost from "../components/BlogPost.jsx";
import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import getPosts from "../actions/GetPosts.jsx";
import Pagination from "../components/Pagination.jsx";
import LogResponse from "../helpers/LogResponse.jsx";
import LogQueryParams from "../helpers/LogQueryParams.jsx";
import {defaultPage, defaultLimit, defaultSearchQuery} from "../config/constants.jsx";

const HomePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [debug, setDebug] = useState(null);
    const [posts, setPosts] = useState([]);
    const [meta, setMeta] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(parseInt(searchParams.get('page')) || defaultPage);
    const [limit, setLimit] = useState(parseInt(searchParams.get('limit')) || defaultLimit);
    const [searchQuery, setSearchQuery] = useState(searchParams.get('searchQuery') || defaultSearchQuery);

    const fetchPosts = useCallback(async () => {
        setLoading(true);
        try {
            const data = await getPosts(page, limit, searchQuery);
            setIsSuccess(data.isSuccess);
            setMessage(data.message);
            setError(data.error);
            setDebug(data.Debug);
            setPosts(data.posts);
            setMeta(data.meta);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [page, limit, searchQuery]);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
        searchParams.set('page', newPage);
        setSearchParams(searchParams);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setPage(1);
        searchParams.set('page', 1);
        searchParams.set('searchQuery', searchQuery);
        setSearchParams(searchParams);
        fetchPosts();
    };

    return (
        <div className="flex flex-wrap">
            {/* Blog Entries Column */}
            <div className="w-full md:w-2/3 lg:w-3/4 px-4">
                {loading ? <h1>Loading blogs...</h1> : ''}
                <LogResponse message={message} error={error} debug={debug} />
                <LogQueryParams page={page} limit={limit} searchQuery={searchQuery} />
                {isSuccess ? (
                    <ul>
                        {posts.map((post) => (
                            <BlogPost key={post.id} post={post} />
                        ))}
                    </ul>
                ) : (
                    <p>No posts available!</p>
                )}
                {meta && meta.total > limit && (
                    <Pagination meta={meta} onPageChange={handlePageChange} />
                )}
            </div>

            {/* Blog Sidebar Widgets Column */}
            <div className="w-full md:w-1/3 lg:w-1/4 px-4">
                {/* Blog Search Well */}
                <div className="mb-8 p-4 bg-gray-100 rounded">
                    <h4 className="text-xl font-bold mb-4">Blog Search</h4>
                    <div>
                        <form className="flex" onSubmit={handleSearch}>
                            <input
                                type="text"
                                className="form-control p-2 flex-grow border border-gray-300 rounded-l"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button type="submit" className="bg-gray-300 text-gray-600 px-4 py-2 rounded-r">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Blog Categories Well */}
                {/*<Categories categories={categories}/>*/}

                {/* Side Widget Well */}
                {/*<SideWidget recentPosts={recentPosts}/>*/}
            </div>
        </div>
    );
};

export default HomePage;
