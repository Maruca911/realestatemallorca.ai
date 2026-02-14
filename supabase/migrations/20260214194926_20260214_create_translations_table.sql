/*
  # Create translations and language metadata tables

  1. New Tables
    - `languages` - Supported languages with metadata
    - `translations` - Key-based translation storage for all content
      - id (uuid, primary key)
      - language_code (text, foreign key to languages)
      - translation_key (text) - unique identifier for content
      - value (text) - translated content
      - context (text) - page/component context
      - created_at (timestamp)
      - updated_at (timestamp)

  2. Indexes
    - Composite index on (language_code, translation_key) for efficient lookups
    - Index on context for filtering by page

  3. Security
    - Enable RLS on translations table
    - Add policy for public read access (translations are public content)
*/

CREATE TABLE IF NOT EXISTS languages (
  code text PRIMARY KEY,
  name_en text NOT NULL,
  name_local text NOT NULL,
  native_name text NOT NULL,
  region text,
  enabled boolean DEFAULT true,
  display_order integer,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS translations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  language_code text NOT NULL REFERENCES languages(code) ON DELETE CASCADE,
  translation_key text NOT NULL,
  value text NOT NULL,
  context text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(language_code, translation_key)
);

CREATE INDEX idx_translations_lookup ON translations(language_code, translation_key);
CREATE INDEX idx_translations_context ON translations(context);

ALTER TABLE languages ENABLE ROW LEVEL SECURITY;
ALTER TABLE translations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Languages are publicly readable"
  ON languages FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Translations are publicly readable"
  ON translations FOR SELECT
  TO public
  USING (true);

INSERT INTO languages (code, name_en, name_local, native_name, region, display_order) VALUES
  ('en', 'English', 'English', 'English', 'US', 1),
  ('de', 'German', 'Deutsch', 'Deutsch', 'DE', 2),
  ('es', 'Spanish', 'Español', 'Español', 'ES', 3),
  ('fr', 'French', 'Français', 'Français', 'FR', 4),
  ('nl', 'Dutch', 'Nederlands', 'Nederlands', 'NL', 5),
  ('it', 'Italian', 'Italiano', 'Italiano', 'IT', 6),
  ('sv', 'Swedish', 'Svenska', 'Svenska', 'SE', 7),
  ('no', 'Norwegian', 'Norsk', 'Norsk', 'NO', 8),
  ('da', 'Danish', 'Dansk', 'Dansk', 'DK', 9),
  ('pl', 'Polish', 'Polski', 'Polski', 'PL', 10),
  ('ru', 'Russian', 'Русский', 'Русский', 'RU', 11),
  ('ar', 'Arabic', 'العربية', 'العربية', 'SA', 12)
ON CONFLICT DO NOTHING;
