export const generateNavItems = (pathname: string, loggedIn: boolean) => {
  const navItems: {
    title: string;
    iconName: string;
    href: string;
    isActiveRegExp?: RegExp;
    active?: boolean;
    show: boolean;
  }[] = [
    {
      title: 'Feed',
      iconName: 'megaphone',
      href: '/',
      show: true,
    },
    {
      title: 'Chats',
      iconName: 'chat-1',
      href: '/chats',
      show: false, //loggedIn
    },
    {
      title: 'Apps',
      iconName: 'apps',
      href: '/apps',
      isActiveRegExp: /apps\/*/,
      show: loggedIn,
    },
    {
      title: 'Profile',
      iconName: 'user',
      href: '/profile',
      show: loggedIn,
    },
    {
      title: 'Login',
      iconName: 'login-box',
      href: '/login',
      isActiveRegExp: /login|signup/,
      show: !loggedIn,
    },
  ];

  for (const navItem of navItems) {
    if (
      navItem.href === pathname ||
      (navItem.isActiveRegExp != null && navItem.isActiveRegExp.test(pathname))
    ) {
      navItem.active = true;
    }
  }

  return navItems;
};
