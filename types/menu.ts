export type Menu = {
  text: string;
  action: string;
  groups?: MenuGroup[];
  url?: string;
}

export type MenuGroup = {
  text: string;
  icon: string;
  color: string;
  url: string;
}