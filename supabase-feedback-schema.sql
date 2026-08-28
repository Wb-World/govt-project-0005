create extension if not exists pgcrypto;

create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  language text not null check (language in ('en', 'ta')),
  name text not null default '',
  rating integer check (rating between 1 and 5),
  feedback_type text not null default '',
  department text default '',
  anonymous boolean not null default false,
  message text not null default ''
);

-- Migration if table already exists:
alter table public.feedback add column if not exists department text default '';

alter table public.feedback enable row level security;

drop policy if exists "Anyone can submit feedback" on public.feedback;
create policy "Anyone can submit feedback"
on public.feedback
for insert
to anon
with check (true);

drop policy if exists "Anon can read feedback for admin page" on public.feedback;
create policy "Anon can read feedback for admin page"
on public.feedback
for select
to anon
using (true);

drop policy if exists "Anon can delete feedback from admin page" on public.feedback;
create policy "Anon can delete feedback from admin page"
on public.feedback
for delete
to anon
using (true);
