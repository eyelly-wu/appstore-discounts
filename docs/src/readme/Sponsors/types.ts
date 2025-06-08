export type DisplayTypeSponsors = Omit<TypeSponsors, 'sponsors'> & {
  name: string
  sponsors: Array<Sponsor[]>
}

export type DisplaySponsors = DisplayTypeSponsors[]
