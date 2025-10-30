export interface Speaker {
  id: string
  name: string
  title: string
  company: string
  bio: string
  image: string
  expertise: string[]
  social: {
    twitter?: string
    linkedin?: string
    website?: string
  }
}

export interface AgendaItem {
  id: string
  time: string
  title: string
  description: string
  speaker?: string
  room: string
  track: string
  type: 'keynote' | 'session' | 'workshop' | 'break' | 'networking'
}

export interface CommitteeMember {
  id: string
  name: string
  role: string
  department: string
  email: string
  image: string
}

export interface Partner {
  id: string
  name: string
  logo: string
  tier: 'platinum' | 'gold' | 'silver' | 'bronze'
  website: string
  description: string
}

export interface TicketType {
  id: string
  name: string
  price: number
  earlyBirdPrice?: number
  description: string
  features: string[]
  available: boolean
}

export interface MediaContent {
  id: string
  type: 'image' | 'video'
  url: string
  title: string
  description?: string
  thumbnail?: string
}

export interface PastEdition {
  year: number
  title: string
  dates: {
    start: string
    end: string
  }
  location: {
    venue: string
    city: string
    country: string
  }
  theme: string
  highlights: string[]
  media: MediaContent[]
  attendeeCount?: number
  speakerCount?: number
  summary: string
  driveGalleryUrl: string
  agendaPdfUrl?: string
}

export interface EventEdition {
  year: number
  title: string
  subtitle: string
  dates: {
    start: string
    end: string
  }
  location: {
    venue: string
    city: string
    country: string
  }
  theme: string
  status: 'past' | 'current' | 'upcoming'
  description: string
  highlights: string[]
  Expected_Attendees: number
  Learning: number
  Workshops: number
  speakers: Speaker[]
  agenda: AgendaItem[]
  committee: CommitteeMember[]
  partners: Partner[]
  tickets: TicketType[]
  registrationOpen: boolean
  earlyBirdDeadline?: string
  media?: MediaContent[]
  pastEditions?: PastEdition[]
  countdownEnabled?: boolean
  socialMedia?: {
    twitter?: string
    linkedin?: string
    instagram?: string
    facebook?: string
  }
  newsletterSignup?: boolean
  contactEmail?: string
  driveGalleryUrl?: string
  agendaPdfUrl?: string
  sponsorshipPdfUrl?: string
  registrationFormUrl?: string
}