-- DDL
CREATE TABLE IF NOT EXISTS priority_ciks (
    cik TEXT NOT NULL,
    CONSTRAINT priority_ciks_pkey PRIMARY KEY (cik),
    CONSTRAINT priority_ciks_fkey FOREIGN KEY (cik) REFERENCES filers (cik)
);

ALTER TABLE public.priority_ciks ENABLE ROW LEVEL SECURITY;
CREATE POLICY priority_ciks_select_anon
    ON public.priority_ciks FOR SELECT TO anon USING (true);


INSERT INTO priority_ciks (cik) VALUES
    ('0000019617'),  -- JPMORGAN CHASE & CO
    ('0000093751'),  -- STATE STREET CORP
    ('0000098758'),  -- TORRAY INVESTMENT PARTNERS LLC
    ('0000102909'),  -- VANGUARD GROUP INC
    ('0000200217'),  -- DODGE & COX
    ('0000315066'),  -- FMR LLC
    ('0000820124'),  -- SOUND SHORE MANAGEMENT INC /CT/
    ('0000846222'),  -- GREENHAVEN ASSOCIATES INC
    ('0000859804'),  -- WEDGEWOOD PARTNERS INC
    ('0000860643'),  -- GARDNER RUSSO & QUINN LLC
    ('0000883965'),  -- WEITZ INVESTMENT MANAGEMENT, INC.
    ('0000905567'),  -- YACKTMAN ASSET MANAGEMENT LP
    ('0000915191'),  -- FAIRFAX FINANCIAL HOLDINGS LTD/ CAN
    ('0000921669'),  -- ICAHN CARL C
    ('0000934639'),  -- MAVERICK CAPITAL LTD
    ('0000936753'),  -- ARIEL INVESTMENTS, LLC
    ('0000947996'),  -- Olstein Capital Management, L.P.
    ('0000949509'),  -- OAKTREE CAPITAL MANAGEMENT LP
    ('0001006438'),  -- APPALOOSA MANAGEMENT LP
    ('0001034524'),  -- POLEN CAPITAL MANAGEMENT LLC
    ('0001039565'),  -- KAHN BROTHERS GROUP INC
    ('0001040273'),  -- Third Point LLC
    ('0001048445'),  -- ELLIOTT MANAGEMENT CORP
    ('0001056831'),  -- FAIRHOLME CAPITAL MANAGEMENT LLC
    ('0001061165'),  -- LONE PINE CAPITAL LLC
    ('0001061768'),  -- BAUPOST GROUP LLC/MA
    ('0001063296'),  -- ATLANTIC INVESTMENT MANAGEMENT, INC.
    ('0001067983'),  -- BERKSHIRE HATHAWAY INC
    ('0001070134'),  -- MAIRS & POWER INC
    ('0001079114'),  -- GREENLIGHT CAPITAL INC
    ('0001096343'),  -- MARKEL GROUP INC.
    ('0001099281'),  -- THIRD AVENUE MANAGEMENT LLC
    ('0001103804'),  -- VIKING GLOBAL INVESTORS LP
    ('0001112520'),  -- AKRE CAPITAL MANAGEMENT LLC
    ('0001113169'),  -- PRICE T ROWE GROUP INC
    ('0001115373'),  -- SEMPER AUGUSTUS INVESTMENTS GROUP LLC
    ('0001135730'),  -- COATUE MANAGEMENT LLC
    ('0001135778'),  -- MILLER VALUE PARTNERS, LLC
    ('0001159159'),  -- JANA PARTNERS LLC
    ('0001165797'),  -- CAUSEWAY CAPITAL MANAGEMENT LLC
    ('0001166559'),  -- GATES FOUNDATION TRUST
    ('0001167483'),  -- TIGER GLOBAL MANAGEMENT LLC
    ('0001279936'),  -- CANTILLON CAPITAL MANAGEMENT LLC
    ('0001313666'),  -- ICAHN PARTNERS LP
    ('0001325447'),  -- First Eagle Investment Management, LLC
    ('0001336528'),  -- Pershing Square Capital Management, L.P.
    ('0001345471'),  -- TRIAN FUND MANAGEMENT, L.P.
    ('0001351069'),  -- ValueAct Capital Management, L.P.
    ('0001364742'),  -- BlackRock Finance, Inc.
    ('0001389403'),  -- Chou Associates Management Inc.
    ('0001404599'),  -- Aquamarine Capital Management, LLC
    ('0001419050'),  -- Punch Card Capital, L.P.
    ('0001454502'),  -- Triple Frond Partners LLC
    ('0001484150'),  -- Lindsell Train Ltd
    ('0001517137'),  -- Starboard Value LP
    ('0001540866'),  -- Makaira Partners LLC
    ('0001553733'),  -- Brave Warrior Advisors, LLC
    ('0001559771'),  -- Engaged Capital LLC
    ('0001569205'),  -- Fundsmith LLP
    ('0001581811'),  -- Egerton Capital (UK) LLP
    ('0001623798'),  -- LINDSELL TRAIN GLOBAL EQUITY LLC
    ('0001631014'),  -- ALTAROCK PARTNERS LP
    ('0001641864'),  -- Giverny Capital Inc.
    ('0001647251'),  -- TCI Fund Management Ltd
    ('0001649339'),  -- Scion Asset Management, LLC
    ('0001697868'),  -- Valley Forge Capital Management, LP
    ('0001709323'),  -- Himalaya Capital Management LLC
    ('0001766596'),  -- RV Capital AG
    ('0001773994'),  -- Conifer Management, L.L.C.
    ('0001791786'),  -- Elliott Investment Management L.P.
    ('0001798849')   -- Durable Capital Partners LP
ON CONFLICT DO NOTHING;