
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  // Automatically redirect to splash screen when app loads
  useEffect(() => {
    navigate("/splash");
  }, [navigate]);

  return null; // No rendering needed as we're redirecting
};

export default Index;
