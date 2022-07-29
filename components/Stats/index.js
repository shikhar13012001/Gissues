import { Container } from "@mui/material"; 
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.config";
import Loading from "../Loading"
const Stats = () => {
 const [user,loading]=useAuthState(auth);
 if (loading) return <Loading />;
  return (
    <Container>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://metrics.lecoq.io/${user.reloadUserInfo.screenName}?template=classic&followup=1&habits=1&achievements=1&lines=1&activity=1&stargazers=1&base.indepth=false&base.hireable=false&habits.from=200&habits.days=14&habits.facts=true&habits.charts=false&habits.charts.type=classic&habits.trim=false&habits.languages.limit=8&followup.sections=repositories&followup.indepth=false&followup.archived=true&stargazers.charts.type=classic&activity.limit=5&activity.load=300&activity.days=14&activity.visibility=all&activity.timestamps=false&activity.filter=all&achievements.threshold=C&achievements.secrets=true&achievements.display=detailed&achievements.limit=0&config.timezone=Asia%2FCalcutta)?template=classic&followup=1&habits=1&achievements=1&lines=1&activity=1&stargazers=1&isocalendar=1&base.indepth=false&base.hireable=false&isocalendar.duration=half-year&habits.from=200&habits.days=14&habits.facts=true&habits.charts=false&habits.charts.type=classic&habits.trim=false&habits.languages.limit=8&followup.sections=repositories&followup.indepth=false&followup.archived=true&stargazers.charts.type=classic&activity.limit=5&activity.load=300&activity.days=14&activity.visibility=all&activity.timestamps=false&activity.filter=all&achievements.threshold=C&achievements.secrets=true&achievements.display=detailed&achievements.limit=0&config.timezone=Asia%2FCalcutta`}
        alt="Stats"
      />
    </Container>
  );
};

export default Stats;
