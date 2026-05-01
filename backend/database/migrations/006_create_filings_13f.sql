CREATE TABLE IF NOT EXISTS filings_13f (
    id                      UUID            NOT NULL        DEFAULT gen_random_uuid(),
    accession_number        TEXT            NOT NULL,
    cusip                   CHAR(9)         NOT NULL,
    name_of_issuer          VARCHAR(200)    NOT NULL,
    title_of_class          VARCHAR(200)    NOT NULL,
    value                   BIGINT          NOT NULL        CHECK (value >= 0),
    ssh_prnamt              BIGINT          NOT NULL        CHECK (ssh_prnamt >= 0),
    ssh_prnamt_type         VARCHAR(3)      NOT NULL        CHECK (ssh_prnamt_type IN ('SH', 'PRN')),
    investment_discretion   VARCHAR(6)      NOT NULL        CHECK (investment_discretion IN ('SOLE', 'SHARED', 'DFND', 'OTHER')),
    figi                    VARCHAR(12)     NULL,
    created_at              TIMESTAMPTZ     NOT NULL        DEFAULT NOW(),

    CONSTRAINT filings_13f_pkey
        PRIMARY KEY (id),

    CONSTRAINT filings_13f_accession_number_fkey
        FOREIGN KEY (accession_number)
        REFERENCES filings (accession_number)
);

CREATE INDEX IF NOT EXISTS idx_filings_13f_accession_number
    ON filings_13f (accession_number);

CREATE INDEX IF NOT EXISTS idx_filings_13f_cusip
    ON filings_13f (cusip);

CREATE INDEX IF NOT EXISTS idx_filings_13f_cusip_discretion
    ON filings_13f (cusip, investment_discretion);

ALTER TABLE public.filings_13f ENABLE ROW LEVEL SECURITY;

CREATE POLICY filings_13f_select_anon
    ON public.filings_13f
    FOR SELECT
    TO anon
    USING (true);