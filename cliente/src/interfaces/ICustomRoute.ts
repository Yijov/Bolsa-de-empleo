export default interface ICustomRoute {
  component: React.FC;
  exact: boolean;
  path: string;
}
