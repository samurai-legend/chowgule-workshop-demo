import { NextAuthProvider } from "./NextAuthProvider";

type Props = {
  children?: React.ReactNode;
};

export const Providers: React.FC<Props> = ({ children }) => {
  return <NextAuthProvider>{children}</NextAuthProvider>;
};
