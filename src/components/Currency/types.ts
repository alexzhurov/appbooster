export interface ICurrencyProps {
  cur: string
  title: string
  rate: number
  sum: number
  key: number | string
  isFavourite: boolean
  setFav: (cur: string) => void
}
