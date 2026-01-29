import React from "react"
import { Stack } from "@mui/material"

const TopAgentCard = () => {
  return (
    <Stack className={"top-agent-card"}>
      <img src="/img/banner/agents.webp" alt="" />
      <strong>Makler</strong>
      <span>Agent</span>
    </Stack>
  )
}

export default TopAgentCard