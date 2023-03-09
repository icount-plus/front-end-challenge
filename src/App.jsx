import Input from './components/Input';

function App() {
  return (
    <div className="flex justify-center">
      <div className="h-screen max-w-7xl w-screen flex items-center justify-center">
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
          <Input />
        </section>
      </div>
    </div>
  );
}

export default App;
