// Nomenclatura de variáveis

const categoryBasedOnFollowersNumber = [
  {
    title: "User",
    followers: 5,
  },
  {
    title: "Friendly",
    followers: 50,
  },
  {
    title: "Famous",
    followers: 500,
  },
  {
    title: "Super Star",
    followers: 1000,
  },
];

async function getUserCategoryBasedOnFollowersNumber(req, res) {
  const username = String(req.query.username);

  if (!username) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`,
    });
  }

  const userFetchResponse = await fetch(
    `https://api.github.com/users/${username}`
  );

  if (userFetchResponse.status === 404) {
    return res.status(400).json({
      message: `User with username "${username}" not found`,
    });
  }

  const user = await userFetchResponse.json();

  const categorySortedDescending = categoryBasedOnFollowersNumber.sort(
    (a, b) => b.followers - a.followers
  );

  const categoryOfUser = categorySortedDescending.find(
    (i) => user.followers > i.followers
  );

  const userCategory = {
    username,
    category: categoryOfUser.title,
  };

  return userCategory;
}

(async () => {
  const user = await getUserCategoryBasedOnFollowersNumber(
    {
      query: {
        username: "ovinidev",
      },
    },
    {}
  );
  console.log(user);
})();
