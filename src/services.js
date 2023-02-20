import { commandFailedToPass, theApp } from "@canaan_run/canaan";
import {
  projects,
  addEntry,
  updateBalance,
  getProjects,
  getBalance,
} from "./CQRS";
projects.onCommand((command) => {
  const { type } = command;
  if (type === addEntry.commandName) {
    const balance = getBalance() || 0;
    updateBalance(balance + 5);
  }
});

theApp.onCommand((command) => {
  const { type, payload } = command;
  if (type === commandFailedToPass.commandName) {
    alert(payload?.event?.params?.message);
  }
});

export {};
