import * as Classes from "./class.js";

const items = [];

function init() {
  fetchData();
}

function fetchData() {
  render();
}

function onSearch(searchValue) {}

function render() {}

init();

function popByNationality() {
    fetch(popByNat)
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        response.forEach()
    });
};
