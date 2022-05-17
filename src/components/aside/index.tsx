
import { Section } from "./style";

type Props = {
  page: string;
  setPage: (p: string) => void;
};

export const Aside: React.FC<Props> = props => {
  const { setPage, page } = props;
  const onClick = (p: string) => () => {
    setPage(p);
  };

  return (
    <Section>
      <a
        className={page === 'posts' ? 'active' : ''}
        onClick={onClick('posts')}
      >
        <i className="material-icons">menu</i>

      </a>
      <a
        className={page === 'notes' ? 'active' : ''}
        onClick={onClick('notes')}
      >
        <i className="material-icons">event_note</i>

      </a>
      <a
        className={page === 'users' ? 'active' : ''}
        onClick={onClick('users')}
      >
        <i className="material-icons">group</i>

      </a>
    </Section>
  );
};

