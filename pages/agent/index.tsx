import withLayoutBasic from "@/libs/components/layout/LayoutBasic";

import { Stack } from "@mui/material";
import { NextPage } from "next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AgentList: NextPage = () => {


  return (
    <div style={{ margin: "20px 0" }}>
      <Stack >AGENTS LIST</Stack>
    </div>
  );

};

export default withLayoutBasic(AgentList);
