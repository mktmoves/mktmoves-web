CREATE TABLE IF NOT EXISTS filers (
    cik                                     TEXT            NOT NULL,
    name                                    TEXT            NOT NULL,
    entity_type                             TEXT,
    sic                                     TEXT,
    sic_description                         TEXT,
    owner_org                               TEXT,
    ein                                     TEXT,
    state_of_incorporation                  TEXT,
    state_of_incorporation_description      TEXT,
    fiscal_year_end                         TEXT,
    phone                                   TEXT,
    website                                 TEXT,
    investor_website                        TEXT,
    tickers_exchanges                       JSONB,
    mailing_address                         JSONB,
    business_address                        JSONB,
    is_insider_transaction_for_owner        SMALLINT,
    is_insider_transaction_for_issuer       SMALLINT,
    created_at                              TIMESTAMPTZ     NOT NULL    DEFAULT NOW(),
    updated_at                              TIMESTAMPTZ     NOT NULL    DEFAULT NOW(),

    CONSTRAINT filers_pkey PRIMARY KEY (cik)
);

DROP TRIGGER IF EXISTS filers_set_updated_at ON filers;
CREATE TRIGGER filers_set_updated_at
BEFORE UPDATE ON filers
FOR EACH ROW EXECUTE FUNCTION set_updated_at();


ALTER TABLE public.filers ENABLE ROW LEVEL SECURITY;

CREATE POLICY filers_select_anon
    ON public.filers
    FOR SELECT
    TO anon
    USING (true);