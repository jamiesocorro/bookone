// import axios from "axios";

// export const getTaskList = async (params: string = "") => {
//   try {
//     const rootUrl: string = window.location.hostname;
//     const serverEnvironment = rootUrl || "dev-app.projectler.com"; // Default to 'dev' if SERVER_ENV environment variable is not set
//     let apiUrl;

//     if (serverEnvironment == "dev-app.projectler.com") {
//       apiUrl = "https://dev-api.projectler.com/";
//     } else if (serverEnvironment == "staging-app.projectler.com") {
//       apiUrl = "https://staging-api.projectler.com/";
//     } else if (serverEnvironment == "app.projectler.com") {
//       apiUrl = "https://api.projectler.com/";
//     } else if (serverEnvironment == "localhost") {
//       apiUrl = "https://dev-api.projectler.com/";
//     } else {
//       throw new Error(`Invalid server environment: ${serverEnvironment}`);
//     }
//     const response = await axios
//       .create({ baseURL: apiUrl })
//       .get(`/api/task${params}`, {
//         headers: { Authorization: useAuthStore.getState().accessToken },
//       });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
