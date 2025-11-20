import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import ArchivePage from './pages/ArchivePage';
import AboutPage from './pages/AboutPage';
import CVPage from './pages/CVPage';
import { regularPosts, posts } from './data/posts';
import './article.css';

const App = () => (
  <HashRouter>
    <ScrollToTop />
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage posts={regularPosts} />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/post/:id" element={<PostPage posts={posts} />} />
      </Routes>
    </Layout>
  </HashRouter>
);

export default App;
