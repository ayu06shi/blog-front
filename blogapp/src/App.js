import { useContext, useEffect } from 'react';
import './App.css';
// import Blogs from './components/Blogs';
// import Header from './components/Header';
// import Pagination from './components/Pagination';
import { AppContext } from './context/AppContext';
import {Routes, Route, useSearchParams, useLocation} from 'react-router-dom';
import Home from './components/Home';
import BlogPage from './components/BlogPage';
import TagPage from './components/TagPage';
import CategoryPage from './components/CategoryPage';
function App() {
  const {fetchBlogPosts}  = useContext(AppContext)

  const [searchParams] = useSearchParams();
  const location = useLocation(); //access current location

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")) {
      // shows tag wale page
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), tag)
    }
    else if(location.pathname.includes("categories")) {
      // shows tag wale page
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, category)
    }
    else{
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search])

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:blogId' element={<BlogPage/>}/>
      <Route path='/tags/:tag' element={<TagPage/>}/>
      <Route path='/categories/:category' element={<CategoryPage/>}/>
    </Routes>
    
  );
}

export default App;
