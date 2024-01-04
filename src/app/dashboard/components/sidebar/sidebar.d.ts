// The files with .d in the end are called declaration files.
// They are used to provide type information about existing JavaScript code.
// In this case, we are using it to provide type information about the sidebar component.

export interface SidebarItem {
  title: string,
  icon: string | null,
  link: string[] | null,
  children: ISidebar[] | null,
  hidden?: boolean
  // roles?: Role[]
}



