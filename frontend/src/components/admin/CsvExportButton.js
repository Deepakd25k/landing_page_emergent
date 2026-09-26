import { Download } from "lucide-react";
import { useSearchParams } from "react-router-dom";

export const CsvExportButton = () => {
  const [searchParams] = useSearchParams();
  
  const handleDownload = () => {
    const url = new URL("/api/admin/export/bookings", window.location.origin);
    const params = new URLSearchParams(searchParams);
    url.search = params.toString();
    
    // Create temporary link and click it to download
    const link = document.createElement('a');
    link.href = url.toString();
    link.download = 'bookings.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      onClick={handleDownload}
      className="flex items-center gap-2 px-3 py-1.5 bg-white border border-line rounded-lg text-sm font-medium hover:bg-alt transition-colors shadow-soft"
      title="Export Bookings to CSV"
    >
      <Download className="w-4 h-4 text-ink-3" />
      <span className="hidden sm:inline">Export</span>
    </button>
  );
};
