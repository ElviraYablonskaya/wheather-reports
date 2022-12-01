const URL = "https://meteo.up.railway.app";

export const getReports = () =>
  fetch(`${URL}/api/reports`).then((res) => res.json());

export const createReport = (data) =>
  fetch(`${URL}/api/reports`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      date: new Date(),
    }),
  });

export const deleteReport = (reportId) =>
  fetch(`${URL}/api/reports/${reportId}`, {
    method: "DELETE",
  });

  export const editReport = (reportId) =>
  fetch(`${URL}/api/reports/${reportId}`, {
    method: "PUT",
  });
