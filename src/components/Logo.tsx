import { Panda } from "lucide-react";

interface LogoProps {
  size?: number;
}

const Logo = ({ size = 40 }: LogoProps) => {
  return <Panda size={size} />;
};

export default Logo;
