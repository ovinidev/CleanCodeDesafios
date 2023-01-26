interface UpdateUserProps {
  data: {
    name: string,
    email: string,
    password: string,
  };
  params: {
    id: string,
  };
}

function updateUserRoute({ body, params }) {
  const { name, password, email } = body;
  const { id } = params;

  updateUserController({
    data: {
      name,
      email,
      password,
    },
    params: {
      id,
    },
  });
}

function updateUserController({ data, params }: UpdateUserProps) {
  const { name, password, email } = data;
  const { id } = params;

  const userRepository = new UserRepository();

  userRepository.update({
    data: {
      name,
      password,
      email,
    },
    params: {
      id,
    },
  });
}

class UserRepository {
  update({ data, params }) {
    console.log(data, params);
  }
}

updateUserRoute({
  body: {
    name: "Vini",
    password: "123423",
    email: "vini@email.com",
  },
  params: {
    id: "123",
  },
});
