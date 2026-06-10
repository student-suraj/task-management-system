import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:8080/api/v1/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <div>

      <h1>Dashboard</h1>

      {tasks.map((task) => (

        <div key={task.id}>

          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <p>{task.status}</p>

          <hr />

        </div>

      ))}

    </div>
  );
}

export default Dashboard;