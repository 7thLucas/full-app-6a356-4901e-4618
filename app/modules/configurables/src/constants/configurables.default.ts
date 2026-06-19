/*
 * Default Configurable Data — seeded into Mongo on first boot.
 *
 * BEFORE EDITING: read ./RULES.md (especially R5: schema and defaults must
 * stay in sync) and ./configurables.schema.ts. For per-type schema and
 * default-value samples, see RULES.md §5 "Field Type Reference".
 */

export type TBrandColor = {
  primary: string;
  secondary: string;
  accent: string;
};

export type TPlayerConfig = {
  name: string;
  color: string;
};

export type TDefaultConfigurableData = {
  appName: string;
  logoUrl: string;
  brandColor: TBrandColor;
  gameTitle?: string;
  playerX?: TPlayerConfig;
  playerO?: TPlayerConfig;
};

export const defaultConfigurablesData: TDefaultConfigurableData = {
  appName: "FILL_APP_NAME_HERE",
  logoUrl: "FILL_LOGO_URL_HERE",
  brandColor: {
    primary: "FILL_PRIMARY_COLOR_HERE",
    secondary: "FILL_SECONDARY_COLOR_HERE",
    accent: "FILL_ACCENT_COLOR_HERE",
  },
  gameTitle: "Tic Tac Toe",
  playerX: {
    name: "Player X",
    color: "#6366f1",
  },
  playerO: {
    name: "Player O",
    color: "#f43f5e",
  },
  // ─────────────────────────────────────────────────────────────────────
  // Add new field defaults here. See RULES.md §5 for per-type shape.
  // Required branding fields → use the FILL_X_HERE placeholder pattern.
  // Optional/typed defaults → real value with a "// fill it here" comment:
  //
  //   maxItemsPerPage: 12,                     // fill it here
  //   enableNotifications: true,               // fill it here
  //   featuredCategories: [],                  // fill it here
  //   defaultLanguage: "en",                   // must match enum options
  //   launchDate: "2025-01-01T00:00:00.000Z",  // ISO-8601
  //   heroImage: "",                           // resolved URL after upload
  //   galleryImages: [],                       // array of resolved URLs
  // ─────────────────────────────────────────────────────────────────────
};
