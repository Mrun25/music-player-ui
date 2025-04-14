
import { useNavigate } from "react-router-dom";

interface GenreCardProps {
  name: string;
  color: string;
  icon?: React.ReactNode;
  path?: string;
}

export const GenreCard = ({ name, color, icon, path = "#" }: GenreCardProps) => {
  const navigate = useNavigate();

  return (
    <div 
      className="rounded-2xl overflow-hidden cursor-pointer animate-bounce-soft hover-scale"
      onClick={() => navigate(path)}
      style={{ backgroundColor: color }}
    >
      <div className="h-full w-full p-6 flex flex-col items-center justify-center">
        {icon && <div className="mb-4">{icon}</div>}
        <h3 className="text-white font-bold text-lg">{name}</h3>
      </div>
    </div>
  );
};
