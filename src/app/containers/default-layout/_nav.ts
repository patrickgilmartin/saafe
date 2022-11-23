import { INavData } from '@coreui/angular-pro';

export const navItems: INavData[] = [
  {
    name: "Dashboard",
    url: '/',
    iconComponent: {
      name: 'cil-home'
    }
  },
  {
    name: "Alliance",
    url: '/alliance',
    iconComponent: {
      name: 'cil-institution'
    }
  },
  {
    name: "Characters",
    url: '/characters',
    iconComponent: {
      name: 'cil-user'
    }
  }
];
