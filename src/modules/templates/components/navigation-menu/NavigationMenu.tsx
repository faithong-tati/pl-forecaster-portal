import { List } from '@mui/material';
import { memo } from 'react';

import ListItem from '@/core/components/list-item';
import useSidebar from '@/modules/templates/hooks/use-side-bar';

import { Styles } from './styles';

function NavigationMenu() {
  const { state, items } = useSidebar();

  return (
    <List sx={Styles.list}>
      {items.map((item) => (
        <ListItem
          key={item.label}
          isActive={item.isActive}
          open={state.isOpenSideBar}
          label={item.label}
          icon={item.icon}
          onClick={item.onClick}
        />
      ))}
    </List>
  );
}

export default memo(NavigationMenu);
