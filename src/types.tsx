import { StatusType } from "utilities/utils";

export type AppToken = {
  identity: Identity;
  id: number;
  expiration: string;
  created: string;
  revoked: boolean;
  role: string;
};

export type AuthenticationMethod = {
  id: number;
  type: string;
  enabled: boolean;
};

export type Dashboard = {
  id: number;
  baseUrl: string;
  description?: string;
  dashboardFramework: DashboardFramework;
  environment: string;
  name: string;
  content: string;
  status: StatusType;
  role?: Role["name"];
  filePath: string;
  authenticated: boolean;
  disableAutoStart: boolean;
  autoReload: boolean;
  notes?: string;
  tags?: Tag[];
  processId?: number;
  processName?: string;
  dashboardComponents?: DashboardComponent[];
};

export type DashboardLog = {
  id: number;
  log: string;
};

export type DashboardDiagnostics = {
  memory: number;
  memoryHistory: number[];
  sessions: Array<DashboardSession>;
  endpoints: Array<DashboardEndpoint>;
};

export type DashboardEndpoint = {
  id: string;
  averageExecutionTime: number;
};

export type DashboardFramework = {
  id: number;
  name: string;
  version: string;
  path: string;
};

export type DashboardComponent = {
  id: number;
  name: string;
  version: string;
  path: string;
};

export type DashboardMarketplaceOverview = {
  newPackages?: Array<DashboardMarketplaceModule>;
  mostDownloadedPackages?: Array<DashboardMarketplaceModule>;
};

export type DashboardMarketplaceBrowsePage = {
  modules?: Array<DashboardMarketplaceModule>;
  currentPage: number;
  totalPages: number;
  type: string;
  orderBy: string;
  totalItems: number;
};

export type DashboardMarketplaceModule = {
  id: number;
  nuGetId: string;
  version: string;
  projectUrl: string;
  title: string;
  tags: string;
  summary: string;
  requireLicenseAcceptance: boolean;
  owners: string;
  published: string;
  reportAbuseUrl: string;
  licenseUrl: string;
  iconUrl: string;
  downloadCount: number;
  description: string;
  authors: string;
  readme: string;
  type: MarketplaceModuleType;
};

export type Environment = {
  id: number;
  name: string;
  path: string;
  arguments?: Array<string>;
  modules?: Array<string>;
  variables: Array<string>;
};

export enum MarketplaceModuleType {
  Dashboard,
  Control,
  GitHubRepo,
  Tool,
}

export type DashboardSession = {
  id: string;
  lastTouched: string;
  userName: string;
  endpoints: Array<DashboardEndpoint>;
};

export type Endpoint = {
  id?: number;
  url?: string;
  method?: string;
  scriptBlock?: string;
  authentication?: boolean;
  role?: string;
  regEx?: boolean;
  parts?: Part[];
};

export type Part = {
  isVariable: boolean;
  value: string;
};

export enum Feature {
  Api = 0,
  Automation = 1,
  Dashboard = 2,
}

export type License = {
  id: number;
  product: string;
  startDate: string;
  endDate: string;
  licensee: string;
  seats: number;
  licenseText: string;
};

export type LicenseStatus = {
  product: string;
  expired: boolean;
  licensed: boolean;
  seats: number;
};

export type Identity = {
  name: string;
  id: number;
  role?: Role;
};

export type PowerShellVersion = {
  id: number;
  version: string;
  path: string;
};

export type RateLimit = {
  endpoint: string;
  id?: number;
  limit: number;
  period: string;
};

export type Role = {
  name: string;
  description?: string;
  id: number;
};

export type Script = {
  name?: string;
  id?: number;
  content?: string;
  disableManualInvocation?: boolean;
  description?: string;
  createdTime?: string;
  fullPath?: string;
  errorAction?: number;
  requiredPowerShellVersion?: string;
  manualTime?: number;
  maxHistory?: number;
};

export type Settings = {
  rateLimitIpAddressAllowList?: Array<string>;
  rateLimitEndpointAllowList?: Array<string>;
  rateLimitClientAllowList?: Array<string>;
};

export type Stats = {
  jobsRunToday: number;
};

export type PublishedFolder = {
  id: number;
  path: string;
  requestPath: string;
  authentication: boolean;
  role: string;
};

export type Update = {
  version?: string;
  releaseDate?: string;
  winZipUrl?: string;
  winMsiUrl?: string;
  linuxZipUrl?: string;
  osxZipUrl?: string;
  windows?: boolean;
  linux?: boolean;
  osx?: boolean;
  notes?: string;
};

declare const ThemeModeTypes: ["default", "dark", "compact"];
export declare type ThemeModeType = typeof ThemeModeTypes[number];

export type Theme = {
  mode: ThemeModeType;
  color: string;
};

export type Variable = {
  id: number;
  name: string;
  value: string;
  type: string;
};

export type Tag = {
  id: number;
  color: string;
  label: string;
}