-- ═══════════════════════════════════════════════════════════════════════════
-- KAMSON FINANCIAL SERVICES — Supabase Schema
-- Run this in the Supabase SQL editor to initialise the database.
-- ═══════════════════════════════════════════════════════════════════════════

-- ── LEADS ──────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS leads (
  id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  name         TEXT        NOT NULL,
  mobile       TEXT        NOT NULL,
  city         TEXT,
  loan_type    TEXT,
  amount       TEXT,
  message      TEXT,
  source_page  TEXT        DEFAULT 'homepage',
  status       TEXT        DEFAULT 'new'
                           CHECK (status IN ('new','contacted','in_progress','closed','not_interested')),
  assigned_rm  TEXT,
  remarks      TEXT,
  follow_up_at TIMESTAMPTZ,
  created_at   TIMESTAMPTZ DEFAULT now(),
  updated_at   TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_leads_status     ON leads(status);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_leads_mobile     ON leads(mobile);

-- ── PARTNER ENQUIRIES ──────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS partner_enquiries (
  id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT        NOT NULL,
  mobile          TEXT        NOT NULL,
  profession_type TEXT,
  city            TEXT,
  message         TEXT,
  status          TEXT        DEFAULT 'new'
                              CHECK (status IN ('new','contacted','onboarded','declined')),
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_partner_status ON partner_enquiries(status);

-- ── CMS: SITE SETTINGS (key-value for simple overrides) ───────────────────
CREATE TABLE IF NOT EXISTS site_settings (
  key        TEXT        PRIMARY KEY,
  value      TEXT        NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Seed with defaults
INSERT INTO site_settings (key, value) VALUES
  ('phone_display',     '+91 98XXX XXXXX'),
  ('phone_href',        'tel:+919XXXXXXXXX'),
  ('whatsapp_number',   '919XXXXXXXXX'),
  ('office_address',    '[Full Office Address], Delhi NCR'),
  ('google_place_id',   'PLACEHOLDER'),
  ('google_maps_url',   'https://maps.google.com'),
  ('hero_headline',     '35 Years of Solving <em>Complex Financing Problems.</em>'),
  ('trust_metric_financing', '₹5,000Cr+')
ON CONFLICT (key) DO NOTHING;

-- ── CMS: TRUST METRICS ─────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS trust_metrics (
  id         SERIAL      PRIMARY KEY,
  value      TEXT        NOT NULL,
  label      TEXT        NOT NULL,
  sort_order INT         DEFAULT 0,
  is_active  BOOLEAN     DEFAULT true,
  updated_at TIMESTAMPTZ DEFAULT now()
);

INSERT INTO trust_metrics (value, label, sort_order) VALUES
  ('35+',        'Years in Business',       1),
  ('34+',        'Banking Partners',         2),
  ('₹5,000Cr+', 'Financing Facilitated',    3),
  ('10,000+',   'Customers Assisted',        4),
  ('Delhi NCR', 'Deep Local Expertise',      5);

-- ── CMS: TRANSACTION SHOWCASE ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS transactions (
  id          UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
  type        TEXT    NOT NULL,
  cap_label   TEXT    NOT NULL DEFAULT 'Facilities arranged up to',
  cap_amount  TEXT    NOT NULL,
  sort_order  INT     DEFAULT 0,
  is_active   BOOLEAN DEFAULT true
);

CREATE TABLE IF NOT EXISTS transaction_examples (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  transaction_id UUID REFERENCES transactions(id) ON DELETE CASCADE,
  profile        TEXT NOT NULL,
  amount         TEXT,
  sort_order     INT  DEFAULT 0
);

-- ── CMS: BANKING PARTNERS ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS banking_partners (
  id         UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
  name       TEXT    NOT NULL,
  logo_url   TEXT,
  sort_order INT     DEFAULT 0,
  is_active  BOOLEAN DEFAULT true
);

-- ── CMS: GOOGLE REVIEWS (for manual curation) ─────────────────────────────
CREATE TABLE IF NOT EXISTS reviews (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  reviewer_name TEXT        NOT NULL,
  initials      TEXT        NOT NULL,
  avatar_color  TEXT        DEFAULT '#4285F4',
  review_date   TEXT,
  review_text   TEXT        NOT NULL,
  loan_tag      TEXT,
  is_featured   BOOLEAN     DEFAULT false,
  sort_order    INT         DEFAULT 0,
  created_at    TIMESTAMPTZ DEFAULT now()
);

-- ── FUTURE: PARTNER PORTAL ─────────────────────────────────────────────────
-- Architecture is in place; portal tables will be added in Phase 2.
-- Tables planned: partners, partner_leads, commissions, documents.

-- ── ROW LEVEL SECURITY ─────────────────────────────────────────────────────
ALTER TABLE leads               ENABLE ROW LEVEL SECURITY;
ALTER TABLE partner_enquiries   ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings       ENABLE ROW LEVEL SECURITY;
ALTER TABLE trust_metrics       ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions        ENABLE ROW LEVEL SECURITY;
ALTER TABLE banking_partners    ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews             ENABLE ROW LEVEL SECURITY;

-- Public: allow inserts for leads and partner enquiries (anon users = website visitors)
CREATE POLICY "Allow public lead insert"
  ON leads FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow public partner insert"
  ON partner_enquiries FOR INSERT TO anon WITH CHECK (true);

-- Public: allow reads for CMS content (site settings, metrics, etc.)
CREATE POLICY "Allow public read site_settings"
  ON site_settings FOR SELECT TO anon USING (true);

CREATE POLICY "Allow public read trust_metrics"
  ON trust_metrics FOR SELECT TO anon USING (is_active = true);

CREATE POLICY "Allow public read transactions"
  ON transactions FOR SELECT TO anon USING (is_active = true);

CREATE POLICY "Allow public read banking_partners"
  ON banking_partners FOR SELECT TO anon USING (is_active = true);

CREATE POLICY "Allow public read reviews"
  ON reviews FOR SELECT TO anon USING (true);

-- Service role has full access (used by API routes with service key)
-- No additional policies needed — service role bypasses RLS.

-- ── UPDATED_AT TRIGGER ─────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at_leads
  BEFORE UPDATE ON leads
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER set_updated_at_partner_enquiries
  BEFORE UPDATE ON partner_enquiries
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
