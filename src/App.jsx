import Input from './components/Input';
import Contributors from './components/Contributors';

function App() {
  return (
    <div className="flex justify-center">
      <div className="h-screen max-w-7xl w-screen flex flex-col items-center justify-center">
        <section>
          <div>
            <h1 className="text-white text-center text-3xl sm:text-5xl md:text-6xl lg:text-8xl 2xl:text-9xl font-lalezar">
              FIND CONTRIBUTORS
            </h1>
            <p className="text-gray-1 text-xs sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-center font-lalezar tracking-wider">
              An easy way to find an open source contributor from an
              organization
            </p>
          </div>
          <div className="flex flex-col items-center justify-center my-16">
            <Input button />
          </div>
        </section>
        <section className="w-full flex justify-center">
          <Contributors />
        </section>
      </div>
    </div>
  );
}

export default App;
