const { pool } = require("../config/database");

const DEFAULTS = {
  whatsapp_url: "https://whatsapp.com/channel/0029Vau65i559PwXFHxG9s2g",
  instagram_url: "https://www.instagram.com/busrabalcik",
  tiktok_url: "https://www.tiktok.com/@deppworth",
  wattpad_url: "https://www.wattpad.com/user/deppworth/conversations",
};

class SiteSettings {
  static async getAll() {
    const [rows] = await pool.execute("SELECT `key`, `value` FROM site_settings");
    const settings = { ...DEFAULTS };
    for (const row of rows) {
      settings[row.key] = row.value;
    }
    return settings;
  }

  static async setMany(entries) {
    const keys = Object.keys(entries).filter((key) =>
      Object.prototype.hasOwnProperty.call(DEFAULTS, key)
    );

    for (const key of keys) {
      await pool.execute(
        "INSERT INTO site_settings (`key`, `value`) VALUES (?, ?) ON DUPLICATE KEY UPDATE `value` = VALUES(`value`)",
        [key, entries[key] ?? ""]
      );
    }

    return this.getAll();
  }
}

module.exports = SiteSettings;
