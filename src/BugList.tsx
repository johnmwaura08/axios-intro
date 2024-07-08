import axios from "axios";
import React from "react";

interface IBug {
  id: number;
  title: string;
  description: string;
  priority: string;
  createdAt: string;
  updatedAt: string;
  userId: number | null;
}

export const BugList = () => {
  const [bugs, setBugs] = React.useState<IBug[]>([]);

  console.log("bugs", bugs);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://bug-tracker-server.up.railway.app/bug"
      );

      setBugs(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {bugs.map((bug) => {
        return (
          <div key={bug.id}>
            <h1>{bug.title}</h1>
            <h1>{bug.description}</h1>
          </div>
        );
      })}
    </div>
  );
};
