import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Welcome {user || "Back"}!</h1>
        <p className="text-slate-600 mb-6">
          You're logged in successfully. Start exploring your courses or continue where you left off.
        </p>

        <div className="flex flex-col gap-4">
          <Link to="/courses">
            <Button className="w-full">Go to My Courses</Button>
          </Link>
          <Link to="/logout">
            <Button variant="outline" className="w-full">Logout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
