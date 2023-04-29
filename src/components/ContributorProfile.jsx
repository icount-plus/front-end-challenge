import { useContext } from 'react';
import { ContributorsContext } from '../contexts/ContributorsContext';
import Spinner from './Spinner';

function ContributorProfile() {
  const { profileData, loadingProfile } = useContext(ContributorsContext);

  if (loadingProfile) {
    return (
      <div className="p-5">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center">
        <a href={profileData?.html_url} target="_blank" rel="noreferrer">
          <img
            src={profileData?.avatar_url}
            className="w-11 rounded-full mr-3"
            alt="contributor"
            loading="lazy"
          />
        </a>
        <div>
          <p className="text-textBlue mb-1 cursor-pointer w-fit flex flex-col ">
            <a href={profileData?.html_url} target="_blank" rel="noreferrer">
              {profileData?.login}
            </a>
            <span className="text-textGray text-xs font-bold">
              {profileData?.name}
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-2">
        <p>{profileData?.bio}</p>
      </div>
    </>
  );
}

export default ContributorProfile;
