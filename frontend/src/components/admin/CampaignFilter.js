import { useSearchParams } from "react-router-dom";
import { Filter } from "lucide-react";

export const CampaignFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const current = searchParams.get("campaign") || "all";

  const handleChange = (e) => {
    const val = e.target.value;
    const nextParams = new URLSearchParams(searchParams);
    if (val === "all") {
      nextParams.delete("campaign");
    } else {
      nextParams.set("campaign", val);
    }
    setSearchParams(nextParams);
  };

  return (
    <div className="flex items-center gap-2">
      <Filter className="w-4 h-4 text-ink-3" />
      <select
        value={current}
        onChange={handleChange}
        className="bg-white border border-line rounded-lg text-sm font-medium text-ink px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue/20"
        data-testid="campaign-filter"
      >
        <option value="all">All Campaigns</option>
        <option value="diagnostic">Diagnostic Only</option>
        <option value="course">Course Only</option>
      </select>
    </div>
  );
};
