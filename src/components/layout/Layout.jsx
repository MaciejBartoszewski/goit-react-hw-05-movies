import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from 'components/Components.module.css';

export const Layout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <ul className={css.list}>
          <NavLink className={css.item} to="/">
            <li className={css.active}>Home</li>
          </NavLink>
          <NavLink className={css.item} to="/movies">
            <li className={css.active}>Movies</li>
          </NavLink>
        </ul>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};