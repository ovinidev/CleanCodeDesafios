// Causa vs Efeito
import { useEffect, useState } from "react";

interface User {
  name: string;
  github: string;
}

function fetchUser() {
  return {
    data: {
      user: {
        name: "Joseph Oliveira",
        github: "https://github.com/josepholiveira",
      },
    },
  };
}

export function UserProfile() {
  const [isLoadingUserFetch, setIsLoadingUserFetch] = useState(false);
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    (function loadUser() {
      setIsLoadingUserFetch(true);

      try {
        const fetchUserResponse = fetchUser();

        setUserData(fetchUserResponse.data.user);
      } catch {
        console.log("Erro");
      } finally {
        setIsLoadingUserFetch(false);
      }
    })();
  }, []);

  if (isLoadingUserFetch) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={`${userData?.github}.png`} alt="image" />
      <a href={userData?.github}>{userData?.name}</a>
    </div>
  );
}
