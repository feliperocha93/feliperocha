export interface CareerItemProps {
  title: string;
  text: string;
  stack: string[];
  startedIn: [number, number]; //(yyyy, MM - 1)
  endedIn?: [number, number];
}
