-- Run this in your Supabase project's SQL Editor
-- supabase.com → your project → SQL Editor → New Query → paste this → Run

create table if not exists public.residents (
  id         bigserial primary key,
  address    text not null,
  name       text not null,
  phone      text,
  email      text,
  notes      text,
  created_at timestamp with time zone default now()
);

-- Only logged-in users can read the directory
alter table public.residents enable row level security;

create policy "Authenticated users can read residents"
  on public.residents
  for select
  using (true);

-- Only you (service role) can insert/update/delete
-- (we'll do that from the Supabase dashboard directly)

-- Sample data to get you started (optional - delete after testing)
insert into public.residents (address, name, phone, email, notes) values
  ('123 Oak Lane', 'Smith Family', '555-0101', 'smiths@email.com', 'Blue mailbox, golden retriever named Buddy'),
  ('125 Oak Lane', 'Johnson Household', '555-0102', 'johnson@email.com', 'Black Tesla, two cats'),
  ('127 Oak Lane', 'Williams Family', '555-0103', null, 'Vegetable garden in front yard');
