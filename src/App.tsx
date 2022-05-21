import React, { FC, useState } from 'react';
import { Aside } from './components/aside';
import Note from './pages/Notes';
import Users from './pages/Users';
import Container from './style/container';
import { Pages } from './const';
import HomePage from './pages/HomePage';

const App: FC = () => {
  const [page, setPage] = useState('posts');
  const [filter, setFilter] = useState('popular');

  const changePage = () => {
    switch (page) {
      case Pages.notes:
        return <Note />;
      case Pages.users:
        return <Users />;
      default:
        return <HomePage filter={filter} setFilter={setFilter}/>
    }
  }
  return (
    <Container>
      <Aside page={page} setPage={setPage} />
        {changePage()}
    </Container>
  );
}

export default App;




