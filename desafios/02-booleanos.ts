// Boleanos

const userProfile = {
  name: "Diego Fernandes",
  height: 190,
  hasTicket: true,
};

const minimalNecessaryHeight = 130;

const currentHour = new Date().getHours();

const parkHasOpen = currentHour > 9 && currentHour < 18;

if (!parkHasOpen) {
  throw new Error("O parque está fechado!");
}

const userHasTicked = userProfile.hasTicket;

if (!userHasTicked) {
  throw new Error("O Diego não possui um bilhete para entrar no parque!");
}

const hasPermissionToEnterToy = userProfile.height > minimalNecessaryHeight;

if (!hasPermissionToEnterToy) {
  throw new Error("O Diego não pode entrar no brinquedo!");
}

console.log("O Diego se divertiu muito! :)");
