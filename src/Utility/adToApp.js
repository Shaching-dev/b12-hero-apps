const getInstalledApp = () => {
  const storedAppSTR = localStorage.getItem("installedApp");
  if (storedAppSTR) {
    const storedApp = JSON.parse(storedAppSTR);
    return storedApp;
  } else {
    return [];
  }
};

const addToStored = (id) => {
  const storedApp = getInstalledApp();

  const idString = String(id);

  if (storedApp.includes(idString)) {
    console.log(`App with ID ${id} is already installed.`);
  } else {
    storedApp.push(idString);
    const data = JSON.stringify(storedApp);
    localStorage.setItem("installedApp", data);
  }
};

const removeAppFromStore = (id) => {
  const storedApp = getInstalledApp();

  const idToRemove = String(id);

  const newAppIds = storedApp.filter((appId) => appId !== idToRemove);

  const data = JSON.stringify(newAppIds);
  localStorage.setItem("installedApp", data);
};

export { addToStored, getInstalledApp, removeAppFromStore };
