CREATE TABLE IF NOT EXISTS filings (
    accession_number        TEXT            NOT NULL,
    cik                     TEXT            NOT NULL,
    form_type               TEXT            NOT NULL,
    filing_date             DATE            NOT NULL,
    report_date             DATE,
    acceptance_datetime     TIMESTAMPTZ,
    act                     TEXT,
    file_number             TEXT,
    film_number             TEXT,
    core_type               TEXT,
    size                    BIGINT,
    is_xbrl                 SMALLINT,
    is_inline_xbrl          SMALLINT,
    primary_document        TEXT,
    primary_doc_description TEXT,
    created_at              TIMESTAMPTZ     NOT NULL    DEFAULT NOW(),

    CONSTRAINT filings_pkey PRIMARY KEY (accession_number),
    CONSTRAINT filings_cik_fkey FOREIGN KEY (cik) REFERENCES filers (cik)
);

CREATE INDEX IF NOT EXISTS idx_filings_cik_filing_date
    ON filings (cik, filing_date DESC);

CREATE INDEX IF NOT EXISTS idx_filings_form_type
    ON filings (form_type);


ALTER TABLE public.filings ENABLE ROW LEVEL SECURITY;

CREATE POLICY filings_select_anon
    ON public.filings
    FOR SELECT
    TO anon
    USING (true);