import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Container from '@/common/components/Container';
import Header from '@/common/components/Header';
import Loader from '@/common/components/Loader';

import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage/SearchPage';

const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const DetailsPage = lazy(() => import('./pages/DetailsPage/DetailsPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));
const HomePage = lazy(() => import('./pages/HomePage'));

const App = () => (
  <Container>
    <Header />
    <main>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>
          }
        >
          <Route path='categories/:category' element={<CategoryPage />} />
          <Route path='search/:searchTerm' element={<SearchPage />} />
        </Route>
        <Route
          path='/favorites'
          element={
            <Suspense fallback={<Loader />}>
              <FavoritesPage />
            </Suspense>
          }
        />
        <Route
          path='/recipe/:recipeId'
          element={
            <Suspense fallback={<Loader />}>
              <DetailsPage />
            </Suspense>
          }
        />
        <Route
          path='*'
          element={
            <Suspense fallback={<Loader />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </main>
  </Container>
);

export default App;
