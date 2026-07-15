import { useParams } from "react-router-dom";
import { notes } from "../../../data/ssc/notes";

const NoteViewer = () => {
  const { id } = useParams();

  const note = notes.find((n) => n.id === Number(id));

  if (!note) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <h1 className="text-3xl font-bold">
          Note not found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-4xl font-bold text-white">
          {note.title}
        </h1>

        <iframe
          src={note.file}
          title={note.title}
          className="h-[85vh] w-full rounded-xl border border-slate-800 bg-white"
        />
      </div>
    </div>
  );
};

export default NoteViewer;