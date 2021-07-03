import { Subjects } from './subjects'

export interface FeedDeletedEvent {
  subject: Subjects.FeedDeleted
  data: {
    id: number
    uuid: string
  }
}
