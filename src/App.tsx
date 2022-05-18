import React, { useState } from 'react';
import { Aside } from './components/aside';
import Note from './components/aside/components/notes';
import Users from './components/aside/components/users';
import { Header } from './components/header';
import Container from './container';

const App: React.FC = () => {
  const [page, setPage] = useState('posts');
  const [filter, setFilter] = useState('popular');

  const changePage = page === 'notes' ? <Note /> : page === 'users';

  return (
    <Container>
      <Aside page={page} setPage={setPage} />
      <div>
        {changePage ? <Users /> : <Header filter={filter} setFilter={setFilter} />}
      </div>
    </Container>
  );
}

export default App;




