import { useState } from "react";
import SuccessAlert from "@/components/AppComponents/SuccessAlert";

export const useAlerts = () => {
  const [render, setRender] = useState(false);

  const renderAlert = () => {
    setRender(true);
    setTimeout(() => {
      setRender(false);
    }, 6000);
  };

  return { render, renderAlert, SuccessAlert };
};
