export type DisplaySponsor = Sponsor & {
  x: number
  y: number
}

export type DisplayTypeSponsors = Omit<TypeSponsors, 'sponsors'> & {
  name: string
  y: number
  sponsors: Array<DisplaySponsor[]>
}

export type DisplaySponsors = DisplayTypeSponsors[]
