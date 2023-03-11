import Input from './components/Input';
import Contributors from './components/Contributors';
import RepositoryProvider from './contexts/RepositoryContext';

function App() {
  return (
    <RepositoryProvider>
      <div className="flex justify-center">
        <div className="max-w-7xl py-10 w-screen flex flex-col items-center justify-center">
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
          <section className="w-full flex flex-col items-center ">
            <Contributors />
          </section>
        </div>
      </div>
    </RepositoryProvider>
  );
}

export default App;
