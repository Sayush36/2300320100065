import { useEffect, useState } from "react";
import api from "../api/axios";
import NotificationCard
from "../components/NotificationCard";
export default function PriorityNotifications() {

  const [priority,setPriority] = useState([]);

  useEffect(() => {
    loadPriority();
  }, []);

  const loadPriority = async () => {
     try {
      const response =
        await api.get(
          "/notifications?page=1&limit=10"
        );
       const filtered =
        response.data.filter(
          item => item.priority === true
        );

      setPriority(filtered);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {priority.map(item => (
        <NotificationCard
    
          notification={item}
          viewed={false}
          onOpen={() => {}}
        />
      ))}
    </>
  );
}