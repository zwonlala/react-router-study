import React from "react";

const profileData = {
  jiwon: {
    name: "송지원",
    description: "Frontend Engineer",
  },
  homer: {
    name: "호머 심슨",
    description: "심슨 가족에 나오는 도넛을 좋아하는 캐릭터",
  },
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자 입니다!</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
