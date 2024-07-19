import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

function Home() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";
  async function fetchProductData() {
    setLoading(true);
    try {
      const result = await fetch(API_URL);
      const data = await result.json();
      setPosts(data);
    } catch (error) {
      console.log("Error in api call");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <div className="flex justify-center items-center">
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-4 max-w-5xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {posts.map((post) => {
            return <Product key={post.id} post={post} />;
          })}
        </div>
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
}

export default Home;
