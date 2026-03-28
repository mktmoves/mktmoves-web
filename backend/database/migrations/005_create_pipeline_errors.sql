CREATE TABLE IF NOT EXISTS pipeline_errors (
    id                  UUID            NOT NULL DEFAULT gen_random_uuid(),
    job_name            TEXT            NOT NULL,
    task_name           TEXT            NOT NULL,
    error_type          TEXT            NOT NULL,
    record_id           TEXT,
    raw_payload         JSONB,
    error_message       TEXT,
    stack_trace         TEXT,
    retry_count         SMALLINT        NOT NULL DEFAULT 0,
    dag_run_id          TEXT,
    created_at          TIMESTAMPTZ     NOT NULL DEFAULT NOW(),

    CONSTRAINT pipeline_errors_pkey PRIMARY KEY (id)
);

CREATE INDEX IF NOT EXISTS idx_pipeline_errors_job
    ON pipeline_errors (job_name, task_name);

CREATE INDEX IF NOT EXISTS idx_pipeline_errors_created
    ON pipeline_errors (created_at DESC);

-- RLS: enabled with no policies
-- anon role has zero access (no SELECT, INSERT, UPDATE, DELETE)
-- service role key bypasses RLS and retains full access
ALTER TABLE public.pipeline_errors ENABLE ROW LEVEL SECURITY;