import { Route, Routes } from 'react-router-dom';

import Container from '@/common/components/Container';
import Header from '@/common/components/Header';

import CategoryPage from './pages/CategoryPage';
import DetailsPage from './pages/DetailsPage';
import FavoritesPage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import SearchPage from './pages/SearchPage';

const App = () => (
  <Container>
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route path='categories/:category' element={<CategoryPage />} />
          <Route path='search/:searchTerm' element={<SearchPage />} />
        </Route>
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/recipe/:recipeId' element={<DetailsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </main>
  </Container>
);

export default App;
