export type Register = Session[]
 
export interface Session {
  Events: Event[]
  StartTimeApp: string
  EndTimeApp: string
  Duration: number
  TotalMinimized: number
  TotalUnfocus: number
  TotalClickOut: number
  TellerId: number
  InactivityDuration: number
}
 
export interface Event {
  ServiceName: string
  EventCode: number
  EventStart: string
  EventEnd: string
  EventDuration: number
}