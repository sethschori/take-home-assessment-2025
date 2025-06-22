import { DEADLINES_API } from "./constants";
import { getApi } from "./utilities";
import VoterDeadlines from "./components/VoterDeadlines";

async function Page() {
  return (
    <main>
      <h1>
        Voter Registration Deadlines
      </h1>
      <VoterDeadlines
        deadlines={await getApi(DEADLINES_API)}
      />
    </main>
  );
}

export default Page;
