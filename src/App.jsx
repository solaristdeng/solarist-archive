import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import { AdminProvider } from './components/AdminMode';
import { regularPosts, posts } from './data/posts';
import './article.css';

// Lazy load route components for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const PostPage = lazy(() => import('./pages/PostPage'));
const ArchivePage = lazy(() => import('./pages/ArchivePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const CVPage = lazy(() => import('./pages/CVPage'));

// Loading fallback
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center font-mono text-sm">
    LOADING...
  </div>
);

const App = () => (
  <AdminProvider>
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage posts={regularPosts} />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="/post/:id" element={<PostPage posts={posts} />} />
          </Routes>
        </Suspense>
      </Layout>
    </HashRouter>
  </AdminProvider>
);

export default App;
