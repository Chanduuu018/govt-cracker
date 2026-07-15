import { useNavigate } from "react-router-dom";

interface NoteCardProps {
  id: number;
  title: string;
  pages: number;
  downloads: number;
}

const NoteCard = ({
  id,
  title,
  pages,
  downloads,
}: NoteCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-blue-500/40">
      <div>
        <h3 className="text-lg font-semibold text-white">
          📄 {title}
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          {pages} Pages • {downloads} Downloads
        </p>
      </div>

      <button
        onClick={() => navigate(`/ssc/notes/${id}`)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        View
      </button>
    </div>
  );
};

export default NoteCard;