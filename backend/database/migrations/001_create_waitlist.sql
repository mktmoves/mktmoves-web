-- Create waitlist table
create table public.waitlist (
    id          uuid primary key default gen_random_uuid(),
    email       text not null unique,
    source      text,
    created_at  timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.waitlist enable row level security;

-- Allow anonymous inserts only (no reads via anon key)
create policy waitlist_insert_anon
    on public.waitlist
    for insert
    to anon
    with check (true);


alter table public.waitlist 
add constraint waitlist_email_length 
check (char_length(email) <= 254);