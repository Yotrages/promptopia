'use client';
import { useState, useEffect } from "react";
import PromptCard from './PromptCard';

const PromptCardList = ({ data = [], handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.length > 0 ? (
        <div>
          {data.map((post, index) => (
          <PromptCard
            key={index}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))}
        </div>
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/prompt');
        const data = response.json();
        setPosts(data || []); // Ensure posts is always an array
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]); // Set to empty array if there's an error
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer focus:outline-none"
        />
      </form>

      <PromptCardList 
        data={posts || []} 
        handleTagClick={() => {}} 
      />
    </section>
  );
};

export default Feed;
