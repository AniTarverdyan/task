
import { Section } from "./style";
import shoppingListIcon from "../../Assets/icons/shopping-list.svg";
import dashboardInterface from "../../Assets/icons/dashboard-interface.svg";
import group from "../../Assets/icons/Group.svg"

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
      <div>
        <a href="/#"
          className={page === 'posts' ? 'active' : ''}
          onClick={onClick('posts')}
        >
          {'active' ? <span></span> : ''}
          <img src={dashboardInterface} />
        </a>
      </div>
      <div>
        <a href="/#"
          className={page === 'notes' ? 'active' : ''}
          onClick={onClick('notes')}
        >
          {'active' ? <span></span> : ''}
          <img src={shoppingListIcon} />
        </a>
      </div>
      <div>
        <a href="/#"
          className={page === 'users' ? 'active' : ''}
          onClick={onClick('users')}
        >
          {'active' ? <span></span> : ''}
          <img src={group} />
        </a>
      </div>
    </Section>
  );
};

