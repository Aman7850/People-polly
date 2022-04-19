import * as React from 'react';
import { Drawer } from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const DrawerRoutes = () => {
    const navigation = useNavigation();
    const [active, setActive] = React.useState(true);
    return (
        <Drawer.Section >
      <Drawer.Item
        label="Setting"
        active={active === 'SettingScreen'}
        onPress={() => navigation.navigate('SettingScreen')}
      />
      <Drawer.Item
        label="Bookmark"
        active={active === 'BookmarkScreen'}
        onPress={() => navigation.navigate('BookmarkScreen')}
      />
      <Drawer.Item
        label="Support"
        active={active === 'SupportScreen'}
        onPress={() => navigation.navigate('SupportScreen')}
      />
      <Drawer.Item
        label="Bookmark"
        active={active === 'BookmarkScreen'}
        onPress={() => navigation.navigate('BookmarkScreen')}
      />
    </Drawer.Section>
  );
};

export default DrawerRoutes;
