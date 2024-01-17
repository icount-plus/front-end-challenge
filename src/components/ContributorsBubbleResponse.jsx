import { useContext, useEffect } from 'react';
import { ContributorsContext } from '../contexts/ContributorsContext';
import Spinner from './Spinner';
import useMousePosition from '../hooks/useMousePosition';
import ContributorProfile from './ContributorProfile';

function ContributorsBubbleResponse() {
  const { contributorsData, isLoading, setContributorProfile } =
    useContext(ContributorsContext);
  const { handleOnMouseMove, position, setIsBoolean, isBoolean } =
    useMousePosition();

  const rangeContributions = [
    {
      range: [0, 0],
      width: 'w-40',
    },
    {
      range: [1, 2],
      width: 'w-32',
    },
    {
      range: [3, 7],
      width: 'w-20',
    },
    {
      range: [8, 14],
      width: 'w-16',
    },
  ];

  const shuffleFlexOrder = () => {
    const container = document.getElementById('bubble-container');
    if (container) {
      const items = Array.from(container?.children);

      // Move the first item to the middle
      const firstItem = items.shift();
      const middleIndex = Math.floor(items.length / 2);
      container.insertBefore(firstItem, items[middleIndex]);

      // Shuffle the remaining items
      for (let i = items.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        container.insertBefore(items[j], items[i]);
      }
    }
  };

  useEffect(() => {
    shuffleFlexOrder();
  }, [contributorsData]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex items-center justify-center sm:h-96 h- mt-3">
      {isBoolean && (
        <div
          onMouseEnter={() => setIsBoolean(true)}
          onMouseLeave={() => setIsBoolean(false)}
          className="absolute border-b bg-bgGray border-bgblue2 max-w-md w-full p-4 rounded-lg z-50"
          style={{
            left: position.x,
            top: position.y,
          }}
        >
          <ContributorProfile />
        </div>
      )}
      <div
        className="flex flex-wrap justify-center items-center sm:flex-col-reverse h-full gap-1 rounded-full"
        id="bubble-container"
      >
        {contributorsData.map((data) =>
          data.map((contributor, i) => (
            <img
              key={contributor.id}
              src={contributor.avatar_url}
              className={`${
                rangeContributions.find(
                  (v) => i >= v.range[0] && i <= v.range[1]
                )?.width
              } rounded-full hover:scale-125 transition-all duration-100`}
              alt="contributor"
              loading="lazy"
              onMouseEnter={(e) =>
                handleOnMouseMove(e, contributor.login, setContributorProfile)
              }
              onMouseLeave={() => setIsBoolean(false)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ContributorsBubbleResponse;
