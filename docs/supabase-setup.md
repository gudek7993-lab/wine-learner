# Supabase + Google 로그인 설정 (한 번, 약 15분)

이 설정을 마치면 휴대폰과 데스크톱이 같은 학습 기록(복습 카드, 모의고사 결과, 서술형 답안, 시험일)을 씁니다.
설정 전에도 앱은 기기 저장으로 그대로 동작합니다.

## 1. Supabase 프로젝트 만들기

1. https://supabase.com 에 GitHub 계정으로 가입합니다.
2. **New project**를 누릅니다.
   - 이름: `wine-learner`
   - Database password: 아무 강한 비밀번호. 앱에서는 쓰지 않습니다.
   - Region: **Northeast Asia (Seoul)**
3. 프로젝트가 만들어질 때까지 1~2분 기다립니다.

## 2. 테이블 만들기

왼쪽 메뉴 **SQL Editor**에서 아래를 붙여넣고 **Run**을 누릅니다.

```sql
create table public.user_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.user_state enable row level security;

create policy "read own row" on public.user_state
  for select using (auth.uid() = user_id);
create policy "insert own row" on public.user_state
  for insert with check (auth.uid() = user_id);
create policy "update own row" on public.user_state
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
```

행 수준 보안(RLS) 덕분에 로그인한 본인 행만 읽고 쓸 수 있습니다.

## 3. Google 로그인 키 만들기 (Google Cloud Console)

1. https://console.cloud.google.com 에서 새 프로젝트를 만듭니다(이름: `wine-learner`).
2. **APIs & Services → OAuth consent screen**
   - User type: **External**
   - 앱 이름, 지원 이메일, 개발자 이메일만 입력하고 저장합니다.
   - **Audience**(또는 Test users)에서 본인 Gmail을 테스트 사용자로 추가합니다.
     본인만 쓰는 앱이라 게시(Publish)하지 않아도 됩니다.
3. **APIs & Services → Credentials → Create credentials → OAuth client ID**
   - Application type: **Web application**
   - **Authorized redirect URIs**에 추가:
     `https://<프로젝트 ref>.supabase.co/auth/v1/callback`
     (Supabase의 Authentication → Sign In / Providers → Google 화면에 이 주소가 그대로 나옵니다. 복사해서 붙이세요.)
4. 만들어진 **Client ID**와 **Client secret**을 복사해 둡니다.

## 4. Supabase에 Google 연결

1. Supabase **Authentication → Sign In / Providers → Google**을 켜고, 3번의 Client ID와 Client secret을 붙여넣고 저장합니다.
2. **Authentication → URL Configuration**
   - Site URL: `https://gudek7993-lab.github.io/wine-learner/`
   - Redirect URLs에 추가:
     - `https://gudek7993-lab.github.io/wine-learner/**`
     - `http://localhost:3000/**` (로컬 개발용)

## 5. 앱에 넣을 값 두 개

Supabase **Project Settings → API**(또는 API Keys)에서 아래 두 값을 복사해 Claude에게 보내 주세요.

- **Project URL**: `https://xxxx.supabase.co`
- **anon (public) key**: `eyJ...`로 시작하는 긴 문자열 (새 화면에서는 publishable key, `sb_publishable_...`)

이 두 값은 공개되어도 괜찮도록 설계된 값입니다. 데이터는 2번의 RLS 정책이 보호합니다.
**service_role / secret key는 보내지 마세요.** 그 키는 모든 데이터에 접근할 수 있습니다.

값이 들어가면 `src/lib/supabase-config.ts`에 넣고 배포합니다. 그 뒤 사이트 맨 아래에
"Google로 로그인해 동기화" 버튼이 나타납니다. 휴대폰과 데스크톱에서 한 번씩 로그인하면 끝입니다.

## 6. AI 서술형 채점 (Edge Function `mark`)

- 코드: `supabase/functions/mark/index.ts` (Claude Sonnet 5.5, 하루 40회 제한, 로그인 필수)
- 모델 선택 근거: `npx tsx scripts/compare-markers.mts` (Opus 5.5, Sonnet 5.5, Haiku 5.5, Gemini 비교)
- 비밀값: Supabase Edge Functions → Secrets의 `ANTHROPIC_API_KEY`
- 사용 기록 테이블: `ai_mark_log` (RLS 켜짐, 정책 없음: 함수만 접근)

함수를 고친 뒤 다시 배포하려면:

1. https://supabase.com/dashboard/account/tokens 에서 만료가 짧은 토큰을 만들고 `.env.local`에 `SUPABASE_ACCESS_TOKEN=...`으로 넣습니다.
2. `SUPABASE_ACCESS_TOKEN`을 환경 변수로 두고 실행합니다:
   `npx supabase functions deploy mark --project-ref qfdxszjccfrrcuyojtdf --use-api`
3. 배포가 끝나면 토큰을 삭제합니다.
