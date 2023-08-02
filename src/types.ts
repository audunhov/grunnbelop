export interface Grunnbelop {
  dato: string
  grunnbeløp: number
  grunnbeløpPerMåned: number
  gjennomsnittPerÅr?: number
  omregningsfaktor?: number
  virkningstidspunktForMinsteinntekt?: string
}
