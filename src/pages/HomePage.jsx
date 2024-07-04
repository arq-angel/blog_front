import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import BlogPost from "../components/BlogPost.jsx";
import {useState, useCallback} from "react";
import GetPosts from "../actions/GetPosts.jsx";
import Pagination from "../components/Pagination.jsx";

const HomePage = () => {
    const [data, setData] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const [posts, setPosts] = useState([]);
    const [meta, setMeta] = useState(null);
    const [links, setLinks] = useState([]);

    const handlePostsFetch = useCallback((data) => {
        setData(data);
        setIsSuccess(data.isSuccess);
        setPosts(data.posts);
        setMeta(data.meta);
        setLinks(data.links);
    }, []);

    const handlePageChange = (page) => {
        console.log('Page changed to:', page);
        // Implement your page change logic here, e.g., fetch new data
    };


    return (<div className="flex flex-wrap">
        {/* Blog Entries Column */}
        <div className="w-full md:w-2/3 lg:w-3/4 px-4">
            <GetPosts onPostsFetch={handlePostsFetch}/>
            {isSuccess ? (
                <ul>
                    {posts.map((post) => (
                        <BlogPost key={post.id} post={post} />
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}

            {(meta && links) ? (
                <Pagination meta={meta} links={links} onPageChange={handlePageChange}/>
            ) : (
                <p>No pagination data available.</p>
            )}

        </div>

        {/* Blog Sidebar Widgets Column */}
        <div className="w-full md:w-1/3 lg:w-1/4 px-4">
            {/* Blog Search Well */}
            <div className="mb-8 p-4 bg-gray-100 rounded">
                <h4 className="text-xl font-bold mb-4">Blog Search</h4>
                <div>
                    <form className="flex">
                        <input
                            type="text"
                            className="form-control p-2 flex-grow border border-gray-300 rounded-l"
                            //value={}
                            //onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="bg-gray-300 text-gray-600 px-4 py-2 rounded-r">
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>
                    </form>
                </div>
            </div>

            {/* Blog Categories Well */}
            {/*<Categories categories={categories}/>*/}

            {/* Side Widget Well */}
            {/*<SideWidget recentPosts={recentPosts}/>*/}

        </div>


    </div>);
}

export default HomePage;
