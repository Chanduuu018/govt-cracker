import NoteCard from "../../../components/exam/NoteCard";
import { notes } from "../../../data/ssc/notes";

const Notes = () => {
  const groupedNotes = notes.reduce((groups, note) => {
    if (!groups[note.subject]) {
      groups[note.subject] = [];
    }

    groups[note.subject].push(note);

    return groups;
  }, {} as Record<string, typeof notes>);

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-5xl font-bold text-white">
          📚 SSC Notes
        </h1>

        <p className="mt-4 text-slate-400">
          Browse topic-wise study notes.
        </p>

        {Object.entries(groupedNotes).map(([subject, subjectNotes]) => (
          <section key={subject} className="mt-12">
            <h2 className="mb-6 text-3xl font-bold text-blue-400">
              {subject}
            </h2>

            <div className="space-y-4">
              {subjectNotes.map((note) => (
                <NoteCard
                   key={note.id}
                    id={note.id}
                    title={note.title}
                    pages={note.pages}
                    downloads={note.downloads}
                    />        
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Notes;