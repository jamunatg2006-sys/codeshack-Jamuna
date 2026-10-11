import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] dark:bg-[#080a0f] text-slate-900 dark:text-slate-100 p-4">
      <div className="max-w-md w-full p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1017] shadow-xl text-center space-y-4">
        <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center mx-auto">
          <Terminal className="w-6 h-6" />
        </div>

        <div className="font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
          ERROR 404 &bull; ROUTE_NOT_FOUND
        </div>

        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          Signal Lost in Space
        </h1>

        <p className="text-sm text-slate-600 dark:text-slate-400">
          The requested path does not exist on this server. All other systems remain fully nominal.
        </p>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Core Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
