import { useEffect, useState } from "react";
import api from "../../../services/axios";
import SurveyBarVertical from "./SurveyBarVertical";

export default function HasilSurvei(props: any) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    api.get("/api_admin/surveyCart/chart_survey").then((res) => {
      console.log(res.data.data);
      setCart(res.data.data);
    });
  }, []);

  return <SurveyBarVertical api={cart} />;
}
