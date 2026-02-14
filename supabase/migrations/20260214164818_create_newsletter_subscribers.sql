/*
  # Create newsletter subscribers table

  1. New Tables
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique) - subscriber email
      - `language` (text) - preferred language
      - `source_page` (text) - where they signed up
      - `created_at` (timestamptz) - signup timestamp

  2. Security
    - Enable RLS
    - Allow anonymous inserts for public signups
    - Allow authenticated reads for admin
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  language text NOT NULL DEFAULT 'en',
  source_page text NOT NULL DEFAULT '/',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view subscribers"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);
