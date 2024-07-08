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

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://bug-tracker-server.up.railway.app/bug"
      );
      console.log("response is", response);

      setBugs(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const createBug = async () => {
    try {
      const response = await axios.post("https://bug-tracker-server.up.railway.app/bug/create", {
        title: "TEST WITH KELLY",
        description: "1234 test",
        priority: "MEDIUM",
      });
      console.log("response is", response);
    } catch (e) {
      console.error("Err is", e);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div>
        <button onClick={() => createBug()}>Create Bug</button>
      <table style={{ width: "100%" }}>
        <tr>
          <th style={{ width: "105px" }}>Bug ID</th>
          <th style={{ width: "175px" }}>Title</th>
          <th style={{ width: "250px" }}>Description</th>
        </tr>
      </table>
      {bugs.map((bug) => {
        return (
          <tr key={bug.id}>
            <td style={{ width: "105px" }}>{bug.id}</td>
            <td style={{ width: "175px" }}>{bug.title}</td>
            <td style={{ width: "250px" }}>{bug.description}</td>
          </tr>
        );
      })}
    </div>
  );
};
