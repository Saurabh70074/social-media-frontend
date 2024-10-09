'use client';

import { useEffect, useState } from 'react';
import { fetchFeed, createPost } from '../../services/api';
import styles from '../styles/Feed.module.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');

  const loadFeed = async () => {
    const response = await fetchFeed();
    setPosts(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(content);
    setContent('');
    loadFeed();
  };

  useEffect(() => {
    loadFeed();
  }, []);

  return (
    <div className={styles.feedContainer}>
      <form className={styles.postForm} onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          required
        />
        <button className={styles.submitButton} type="submit">Post</button>
      </form>
      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <div className={styles.post} key={post._id}>
            <h4 className={styles.username}>{post.user.username}</h4>
            <p className={styles.content}>{post.content}</p>
            {/* Add comments and likes functionality here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
