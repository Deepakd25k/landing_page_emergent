import { useSearchParams } from "react-router-dom";
import { Calendar } from "lucide-react";

export const DateFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const start = searchParams.get("start") || "";
  const end = searchParams.get("end") || "";

  const handleStartChange = (e) => {
    const val = e.target.value;
    setSearchParams((prev) => {
      if (val) prev.set("start", val);
      else prev.delete("start");
      return prev;
    }, { replace: true });
  };

  const handleEndChange = (e) => {
    const val = e.target.value;
    setSearchParams((prev) => {
      if (val) prev.set("end", val);
      else prev.delete("end");
      return prev;
    }, { replace: true });
  };

  const clearFilters = () => {
    setSearchParams((prev) => {
      prev.delete("start");
      prev.delete("end");
      return prev;
    }, { replace: true });
  };

  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="flex items-center gap-2 bg-white border border-line rounded-lg px-3 py-1.5 shadow-sm">
        <Calendar className="w-4 h-4 text-ink-3" />
        <div className="flex items-center gap-2">
          <input
            type="date"
            value={start}
            onChange={handleStartChange}
            className="bg-transparent border-none focus:outline-none text-ink text-xs font-mono w-28"
          />
          <span className="text-ink-3 text-xs">to</span>
          <input
            type="date"
            value={end}
            onChange={handleEndChange}
            className="bg-transparent border-none focus:outline-none text-ink text-xs font-mono w-28"
          />
        </div>
      </div>
      {(start || end) && (
        <button
          onClick={clearFilters}
          className="text-xs font-medium text-ink-3 hover:text-ink transition-colors"
        >
          Clear
        </button>
      )}
    </div>
  );
};
