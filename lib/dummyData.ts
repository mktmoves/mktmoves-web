/**
 * MktMoves dummy data — realistic superinvestor 13F holdings for UI development.
 * All numbers are plausible Q3 2025 figures; not actual filings.
 */

export type TopHolding = {
  ticker: string
  issuer: string
  valueRaw: number
  sharesRaw: number
  weightPercent: number
  qoqChangePercent: number
}

export type Fund = {
  cik: string
  name: string
  quarter: string
  reportDate: string
  filingDate: string
  portfolioValueRaw: number
  qoqChangePercent: number
  holdingsCount: number
  newPositions: number
  exitedPositions: number
  topHoldings: TopHolding[]
}

export const DUMMY_FUNDS: Fund[] = [
  // ────────────────────────────────────────────────────────────
  // 1. Berkshire Hathaway
  // ────────────────────────────────────────────────────────────
  {
    cik: '0001067983',
    name: 'Berkshire Hathaway Inc',
    quarter: 'Q3 2025',
    reportDate: 'Sep 30, 2025',
    filingDate: 'Nov 14, 2025',
    portfolioValueRaw: 298_400_000_000,
    qoqChangePercent: 2.1,
    holdingsCount: 41,
    newPositions: 1,
    exitedPositions: 2,
    topHoldings: [
      {
        ticker: 'AAPL',
        issuer: 'Apple Inc',
        valueRaw: 87_200_000_000,
        sharesRaw: 400_000_000,
        weightPercent: 29.2,
        qoqChangePercent: -3.1,
      },
      {
        ticker: 'BAC',
        issuer: 'Bank of America Corp',
        valueRaw: 34_800_000_000,
        sharesRaw: 680_000_000,
        weightPercent: 11.7,
        qoqChangePercent: 1.4,
      },
      {
        ticker: 'AXP',
        issuer: 'American Express Co',
        valueRaw: 31_500_000_000,
        sharesRaw: 151_600_000,
        weightPercent: 10.6,
        qoqChangePercent: 5.8,
      },
      {
        ticker: 'KO',
        issuer: 'Coca-Cola Co',
        valueRaw: 24_100_000_000,
        sharesRaw: 400_000_000,
        weightPercent: 8.1,
        qoqChangePercent: 0.3,
      },
      {
        ticker: 'CVX',
        issuer: 'Chevron Corp',
        valueRaw: 18_900_000_000,
        sharesRaw: 118_600_000,
        weightPercent: 6.3,
        qoqChangePercent: -2.7,
      },
      {
        ticker: 'OXY',
        issuer: 'Occidental Petroleum Corp',
        valueRaw: 13_200_000_000,
        sharesRaw: 248_000_000,
        weightPercent: 4.4,
        qoqChangePercent: 6.2,
      },
      {
        ticker: 'KHC',
        issuer: 'Kraft Heinz Co',
        valueRaw: 10_500_000_000,
        sharesRaw: 325_600_000,
        weightPercent: 3.5,
        qoqChangePercent: -1.9,
      },
      {
        ticker: 'MCO',
        issuer: "Moody's Corp",
        valueRaw: 9_400_000_000,
        sharesRaw: 24_700_000,
        weightPercent: 3.2,
        qoqChangePercent: 4.1,
      },
    ],
  },

  // ────────────────────────────────────────────────────────────
  // 2. Pershing Square Capital
  // ────────────────────────────────────────────────────────────
  {
    cik: '0001336528',
    name: 'Pershing Square Capital Management',
    quarter: 'Q3 2025',
    reportDate: 'Sep 30, 2025',
    filingDate: 'Nov 14, 2025',
    portfolioValueRaw: 12_400_000_000,
    qoqChangePercent: -1.8,
    holdingsCount: 8,
    newPositions: 0,
    exitedPositions: 1,
    topHoldings: [
      {
        ticker: 'HLT',
        issuer: 'Hilton Worldwide Holdings Inc',
        valueRaw: 2_850_000_000,
        sharesRaw: 12_100_000,
        weightPercent: 23.0,
        qoqChangePercent: 3.4,
      },
      {
        ticker: 'QSR',
        issuer: 'Restaurant Brands International Inc',
        valueRaw: 2_100_000_000,
        sharesRaw: 28_400_000,
        weightPercent: 16.9,
        qoqChangePercent: -2.1,
      },
      {
        ticker: 'GOOG',
        issuer: 'Alphabet Inc',
        valueRaw: 1_960_000_000,
        sharesRaw: 11_500_000,
        weightPercent: 15.8,
        qoqChangePercent: 7.2,
      },
      {
        ticker: 'CMG',
        issuer: 'Chipotle Mexican Grill Inc',
        valueRaw: 1_750_000_000,
        sharesRaw: 28_800_000,
        weightPercent: 14.1,
        qoqChangePercent: -0.5,
      },
      {
        ticker: 'CP',
        issuer: 'Canadian Pacific Kansas City Ltd',
        valueRaw: 1_400_000_000,
        sharesRaw: 16_200_000,
        weightPercent: 11.3,
        qoqChangePercent: 1.9,
      },
      {
        ticker: 'LPLA',
        issuer: 'LPL Financial Holdings Inc',
        valueRaw: 1_100_000_000,
        sharesRaw: 3_600_000,
        weightPercent: 8.9,
        qoqChangePercent: -4.6,
      },
      {
        ticker: 'HHH',
        issuer: 'Howard Hughes Holdings Inc',
        valueRaw: 720_000_000,
        sharesRaw: 9_800_000,
        weightPercent: 5.8,
        qoqChangePercent: 0.8,
      },
      {
        ticker: 'MKC',
        issuer: 'McCormick & Co Inc',
        valueRaw: 520_000_000,
        sharesRaw: 6_400_000,
        weightPercent: 4.2,
        qoqChangePercent: -1.3,
      },
    ],
  },

  // ────────────────────────────────────────────────────────────
  // 3. Appaloosa Management
  // ────────────────────────────────────────────────────────────
  {
    cik: '0000813672',
    name: 'Appaloosa Management LP',
    quarter: 'Q3 2025',
    reportDate: 'Sep 30, 2025',
    filingDate: 'Nov 14, 2025',
    portfolioValueRaw: 6_100_000_000,
    qoqChangePercent: 5.3,
    holdingsCount: 34,
    newPositions: 4,
    exitedPositions: 3,
    topHoldings: [
      {
        ticker: 'META',
        issuer: 'Meta Platforms Inc',
        valueRaw: 980_000_000,
        sharesRaw: 1_680_000,
        weightPercent: 16.1,
        qoqChangePercent: 8.7,
      },
      {
        ticker: 'MSFT',
        issuer: 'Microsoft Corp',
        valueRaw: 820_000_000,
        sharesRaw: 1_890_000,
        weightPercent: 13.4,
        qoqChangePercent: 2.3,
      },
      {
        ticker: 'AMZN',
        issuer: 'Amazon.com Inc',
        valueRaw: 710_000_000,
        sharesRaw: 3_450_000,
        weightPercent: 11.6,
        qoqChangePercent: 6.1,
      },
      {
        ticker: 'BABA',
        issuer: 'Alibaba Group Holding Ltd',
        valueRaw: 560_000_000,
        sharesRaw: 4_200_000,
        weightPercent: 9.2,
        qoqChangePercent: -5.4,
      },
      {
        ticker: 'T',
        issuer: 'AT&T Inc',
        valueRaw: 480_000_000,
        sharesRaw: 21_800_000,
        weightPercent: 7.9,
        qoqChangePercent: 1.1,
      },
      {
        ticker: 'GM',
        issuer: 'General Motors Co',
        valueRaw: 390_000_000,
        sharesRaw: 7_500_000,
        weightPercent: 6.4,
        qoqChangePercent: -2.8,
      },
      {
        ticker: 'MU',
        issuer: 'Micron Technology Inc',
        valueRaw: 340_000_000,
        sharesRaw: 3_100_000,
        weightPercent: 5.6,
        qoqChangePercent: 12.4,
      },
      {
        ticker: 'GOOGL',
        issuer: 'Alphabet Inc',
        valueRaw: 310_000_000,
        sharesRaw: 1_820_000,
        weightPercent: 5.1,
        qoqChangePercent: 4.6,
      },
    ],
  },

  // ────────────────────────────────────────────────────────────
  // 4. Third Point
  // ────────────────────────────────────────────────────────────
  {
    cik: '0001040273',
    name: 'Third Point LLC',
    quarter: 'Q3 2025',
    reportDate: 'Sep 30, 2025',
    filingDate: 'Nov 14, 2025',
    portfolioValueRaw: 4_200_000_000,
    qoqChangePercent: -0.7,
    holdingsCount: 22,
    newPositions: 3,
    exitedPositions: 2,
    topHoldings: [
      {
        ticker: 'PG',
        issuer: 'Procter & Gamble Co',
        valueRaw: 680_000_000,
        sharesRaw: 3_900_000,
        weightPercent: 16.2,
        qoqChangePercent: 1.5,
      },
      {
        ticker: 'MSFT',
        issuer: 'Microsoft Corp',
        valueRaw: 590_000_000,
        sharesRaw: 1_360_000,
        weightPercent: 14.0,
        qoqChangePercent: 3.2,
      },
      {
        ticker: 'NVDA',
        issuer: 'NVIDIA Corp',
        valueRaw: 520_000_000,
        sharesRaw: 4_300_000,
        weightPercent: 12.4,
        qoqChangePercent: 9.8,
      },
      {
        ticker: 'AMZN',
        issuer: 'Amazon.com Inc',
        valueRaw: 440_000_000,
        sharesRaw: 2_140_000,
        weightPercent: 10.5,
        qoqChangePercent: 5.1,
      },
      {
        ticker: 'SYF',
        issuer: 'Synchrony Financial',
        valueRaw: 360_000_000,
        sharesRaw: 6_800_000,
        weightPercent: 8.6,
        qoqChangePercent: -3.4,
      },
      {
        ticker: 'DIS',
        issuer: 'Walt Disney Co',
        valueRaw: 290_000_000,
        sharesRaw: 2_700_000,
        weightPercent: 6.9,
        qoqChangePercent: -1.2,
      },
      {
        ticker: 'BURL',
        issuer: 'Burlington Stores Inc',
        valueRaw: 240_000_000,
        sharesRaw: 870_000,
        weightPercent: 5.7,
        qoqChangePercent: 2.9,
      },
      {
        ticker: 'RH',
        issuer: 'RH',
        valueRaw: 180_000_000,
        sharesRaw: 520_000,
        weightPercent: 4.3,
        qoqChangePercent: -6.3,
      },
    ],
  },

  // ────────────────────────────────────────────────────────────
  // 5. Greenlight Capital
  // ────────────────────────────────────────────────────────────
  {
    cik: '0001079114',
    name: 'Greenlight Capital Inc',
    quarter: 'Q3 2025',
    reportDate: 'Sep 30, 2025',
    filingDate: 'Nov 14, 2025',
    portfolioValueRaw: 1_850_000_000,
    qoqChangePercent: 3.6,
    holdingsCount: 28,
    newPositions: 2,
    exitedPositions: 4,
    topHoldings: [
      {
        ticker: 'CONSOL',
        issuer: 'CONSOL Energy Inc',
        valueRaw: 310_000_000,
        sharesRaw: 3_200_000,
        weightPercent: 16.8,
        qoqChangePercent: 7.5,
      },
      {
        ticker: 'BRK.B',
        issuer: 'Berkshire Hathaway Inc',
        valueRaw: 260_000_000,
        sharesRaw: 540_000,
        weightPercent: 14.1,
        qoqChangePercent: 2.3,
      },
      {
        ticker: 'VNET',
        issuer: 'VNET Group Inc',
        valueRaw: 210_000_000,
        sharesRaw: 18_600_000,
        weightPercent: 11.4,
        qoqChangePercent: -4.1,
      },
      {
        ticker: 'GRBK',
        issuer: 'Green Brick Partners Inc',
        valueRaw: 185_000_000,
        sharesRaw: 2_700_000,
        weightPercent: 10.0,
        qoqChangePercent: 5.9,
      },
      {
        ticker: 'ODP',
        issuer: 'ODP Corp',
        valueRaw: 150_000_000,
        sharesRaw: 4_100_000,
        weightPercent: 8.1,
        qoqChangePercent: -2.6,
      },
      {
        ticker: 'TECK',
        issuer: 'Teck Resources Ltd',
        valueRaw: 130_000_000,
        sharesRaw: 2_900_000,
        weightPercent: 7.0,
        qoqChangePercent: 1.8,
      },
      {
        ticker: 'CC',
        issuer: 'Chemours Co',
        valueRaw: 105_000_000,
        sharesRaw: 4_500_000,
        weightPercent: 5.7,
        qoqChangePercent: -8.2,
      },
      {
        ticker: 'RHI',
        issuer: 'Robert Half Inc',
        valueRaw: 88_000_000,
        sharesRaw: 1_200_000,
        weightPercent: 4.8,
        qoqChangePercent: 0.4,
      },
    ],
  },

  // ────────────────────────────────────────────────────────────
  // 6. Viking Global
  // ────────────────────────────────────────────────────────────
  {
    cik: '0001103804',
    name: 'Viking Global Investors LP',
    quarter: 'Q3 2025',
    reportDate: 'Sep 30, 2025',
    filingDate: 'Nov 14, 2025',
    portfolioValueRaw: 15_300_000_000,
    qoqChangePercent: 1.4,
    holdingsCount: 67,
    newPositions: 7,
    exitedPositions: 5,
    topHoldings: [
      {
        ticker: 'MSFT',
        issuer: 'Microsoft Corp',
        valueRaw: 1_620_000_000,
        sharesRaw: 3_740_000,
        weightPercent: 10.6,
        qoqChangePercent: 2.8,
      },
      {
        ticker: 'AMZN',
        issuer: 'Amazon.com Inc',
        valueRaw: 1_480_000_000,
        sharesRaw: 7_200_000,
        weightPercent: 9.7,
        qoqChangePercent: 4.5,
      },
      {
        ticker: 'META',
        issuer: 'Meta Platforms Inc',
        valueRaw: 1_350_000_000,
        sharesRaw: 2_310_000,
        weightPercent: 8.8,
        qoqChangePercent: 6.3,
      },
      {
        ticker: 'UNH',
        issuer: 'UnitedHealth Group Inc',
        valueRaw: 1_200_000_000,
        sharesRaw: 1_950_000,
        weightPercent: 7.8,
        qoqChangePercent: -1.9,
      },
      {
        ticker: 'FICO',
        issuer: 'Fair Isaac Corp',
        valueRaw: 1_050_000_000,
        sharesRaw: 480_000,
        weightPercent: 6.9,
        qoqChangePercent: 11.2,
      },
      {
        ticker: 'WFRD',
        issuer: 'Weatherford International PLC',
        valueRaw: 920_000_000,
        sharesRaw: 8_600_000,
        weightPercent: 6.0,
        qoqChangePercent: -3.7,
      },
      {
        ticker: 'LLY',
        issuer: 'Eli Lilly and Co',
        valueRaw: 810_000_000,
        sharesRaw: 870_000,
        weightPercent: 5.3,
        qoqChangePercent: 8.4,
      },
      {
        ticker: 'MCK',
        issuer: 'McKesson Corp',
        valueRaw: 740_000_000,
        sharesRaw: 1_100_000,
        weightPercent: 4.8,
        qoqChangePercent: 1.6,
      },
    ],
  },
]
