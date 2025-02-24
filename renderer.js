// const information = document.getElementById("info");
// information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

// const func = async () => {
//   const res = await window.versions.ping();
//   console.log(res);
// };

// func();

// import { ipcRenderer } from "electron";
// import { app, BrowserWindow, ipcMain } from "electron";

document.getElementById("btn1").addEventListener("click", () => {
  console.log("toi bam bnt1");
  //   ipcRenderer.send("btn", "111");
  window.versions.sendBtnClick("111");
});

document.getElementById("btn2").addEventListener("click", () => {
  console.log("toi bam bnt2");
  window.versions.sendBtnClick("222");

  //   ipcRenderer.send("btn", "2222");
});
