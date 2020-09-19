
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
  dashboardFramework: DashboardFramework;
  powerShellVersion: PowerShellVersion;
  name: string;
  content: string;
  description: string;
  status: number;
  filePath: string;
  authenticated: boolean;
  disableAutoStart: boolean;
  autoReload: boolean;
  notes: string;
  processId: number;
  processName: string;
  dashboardComponents: DashboardComponent[];
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

export type DashboardFramework = Partial<{
  id: number;
  name: string;
  version: string;
  path: string;
}>;

export type DashboardComponent = {
  id?: number;
  name: string;
  version: string;
  path: string;
};

export type DashboardMarketplaceStatistics = {
  id: number;
  timestamp: string;
  totalModules: number;
  totalTools: number;
  totalControls: number;
  totalDashboards: number;
  totalDownloads: number;
};

export type DashboardMarketplaceOverview = {
  newPackages?: Array<DashboardMarketplaceModule>;
  mostDownloadedPackages?: Array<DashboardMarketplaceModule>;
  lastThirdyDaysStatistics?: Array<DashboardMarketplaceStatistics>;
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
  id: number;
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

export type PowerShellVersion = Partial<{
  id: number;
  version: string;
  path: string;
}>;

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

export type Computer = { id: number; name: any };

export type Job = {
  activity: string;
  agent: any;
  appToken: AppToken;
  children: any;
  computer: Computer;
  computerName: string;
  createdTime: string;
  credential: null;
  currentOperation: any;
  debug: boolean;
  endTime: string;
  errorAction: number;
  identity: Identity;
  id: number;
  name: string;
  role: Role;
  source: number;
  jobOutput: { id: number; log: string };
  notes: string | undefined;
  output: null;
  parameters: any;
  parentJob: any;
  parentLineNumber: number;
  percentComplete: number;
  port: number;
  powerShellVersion: PowerShellVersion["version"];
  processId: number | undefined;
  runspaceId: number | undefined;
  script: Script;
  scriptCommitId: string | undefined;
  secondsRemaining: number;
  startTime: string;
  status: number;
  statusDescription: string;
};

export type JobDayHistory = {
  count: number;
  jobDay: string;
};

export type ScriptJobDayHistory = {
  count: number;
  jobDay: string;
  scriptId: number;
};

export type Stats = {
  id: number;
  jobDayHistory: Array<JobDayHistory>;
  jobsFailedAllTime: number;
  jobsFailedToday: number;
  jobsRunAllTime: number;
  jobsRunToday: number;
  jobsSuccessAllTime: number;
  jobsWaitingOnFeedback: number;
  last10Jobs: Array<Job>;
  last10JobsWaitingOnFeedback: Array<Job>;
  manualJobsExecuted: number;
  runningJobs: number;
  scheduledJobsExecuted: number;
  scriptJobDayHistory: Array<ScriptJobDayHistory>;
  timeSavedSeconds: number;
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

declare const ThemeModeTypes: ["light", "dark"];
export declare type ThemeModeType = typeof ThemeModeTypes[number];

export type Theme = {
  mode: ThemeModeType;
  color: string;
};

export type Accessible =
  | {
      username: string;
      roles: Array<string>;
    }
  | { redirecting: boolean };
