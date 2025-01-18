import { ROUTES } from "./routes"

export interface IEventStep {
  step: number,
  title: string,
  route: string
}

export const CREATE_EVENT_STEPS: IEventStep[] = [
  {
    step: 0,
    title: 'Basic information',
    route: ROUTES.CREATE_EVENT_BASIC_INFO
  },
  {
    step: 1,
    title: 'Details',
    route: ROUTES.CREATE_EVENT_DETAILS
  },
  {
    step: 2,
    title: 'Dates',
    route: ROUTES.CREATE_EVENT_DATES
  },
]