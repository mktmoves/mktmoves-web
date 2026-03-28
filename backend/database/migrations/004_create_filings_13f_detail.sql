CREATE TABLE IF NOT EXISTS filings_13f_detail (
    accession_number            TEXT            NOT NULL,
    filing_detail_url           TEXT,
    info_table_filename         TEXT,
    info_table_html_filename    TEXT,
    info_table_xml              TEXT,
    is_processed                BOOLEAN         NOT NULL    DEFAULT FALSE,
    created_at                  TIMESTAMPTZ     NOT NULL    DEFAULT NOW(),
    updated_at                  TIMESTAMPTZ     NOT NULL    DEFAULT NOW(),

    CONSTRAINT filings_13f_detail_pkey PRIMARY KEY (accession_number),
    CONSTRAINT filings_13f_detail_fkey FOREIGN KEY (accession_number)
        REFERENCES filings (accession_number)
);

DROP TRIGGER IF EXISTS filings_13f_detail_set_updated_at ON filings_13f_detail;
CREATE TRIGGER filings_13f_detail_set_updated_at
BEFORE UPDATE ON filings_13f_detail
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX IF NOT EXISTS idx_13f_detail_job2
    ON filings_13f_detail (is_processed)
    WHERE info_table_xml IS NULL;

CREATE INDEX IF NOT EXISTS idx_13f_detail_job3
    ON filings_13f_detail (is_processed)
    WHERE info_table_xml IS NOT NULL AND is_processed = FALSE;



ALTER TABLE public.filings_13f_detail ENABLE ROW LEVEL SECURITY;

CREATE POLICY filings_13f_detail_select_anon
    ON public.filings_13f_detail
    FOR SELECT
    TO anon
    USING (true);