import { SocialContext } from '@/context/contractContext';
import React, { useContext, useEffect, useState } from 'react';

interface ProfileInfoProps {
  username: string;
  follower_count: number; // Use 'number' instead of 'int' for counts
  following_count: number;
  niche_points: number;
  email: string;
}

const ProfilePage: React.FC = () => {
  const{contract, account} = useContext(SocialContext)
  const [username, setusername] = useState("")
  const [follower_count, setfollower_count] = useState(0)
  const [following_count, setfollowing_count] = useState(0)
  const [niche_points, setniche_points] = useState(0)
  const [email, setemail] = useState("")
  useEffect(() => {
     async function getData(){
     console.log(await Contract.accounts(account))
     }
     getData()
  },[])
  const CircleContainer: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
    return <div className="circle-container"><img src={src} alt={alt} /></div>;
  };

  const ProfileInfo: React.FC<ProfileInfoProps> = ({ username, follower_count, following_count, niche_points, email }) => {
    return (
      <div className="profile-info">
        <h2>Username: {username}</h2>
        <p>Follower Count: {follower_count}</p>
        <p>Following Count: {following_count}</p>
        <p>Niche Points: {niche_points}</p>
        <p>Email: {email}</p>
      </div>
    );
  };
  
  return (
    <div className="profile-page block w-full" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div className="profile-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="profile-photo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircleContainer src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpRzuF97FlAQHrooemOo95RoND21bHwgUcL8ASWDGBBQ&s" alt="Profile Picture" />
        </div>
        <div className="profile-info-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ProfileInfo username="Mrudul Pawar" follower_count={300} following_count={500} niche_points={350} email="mrudulpawar@gmail.com" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;



