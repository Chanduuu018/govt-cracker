import { useParams } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { notes } from "../../../data/ssc/notes";

const NoteViewer = () => {
    const { id } = useParams();

    const note = notes.find((n) => n.id === Number(id));

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    if (!note) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
                <h1 className="text-3xl font-bold">Note not found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950">
            <div className="mx-auto max-w-7xl p-6">
                <h1 className="mb-6 text-4xl font-bold text-white">
                    {note.title}
                </h1>

                <div className="h-[85vh] rounded-xl overflow-hidden border border-slate-700 bg-white">
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                        <Viewer
                            fileUrl={note.file}
                            plugins={[defaultLayoutPluginInstance]}
                        />
                    </Worker>
                </div>
            </div>
        </div>
    );
};

export default NoteViewer;