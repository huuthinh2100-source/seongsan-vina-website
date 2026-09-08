do $$
declare previous_check text;
begin
 select with_check into previous_check from pg_policies where schemaname='public' and tablename='leads' and policyname='public can submit lead';
 if previous_check is null then raise exception 'Expected existing leads policy was not found'; end if;
 if position('site IS DISTINCT FROM' in previous_check)=0 then
 execute 'alter policy "public can submit lead" on public.leads with check ((' || previous_check || ') AND (site IS DISTINCT FROM ''seongsan''))';
 end if;
end $$;
create table if not exists public.seongsan_notification_outbox (
 lead_id uuid primary key references public.leads(id) on delete cascade,
 status text not null default 'pending' check(status in ('pending','sent','failed')),
 created_at timestamptz not null default now(),
 sent_at timestamptz
);
alter table public.seongsan_notification_outbox enable row level security;
revoke all on public.seongsan_notification_outbox from anon, authenticated;
grant all on public.seongsan_notification_outbox to service_role;
