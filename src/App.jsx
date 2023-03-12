import { lazy, useContext, Suspense } from 'react';
import Input from './components/Input';
import Spinner from './components/Spinner/index';
import { RepositoryContext } from './contexts/RepositoryContext';

const Contributors = lazy(() => import('./components/Contributors'));

function App() {
  const { repoData } = useContext(RepositoryContext);

  return (
    <div className="flex justify-center">
      <div
        className={`${
          repoData ? 'h-full' : 'h-screen'
        } max-w-7xl py-10 w-screen flex flex-col items-center justify-center`}
      >
        <section>
          <div>
            <h1 className="text-white text-center text-3xl sm:text-5xl md:text-6xl lg:text-8xl 2xl:text-9xl font-lalezar">
              FIND CONTRIBUTORS
            </h1>
            <p className="text-textGray text-xs sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-center font-lalezar tracking-wider">
              An easy way to find an open source contributor from a repository
            </p>
          </div>
          <Input button placeholder="Type a repository name..." />
        </section>
        <section className="w-full flex flex-col items-center">
          <Suspense fallback={<Spinner />}>
            {repoData && <Contributors />}
          </Suspense>
        </section>
      </div>
    </div>
  );
}

export default App;
