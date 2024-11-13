import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";

export default function App() {
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 3000);
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      {isActive && <Spinner />}
    </div>
  );
}
