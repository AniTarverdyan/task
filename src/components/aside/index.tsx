
import shoppingListIcon from "../../Assets/icons/shopping-list.svg";
import dashboardInterface from "../../Assets/icons/dashboard-interface.svg";
import group from "../../Assets/icons/Group.svg"
import { Styled } from "./style";
import { FC } from "react";
import { Pages } from "../../const";

interface IPage {
  page: string;
  setPage: (p: string) => void;
};

export const Aside: FC<IPage> = props => {
  const { setPage, page } = props;
  const onClick = (p: string) => () => {
    setPage(p);
  };

  return (
    <Styled.Section>
        <div
          className={page === Pages.posts ? Pages.active : ''}
          onClick={onClick('posts')}
        >
          <Styled.Icons src={dashboardInterface} />
        </div>
        <div
          className={page === Pages.notes ? Pages.active : ''}
          onClick={onClick('notes')}
        >
          <Styled.Icons src={shoppingListIcon} />
        </div>
        <div
          className={page === Pages.users ? Pages.active : ''}
          onClick={onClick('users')}
        >
          <Styled.Icons src={group} />
        </div>
    </Styled.Section>
  );
};

