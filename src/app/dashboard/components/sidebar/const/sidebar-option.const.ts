import {SidebarItem} from "../sidebar";


export const sidebarOptions: SidebarItem[] = [
  {
    title: 'Cursos',
    icon: 'description',
    link: ['courses'],
    children: null
  },
  {
    title: 'Usuarios',
    icon: 'group',
    link: ['/dashboard/users'],
    children: null
  }
]
