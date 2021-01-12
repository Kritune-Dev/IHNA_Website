const axios = require('axios')
require('dotenv').config()


exports.callEtaService = () => {
  return new Promise((resolve, reject) => {
    axios.get(process.env.APP_SERVICE + '/About')
      .then(response => {
        var infoApp = getInfos(response.data.IHNA_App, 'Application')
        var infoCalendarService = getInfos(response.data.IHNA_CalendarService, 'CalendarService')
        var infoCalendarWorker =  getInfos(response.data.IHNA_CalendarWorker, 'CalendarWorker')
        var infoMessengerService =  getInfos(response.data.IHNA_MessengerService, 'MessengerService')
        resolve({infoApp, infoCalendarService, infoCalendarWorker, infoMessengerService})            
      })
      .catch(error => {
        reject(error)
      })
  })
}

function getInfos(Name, service) {
  var ret = `${Name.working ? '🟢' : '🔴'} - ${service} - v.${Name.version}`
  return ret
}