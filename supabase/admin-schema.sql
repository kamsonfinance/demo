-- ═══════════════════════════════════════════════════════════════════════════
-- KAMSON ADMIN PANEL — Database Schema (run after schema.sql)
-- ═══════════════════════════════════════════════════════════════════════════

-- ── ADMIN USER PROFILES ───────────────────────────────────────────────────
-- Links to Supabase Auth users, stores role
CREATE TABLE IF NOT EXISTS admin_profiles (
  id         UUID        PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email      TEXT        NOT NULL,
  full_name  TEXT,
  role       TEXT        NOT NULL DEFAULT 'admin'
                         CHECK (role IN ('super_admin', 'admin')),
  is_active  BOOLEAN     DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ── SERVICES ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS services (
  id          UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT    NOT NULL,
  description TEXT,
  icon        TEXT,
  category    TEXT    DEFAULT 'loan' CHECK (category IN ('loan', 'insurance')),
  href        TEXT,
  sort_order  INT     DEFAULT 0,
  is_active   BOOLEAN DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);

INSERT INTO services (name, category, sort_order, is_active) VALUES
  ('Home Loans',                 'loan',      1, true),
  ('Business Loans',             'loan',      2, true),
  ('Loan Against Property',      'loan',      3, true),
  ('Working Capital Finance',    'loan',      4, true),
  ('Construction Finance',       'loan',      5, true),
  ('Commercial Property Finance','loan',      6, true),
  ('Health Insurance',           'insurance', 1, true),
  ('Life Insurance',             'insurance', 2, true),
  ('General Insurance',          'insurance', 3, true);

-- ── TESTIMONIALS ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS testimonials (
  id           UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
  name         TEXT    NOT NULL,
  designation  TEXT,
  category     TEXT,          -- e.g. 'Business Owner', 'Doctor', 'CA Referred'
  quote        TEXT    NOT NULL,
  loan_tag     TEXT,          -- e.g. 'Business Loan · ₹90L'
  image_url    TEXT,
  initials     TEXT,
  avatar_color TEXT    DEFAULT '#4285F4',
  review_date  TEXT,
  is_featured  BOOLEAN DEFAULT false,
  is_active    BOOLEAN DEFAULT true,
  sort_order   INT     DEFAULT 0,
  source       TEXT    DEFAULT 'direct' CHECK (source IN ('google', 'direct', 'whatsapp')),
  created_at   TIMESTAMPTZ DEFAULT now(),
  updated_at   TIMESTAMPTZ DEFAULT now()
);

-- ── TRANSACTION SHOWCASE ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS transaction_showcase (
  id          UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
  type        TEXT    NOT NULL,
  cap_label   TEXT    NOT NULL DEFAULT 'Facilities arranged up to',
  cap_amount  TEXT    NOT NULL,
  sort_order  INT     DEFAULT 0,
  is_active   BOOLEAN DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS transaction_examples (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  transaction_id UUID REFERENCES transaction_showcase(id) ON DELETE CASCADE,
  profile        TEXT NOT NULL,
  amount         TEXT,
  sort_order     INT  DEFAULT 0
);

-- ── AUDIT LOG ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS audit_log (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
  user_email  TEXT,
  action      TEXT        NOT NULL,   -- 'create' | 'update' | 'delete' | 'login'
  table_name  TEXT,
  record_id   TEXT,
  old_values  JSONB,
  new_values  JSONB,
  ip_address  TEXT,
  created_at  TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_audit_log_created ON audit_log(created_at DESC);
CREATE INDEX idx_audit_log_user    ON audit_log(user_id);

-- ── EXTEND SITE_SETTINGS with new keys ────────────────────────────────────
INSERT INTO site_settings (key, value) VALUES
  ('hero_headline',       '35 Years of Solving <em>Complex Financing Problems.</em>'),
  ('hero_subheading',     'Kamson helps families, professionals and businesses secure the right loan and insurance solutions through a network of 34+ banks, NBFCs and insurance partners.'),
  ('hero_cta_primary',    'Call Us Now'),
  ('hero_cta_secondary',  'WhatsApp Us'),
  ('founder_name',        'Madhu Sagar Adlakha'),
  ('founder_designation', 'Founder & Director · Kamson Financial Services'),
  ('founder_story_1',     'In 1988, Madhu Sagar Adlakha founded Kamson on a single conviction — that individuals and businesses deserve the same quality of financial access that large institutions receive.'),
  ('founder_story_2',     'The experience accumulated at Kamson — the lender relationships, the process knowledge, the track record — is the product of three and a half decades of doing this work, case by case.'),
  ('founder_quote',       'Kamson was built on the belief that the right financial guidance, at the right time, changes outcomes.'),
  ('founder_image_url',   '/placeholders/founder.jpg'),
  ('contact_phone',       '+91 98XXX XXXXX'),
  ('contact_phone_href',  'tel:+919XXXXXXXXX'),
  ('contact_whatsapp',    '919XXXXXXXXX'),
  ('contact_email',       'info@kamsonfinancial.com'),
  ('contact_address',     '[Full Office Address], Delhi NCR'),
  ('contact_maps_url',    'https://maps.google.com'),
  ('seo_title',           'Kamson Financial Services | Trusted Loan & Insurance Solutions Since 1988'),
  ('seo_description',     'Kamson Financial Services offers home loans, business loans, LAP, working capital and insurance through a network of 34+ banks and NBFCs.')
ON CONFLICT (key) DO NOTHING;

-- ── ROW LEVEL SECURITY for new tables ─────────────────────────────────────
ALTER TABLE admin_profiles       ENABLE ROW LEVEL SECURITY;
ALTER TABLE services             ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials         ENABLE ROW LEVEL SECURITY;
ALTER TABLE transaction_showcase ENABLE ROW LEVEL SECURITY;
ALTER TABLE transaction_examples ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_log            ENABLE ROW LEVEL SECURITY;

-- Public can read active content
CREATE POLICY "public_read_services"
  ON services FOR SELECT TO anon USING (is_active = true);
CREATE POLICY "public_read_testimonials"
  ON testimonials FOR SELECT TO anon USING (is_active = true);
CREATE POLICY "public_read_transaction_showcase"
  ON transaction_showcase FOR SELECT TO anon USING (is_active = true);
CREATE POLICY "public_read_transaction_examples"
  ON transaction_examples FOR SELECT TO anon USING (true);

-- Admin profiles: users can read their own profile
CREATE POLICY "users_read_own_profile"
  ON admin_profiles FOR SELECT TO authenticated USING (auth.uid() = id);

-- Service role has full access to everything (bypasses RLS)

-- ── SUPABASE STORAGE BUCKETS ──────────────────────────────────────────────
-- Run these in the Supabase dashboard > Storage, or via the API:
-- CREATE BUCKET: 'cms-images' (public)
-- Folders inside: founder/, partners/, testimonials/, services/, general/

-- ── TRIGGERS ──────────────────────────────────────────────────────────────
CREATE TRIGGER set_updated_at_services
  BEFORE UPDATE ON services
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER set_updated_at_testimonials
  BEFORE UPDATE ON testimonials
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ── HELPER: Seed first super admin ────────────────────────────────────────
-- After creating your user in Supabase Auth dashboard, run:
-- INSERT INTO admin_profiles (id, email, full_name, role)
-- VALUES ('<your-auth-user-uuid>', 'admin@kamsonfinancial.com', 'Admin', 'super_admin');
