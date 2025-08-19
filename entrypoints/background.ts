import { createChromeHandler } from 'trpc-chrome/adapter';
import { appRouter } from '@/src/trpc/router';

export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });

  createChromeHandler({
    router: appRouter,
    createContext: () => ({}),
  });
});
