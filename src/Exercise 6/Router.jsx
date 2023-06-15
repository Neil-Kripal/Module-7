import { Route, Link, Routes } from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function Posts() {
  return <h2>Posts</h2>;
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function AppRouter() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default AppRouter;
