import Domain from "@canaan_run/canaan";
export {};

export const projects = new Domain(
  "projects"
  /*, {
  balance: 0,
  projects: [],
  selected: {},
  entries: [],
}*/
);
export const user = new Domain(
  "user"
  /*, {
  info: {},
}*/
);

//// user domain commands
export const updateUserInfo = user.createCommand({
  name: "Update user info",
  isPublic: false,
  path: "info",
  description: "Update user info",
});

//// user domain queries
export const getUserInfo = user.createQuery({
  name: "getUserInfo",
  description: "getUserInfo",
  path: "info",
  isPublic: true,
});

// projects domain commands
export const updateProjects = projects.createCommand({
  name: "Update projects",
  isPublic: true,
  path: "projects",
  description: "Update projects",
});
export const addEntry = projects.createCommand({
  name: "add entry",
  isPublic: true,
  path: "entries[]",
  description: "add entry",
});
export const updateBalance = projects.createCommand({
  name: "updateBalance",
  isPublic: true,
  path: "balance",
  description: "updateBalance",
});

// projects domain queries
export const getProjects = projects.createQuery({
  name: "get Projects",
  description: "getP rojects",
  path: "projects",
  isPublic: true,
});
export const getBalance = projects.createQuery({
  name: "get Balance",
  description: "get Balance",
  isPublic: true,
  path: "balance",
  defaultValue: 50,
});
export const getEntries = projects.createQuery({
  name: "getEntries",
  description: "getEntries",
  path: "entries",
  isPublic: true,
  defaultValue: [],
});
