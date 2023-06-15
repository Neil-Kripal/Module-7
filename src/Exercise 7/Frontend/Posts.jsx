import { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

const postTitles = [
  "First Post",
  "Second Post",
  "Third Post",
  "Fourth Post",
  "Fifth Post"
];

function Posts() {
  const [posts, setPosts] = useState(postTitles);
  const [newPostTitle, setNewPostTitle] = useState('');

  const addPost = () => {
    if (newPostTitle) {
      setPosts([...posts, newPostTitle]);
      setNewPostTitle('');
    }
  };

  const clearPosts = () => {
    setPosts([]);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" align="center" gutterBottom>
        Posts
      </Typography>

      <TextField
        label="New Post"
        value={newPostTitle}
        onChange={(e) => setNewPostTitle(e.target.value)}
        fullWidth
        margin="normal"
      />

      <Button variant="contained" onClick={addPost} disabled={!newPostTitle}>
        Add Post
      </Button>

      {posts.length > 0 ? (
        <List>
          {posts.map((post, index) => (
            <ListItem key={index}>
              <ListItemText primary={post} />
            </ListItem>
          ))}
          <Button variant="contained" onClick={clearPosts}>
            Clear Posts
          </Button>
        </List>
      ) : (
        <Typography variant="body1" align="center">
          No posts available.
        </Typography>
      )}
    </Container>
  );
}

export default Posts;
