/* eslint-disable no-undef */
import $ from 'jquery';

function query(cb) {
    return $.getJSON(`http://www.fookwin.com/last`, {
      accept: "application/json"
    })
      //.then(checkStatus)
      //.then(parseJSON)
      .then(cb);
  }
  
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
  
  function parseJSON(response) {
    return response.json();
  }
  
  const LotteryResult = { query };
  export default LotteryResult;