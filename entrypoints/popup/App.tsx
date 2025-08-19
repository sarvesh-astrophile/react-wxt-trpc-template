import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import trpcLogo from '@/assets/trpc.svg';
import wxtLogo from '/wxt.svg';
import tailwindLogo from '@/assets/tailwindcss.svg';
import { TrpcTest } from './_components/TrpcTest';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[360px] min-h-[280px] p-4 text-slate-900 dark:text-slate-100">
      <header className="mb-3 flex items-start justify-between">
        <div className="space-y-1">
          <h1 className="text-base font-semibold tracking-tight text-slate-100 dark:text-slate-900">Simple Chrome Extension</h1>
          <div className="inline-flex items-center gap-2 rounded bg-emerald-600 px-2 py-1 text-[11px] font-medium text-white">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-300" />
            Tailwind active
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://wxt.dev" target="_blank" rel="noreferrer" title="WXT">
            <img src={wxtLogo} alt="WXT" className="h-6 w-6 transition-transform hover:scale-105" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer" title="React">
            <img src={reactLogo} alt="React" className="h-6 w-6 transition-transform hover:scale-105" />
          </a>
          <a href="https://trpc.io" target="_blank" rel="noreferrer" title="tRPC">
            <img src={trpcLogo} alt="tRPC" className="h-6 w-6 transition-transform hover:scale-105" />
          </a>
          <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" title="Tailwind CSS">
            <img src={tailwindLogo} alt="Tailwind CSS" className="h-6 w-6 transition-transform hover:scale-105" />
          </a>
        </div>
      </header>

      <section className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-sm font-medium">Quick demo</h2>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-600 dark:text-slate-400">Counter</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">{count}</span>
            <button
              onClick={() => setCount((c) => c + 1)}
              className="inline-flex items-center rounded border border-slate-300 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-800 hover:bg-slate-100 active:translate-y-[1px] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            >
              Increment
            </button>
          </div>
        </div>
      </section>

      <TrpcTest />

      <footer className="mt-3 text-[11px] text-slate-500">
        Open the DevTools console to view logs. Learn more about
        {' '}
        <a className="text-blue-600 hover:underline" href="https://wxt.dev" target="_blank" rel="noreferrer">WXT</a>,
        {' '}
        <a className="text-blue-600 hover:underline" href="https://react.dev" target="_blank" rel="noreferrer">React</a>
        ,
        {' '}
        <a className="text-blue-600 hover:underline" href="https://tailwindcss.com" target="_blank" rel="noreferrer">Tailwind CSS</a>
        {' '}and{' '}
        <a className="text-blue-600 hover:underline" href="https://trpc.io" target="_blank" rel="noreferrer">tRPC</a>.
      </footer>
    </div>
  );
}

export default App;
