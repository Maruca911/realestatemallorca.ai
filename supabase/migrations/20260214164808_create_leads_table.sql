/*
  # Create leads table for property matching requests

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `name` (text) - contact name
      - `email` (text) - contact email
      - `phone` (text, nullable) - contact phone
      - `contact_method` (text) - preferred: email or whatsapp
      - `property_type` (text) - short-term, long-term, villa, finca, apartment, investment
      - `location_preference` (text) - Palma, Alcudia, etc.
      - `budget_min` (integer, nullable) - minimum budget
      - `budget_max` (integer, nullable) - maximum budget
      - `bedrooms` (integer, nullable) - desired bedrooms
      - `timeline` (text, nullable) - when they need the property
      - `message` (text, nullable) - additional notes
      - `language` (text) - en, de, es
      - `source_page` (text) - which page the lead came from
      - `utm_source` (text, nullable) - campaign tracking
      - `utm_medium` (text, nullable) - campaign tracking
      - `utm_campaign` (text, nullable) - campaign tracking
      - `created_at` (timestamptz) - submission timestamp

  2. Security
    - Enable RLS on `leads` table
    - Add policy for anonymous users to insert leads (public form submissions)
    - Add policy for authenticated users to read leads (admin access)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  email text NOT NULL,
  phone text,
  contact_method text NOT NULL DEFAULT 'email',
  property_type text NOT NULL DEFAULT 'short-term',
  location_preference text NOT NULL DEFAULT '',
  budget_min integer,
  budget_max integer,
  bedrooms integer,
  timeline text,
  message text,
  language text NOT NULL DEFAULT 'en',
  source_page text NOT NULL DEFAULT '/',
  utm_source text,
  utm_medium text,
  utm_campaign text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);
