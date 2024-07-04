import ApiRequest from "../api/ApiRequest.jsx";

const GetPosts = ({onPostsFetch}) => {
    return (
        <ApiRequest
            method="GET"
            fetchUrl="homepage/posts"
            onDataFetch={onPostsFetch}
        />
    );
}

export default GetPosts;
