import RecruitmentStatsData from "../data/recruitment_stats.json";

export default function RecruitmentStats() {
  // import data from file here
  const participant_number =
    RecruitmentStatsData.current_number_of_participants;
  const edinburgh_participants = RecruitmentStatsData.edinburgh_participants;
  const glasgow_participants = RecruitmentStatsData.glasgow_participants;
  const dundee_participants = RecruitmentStatsData.dundee_participants;
  // end data import

  const participant_percent =
    RecruitmentStatsData.current_number_of_participants / 206;
  const formatted_participant_percent =
    parseFloat(participant_percent * 100).toFixed(2) + "%";
  const last_updated = RecruitmentStatsData.last_updated;

  const base_width = 30; // use this number to adjust the width of center breakdown bars

  const edinburgh_percent =
    parseFloat((edinburgh_participants / base_width) * 100).toFixed(2) + "%";
  const glasgow_percent =
    parseFloat((glasgow_participants / base_width) * 100).toFixed(2) + "%";
  const dundee_percent =
    parseFloat((dundee_participants / base_width) * 100).toFixed(2) + "%";

  return (
    <div className="bg-white border p-6 rounded-lg  mb-4">
      <h3 className="text-xl mb-2">Marvel Recruitment Status</h3>

      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-gradient-to-r from-emerald-500 to-green-700 h-2.5 rounded-full"
          style={{ width: formatted_participant_percent }}
        ></div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div>{participant_number} / 206 participants</div>
        <div className="text-sm italic">Last updated: {last_updated}</div>
      </div>
      <div className="mt-4">
        <h4 className="text-lg mb-2">Center Breakdown</h4>

        <div className="grid grid-cols-6 items-center">
          <div className="col-span-2 text-sm">Edinburgh</div>
          <div className="col-span-3">
            <div className="w-full bg-white rounded-full h-2">
              <div
                className="bg-green-700 h-2 rounded-full"
                style={{ width: edinburgh_percent }}
              ></div>
            </div>
          </div>
          <div className="col-span-1 text-sm">{edinburgh_participants}</div>
        </div>

        <div className="grid grid-cols-6 items-center">
          <div className="col-span-2 text-sm">Glasgow</div>
          <div className="col-span-3">
            <div className="w-full bg-white rounded-full h-2">
              <div
                className="bg-green-700 h-2 rounded-full"
                style={{ width: glasgow_percent }}
              ></div>
            </div>
          </div>
          <div className="col-span-1 text-sm">{glasgow_participants}</div>
        </div>

        <div className="grid grid-cols-6 items-center">
          <div className="col-span-2 text-sm">Dundee</div>
          <div className="col-span-3">
            <div className="w-full bg-white rounded-full h-2">
              <div
                className="bg-green-700 h-2 rounded-full"
                style={{ width: dundee_percent }}
              ></div>
            </div>
          </div>
          <div className="col-span-1 text-sm">{dundee_participants}</div>
        </div>

      </div>
    </div>
  );
}
