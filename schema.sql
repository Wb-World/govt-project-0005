-- =============================================================
--  Kovalam Panchayat — Supabase SQL Schema
--  Run this entire file in Supabase SQL Editor
--  Dashboard → SQL Editor → New Query → Paste → Run
-- =============================================================


-- ─────────────────────────────────────────────────────────────
--  1.  ADMIN TABLE
--      Stores admin login credentials
-- ─────────────────────────────────────────────────────────────

create table if not exists public.admin (
  id         bigint generated always as identity primary key,
  username   text        not null unique,
  password   text        not null,
  created_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.admin enable row level security;

-- Allow the anon key to SELECT (needed for login credential check)
do $$
begin
  if not exists (
    select 1 from pg_policies
    where tablename = 'admin' and policyname = 'Allow anon login check'
  ) then
    execute $p$
      create policy "Allow anon login check"
        on public.admin
        for select
        to anon
        using (true)
    $p$;
  end if;
end $$;

-- Default admin credentials (change the password after first login)
insert into public.admin (username, password)
values ('admin', 'admin123')
on conflict (username) do nothing;


-- ─────────────────────────────────────────────────────────────
--  2.  FEEDBACK TABLE
--      Stores all citizen feedback submitted from the site
-- ─────────────────────────────────────────────────────────────

create table if not exists public.feedback (
  id            bigint generated always as identity primary key,
  name          text,
  rating        int          check (rating is null or (rating >= 1 and rating <= 5)),
  feedback_type text,
  message       text,
  language      text         not null default 'en',
  anonymous     boolean      not null default false,
  created_at    timestamptz  not null default now()
);

-- Enable Row Level Security
alter table public.feedback enable row level security;

-- Allow anyone (anon) to INSERT — citizens submitting feedback
do $$
begin
  if not exists (
    select 1 from pg_policies
    where tablename = 'feedback' and policyname = 'Allow anon insert'
  ) then
    execute $p$
      create policy "Allow anon insert"
        on public.feedback
        for insert
        to anon
        with check (true)
    $p$;
  end if;
end $$;

-- Allow anon to SELECT — admin dashboard reads feedback
do $$
begin
  if not exists (
    select 1 from pg_policies
    where tablename = 'feedback' and policyname = 'Allow anon select'
  ) then
    execute $p$
      create policy "Allow anon select"
        on public.feedback
        for select
        to anon
        using (true)
    $p$;
  end if;
end $$;

-- Allow anon to DELETE — admin can remove entries
do $$
begin
  if not exists (
    select 1 from pg_policies
    where tablename = 'feedback' and policyname = 'Allow anon delete'
  ) then
    execute $p$
      create policy "Allow anon delete"
        on public.feedback
        for delete
        to anon
        using (true)
    $p$;
  end if;
end $$;


-- ─────────────────────────────────────────────────────────────
--  3.  INDEXES (for fast queries)
-- ─────────────────────────────────────────────────────────────

create index if not exists feedback_created_at_idx
  on public.feedback (created_at desc);

create index if not exists feedback_language_idx
  on public.feedback (language);


-- ─────────────────────────────────────────────────────────────
--  4.  VERIFY (run after setup to confirm tables exist)
-- ─────────────────────────────────────────────────────────────
--  select * from public.admin;
--  select count(*) from public.feedback;
-- =============================================================
