import { useEffect, useState } from "react";
import api from "../api/axios";

import NotificationCard from "../components/NotificationCard";
import NotificationFilters from "../components/NotificationFilters";

export default function AllNotifications() {

  const [notifications, setNotifications] =useState([]);

  const [type, setType] =useState("");

  useEffect(() => {
    loadNotifications();
  }, [type]);

  const loadNotifications = async () => {
   try {
    const res = await api.get("/notifications?page=1&limit=10");
    console.log("Success:", res.data);
    setNotifications(res.data.notifications);
  } catch (err) {
    console.log("Status:", err.response?.status);
    console.log("Data:", err.response?.data);
    console.log("Headers:", err.response?.headers);
  }
  };

  const markViewed = (id) => {

    let viewed =
      JSON.parse(
        localStorage.getItem("viewed")
      ) || [];

    if (!viewed.includes(id)) {
      viewed.push(id);

      localStorage.setItem(
        "viewed",
        JSON.stringify(viewed)
      );
    }

    loadNotifications();
  };

  return (
    <div>

      <NotificationFilters
        type={type}
        setType={setType}
      />

      <br />

      {notifications.map((item) => {

        const viewed =
          JSON.parse(
            localStorage.getItem("viewed")
          ) || [];

        return (
          <NotificationCard
            key={item.id}
            notification={item}
            viewed={viewed.includes(item.id)}
            onOpen={() =>
              markViewed(item.id)
            }
          />
        );
      })}
    </div>
  );
}