const GLOBAL_DATA = {};
const DATA_PATH = "./data";

const GET_DB_DATA = () => {
  fetch("./data/perks.json")
  .then(response => response.json())
  .then(json => {
    SET_GLOBAL_DATA(json);
  });

  fetch("./data/killers.json")
  .then(response => response.json())
  .then(json => {
    SET_GLOBAL_DATA(json);
  });

  fetch("./data/survivors.json")
  .then(response => response.json())
  .then(json => {
    SET_GLOBAL_DATA(json);
  });
}

const SET_GLOBAL_DATA = (data) => {
  GLOBAL_DATA[data.title] = data;
  console.log(GLOBAL_DATA);
}

GET_DB_DATA();