import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { Event } from "../models/Event.js"

logger

class EventsService{
  async getEvents(){
    const res = await api.get('api/events')
    AppState.events = res.data.map(event => new Event(event))
  }

  async getEventById(eventId){
    const res = await api.get(`api/events/${eventId}`)
    AppState.activeEvent = new Event(res.data)
  }
}


export const eventsService = new EventsService()