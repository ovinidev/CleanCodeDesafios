async function register(data) {
  const { email, name, avatar } = data;

  if (!avatar) return { error: "avatar is required" };

  if (!name) return { error: "name is required" };

  if (!email) return { error: "email is required" };

  const userAlreadyExists = getUserByEmail(email);

  if (userAlreadyExists) {
    return { error: "user already exists" };
  }

  const imageConvertedToJPG = convertImageToJPG(avatar);

  const userCreated = await createUser({
    email,
    name,
    avatar: imageConvertedToJPG,
  });

  return { userCreated };
}
