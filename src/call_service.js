const axios = require('axios')
require('dotenv').config()


exports.callEtaService = () => {
  return new Promise((resolve) => {
    axios.get(process.env.APP_SERVICE + '/About')
      .then(response => {
        var infoApp = getInfos(response.data.IHNA_App, 'Application')
        var infoCalendarService = getInfos(response.data.IHNA_CalendarService, 'CalendarService')
        var infoCalendarWorker = getInfos(response.data.IHNA_CalendarWorker, 'CalendarWorker')
        var infoMessengerService = getInfos(response.data.IHNA_MessengerService, 'MessengerService')
        resolve({infoApp, infoCalendarService, infoCalendarWorker, infoMessengerService})            
      })
      .catch(() => {
        var infoApp = getInfosDown('Application')
        var infoCalendarService = getInfosDown('CalendarService')
        var infoCalendarWorker = getInfosDown('CalendarWorker')
        var infoMessengerService = getInfosDown('MessengerService')
        resolve({infoApp, infoCalendarService, infoCalendarWorker, infoMessengerService})
      })
  })
}

function getInfos(Name, service) {
  var ret = `${Name.working ? '🟢' : '🔴'} - ${service} - v.${Name.version}`
  return ret
}

function getInfosDown(service) {
  var ret = `🔴 - ${service}`
  return ret
}