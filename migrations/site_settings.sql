CREATE TABLE IF NOT EXISTS site_settings (
  `key` VARCHAR(64) PRIMARY KEY,
  `value` TEXT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO site_settings (`key`, `value`) VALUES
  ('whatsapp_url', 'https://whatsapp.com/channel/0029Vau65i559PwXFHxG9s2g'),
  ('instagram_url', 'https://www.instagram.com/busrabalcik'),
  ('tiktok_url', 'https://www.tiktok.com/@deppworth'),
  ('wattpad_url', 'https://www.wattpad.com/user/deppworth/conversations')
ON DUPLICATE KEY UPDATE `key` = `key`;
