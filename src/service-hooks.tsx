// import React from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { queryCache, useMutation, useQuery } from "react-query";
import {
  Dashboard,
  DashboardComponent,
  DashboardDiagnostics,
  DashboardFramework,
  DashboardLog,
  Endpoint,
  Environment,
  Feature,
  License,
  Part,
  PowerShellVersion,
  RateLimit,
  Role,
  Settings,
  Variable,
} from "./types";

const url = `/api/v1`;

/*
    Helper Functions
*/

function getTimestamp() {
  var date = new Date();
  return date.getTime();
}

/* 
  React Query Custom Hooks
*/

//  Dashboard
export async function fetchDashboard(id: number): Promise<Dashboard> {
  const dashboards:  { Dashboards: Dashboard[] } = await axios
    .get(`https://raw.githubusercontent.com/AlonGvili/psu/master/dashboards.json`)
    .then((res) => res.data);

  const result = dashboards.Dashboards.filter(dashboard => dashboard!.id === id)  
  return result[0]
}

export async function fetchDashboardLog(id: number): Promise<DashboardLog> {
  const logs = await axios
    .get(`https://raw.githubusercontent.com/AlonGvili/psu/master/logs.json`)
    .then((res) => res.data);

  queryCache.setQueryData(
    ["dashboard", { dashboardId: id, type: "log" }],
    logs.Logs
  );

  return logs.Logs;
}

export async function fetchDashboards(): Promise<Dashboard[]> {
  const dashboards = await axios
    .get(`https://raw.githubusercontent.com/AlonGvili/psu/master/dashboards.json`)
    .then((res) => res.data);

  dashboards.Dashboards.forEach((dashboard: Dashboard) => {
    queryCache.setQueryData(
      ["dashboard", { dashboardId: dashboard.id }],
      dashboard
    );
  });

  return dashboards.Dashboards;
}

export function useDashboards() {
  return useQuery("dashboards", fetchDashboards, {
    onError: (error: AxiosError) => error,
    suspense: true,
  });
}

export function useUpdateDashboard() {
  return useMutation(
    (dashboard: Partial<Dashboard> | undefined) =>
      axios
        .put(`${url}/dashboard/${dashboard?.id}`, dashboard)
        .then((res: AxiosResponse<Dashboard>) => res.data),
    {
      onMutate: (dashboard) => {
        queryCache.cancelQueries(["dashboard", { dashboardId: dashboard?.id }]);

        const oldDashboard: Dashboard | undefined = queryCache.getQueryData<
          Dashboard
        >(["dashboard", { dashboardId: dashboard?.id }]);

        return () =>
          queryCache.setQueryData(
            ["dashboard", { dashboardId: dashboard?.id }],
            oldDashboard
          );
      },

      onError: (error, dashboard, rollback: () => void) => {
        if (rollback) {
          rollback();
        }
      },

      onSuccess: (data, dashboard) => {
        queryCache.setQueryData(
          ["dashboard", { dashboardId: dashboard?.id }],
          (old: Dashboard | undefined) => ({
            ...old,
            ...data,
          })
        );
        queryCache.invalidateQueries([
          "dashboard",
          { dashboardId: dashboard?.id },
        ]);
      },
    }
  );
}

export function useDeleteDashboard() {
  return useMutation(
    (dashboardId: number) =>
      axios.delete(`${url}/dashboard/${dashboardId}`).then((res) => res.data),
    {
      onMutate: (dashboardId) => {
        queryCache.cancelQueries(["dashboard", { dashboardId: dashboardId }]);

        const oldDashboards: Dashboard[] | undefined = queryCache.getQueryData<
          Dashboard[]
        >("dashboards");

        queryCache.setQueryData<Dashboard[] | undefined>(
          "dashboards",
          (old) => {
            return old?.filter((dashboard) => dashboard.id !== dashboardId);
          }
        );

        return () => queryCache.setQueryData("dashboards", oldDashboards);
      },
      onError: (error, dashboardId, rollback: () => void) => {
        if (rollback) {
          rollback();
        }
      },
      onSuccess: (data, dashboardId) => {
        queryCache.removeQueries(["dashboard", { dashboardId: dashboardId }]);
        queryCache.invalidateQueries("dashboards");
        queryCache.invalidateQueries("diagnostics");
      },
    }
  );
}

export function useStartDashboard() {
  return useMutation(
    (dashboardId: number) =>
      axios
        .put(`${url}/dashboard/${dashboardId}/status`)
        .then((res: AxiosResponse<Dashboard>) => res.data),
    {
      onError: (error: AxiosError) =>
        console.log("Start Dashboard Error", error?.response?.data?.message),
      onSuccess: (data, dashboardId) => {
        queryCache.setQueryData(
          ["dashboard", { dashboardId: dashboardId }],
          data
        );
        queryCache.invalidateQueries([
          "dashboard",
          { dashboardId: dashboardId },
        ]);
        queryCache.invalidateQueries("dashboards");
        queryCache.invalidateQueries("diagnostics");
      },
    }
  );
}

export function useStopDashboard() {
  return useMutation(
    (dashboardId: number) =>
      axios
        .delete(`${url}/dashboard/${dashboardId}/status`)
        .then((res: AxiosResponse<Dashboard>) => res.data),
    {
      onError: (error: AxiosError) =>
        console.log("Stop Dashboard Error", error?.response?.data.message),
      onSuccess: (data, dashboardId) => {
        queryCache.invalidateQueries([
          "dashboard",
          { dashboardId: dashboardId },
        ]);
        queryCache.invalidateQueries("dashboards");
        queryCache.invalidateQueries("diagnostics");
      },
    }
  );
}

export function useDashboard(id: number) {
  return useQuery(["dashboard", { dashboardId: id }], () => fetchDashboard(id));
}

export function useDashboardLog(id: number) {
  return useQuery(["dashboard", { dashboardId: id, type: "log" }], () =>
    fetchDashboardLog(id)
  );
}

export function useDashboardsDiagnostics() {
  return useQuery(
    "dashboards-diag",
    async () => {
      return await axios
        .get(`${url}/dashboard/diagnostics`)
        .then((res: AxiosResponse<DashboardDiagnostics>) => res.data);
    },
    {
      onError: (error: AxiosError) => {
        console.log(error?.message);
      },
    }
  );
}

export function useDashboardDiagnostics(
  id: number,
  isDashboardRunning: boolean
) {
  return useQuery(
    ["dashboard", { dashboardId: id, type: "diagnostics" }],
    async () => {
      return await axios
        .get(`${url}/dashboard/${id}/diagnostics`)
        .then((res: AxiosResponse<DashboardDiagnostics>) => res.data);
    },
    {
      enabled: isDashboardRunning,
      onError: (error: AxiosError) => {
        console.log(error?.message);
      },
    }
  );
}

export function useNewDashboard() {
  return useMutation(
    (dashboard: Dashboard) =>
      axios
        .post(`${url}/dashboard`, dashboard)
        .then((res: AxiosResponse<Dashboard>) => res.data)
        .catch((err) => console.log("failed", err.message)),
    {
      onMutate: (dashboard) => {
        queryCache.cancelQueries("dashboards");

        const oldDashboards: Dashboard[] | undefined = queryCache.getQueryData(
          "dashboards"
        );

        return () => queryCache.setQueryData("dashboards", oldDashboards);
      },
      onError: (error, dashboard, rollback: () => void) => {
        if (rollback) {
          rollback();
        }
      },
      onSuccess: () => {
        queryCache.invalidateQueries("dashboards");
        queryCache.invalidateQueries("diagnostics");
      },
    }
  );
}

export function useTotalSessions() {
  return useQuery(
    ["diagnostics", "totalSessions"],
    () => {
      return axios
        .get(`${url}/dashboard/diagnostics/sessions`)
        .then((res: AxiosResponse<number>) => res.data);
    },
    {
      onError: (error: AxiosError) => {
        console.log(error?.message);
      },
    }
  );
}

export function useTotalEndpoints() {
  return useQuery(
    ["diagnostics", "totalEndpoints"],
    () => {
      return axios
        .get(`${url}/dashboard/diagnostics/endpoints`)
        .then((res: AxiosResponse<number>) => res.data);
    },
    {
      onError: (error: AxiosError) => {
        console.log(error?.message);
      },
    }
  );
}

export function useTotalMemory() {
  return useQuery(
    ["diagnostics", "totalMemory"],
    () => {
      return axios
        .get(`${url}/dashboard/diagnostics/memory`)
        .then((res: AxiosResponse<number>) => res.data);
    },
    {
      onError: (error: AxiosError) => {
        console.log(error?.message);
      },
    }
  );
}

/*
    Components
*/

// Get all components
export async function fetchComponents(): Promise<DashboardComponent[]> {
  const components: { Components: DashboardComponent[] } = await axios
    .get(`https://raw.githubusercontent.com/AlonGvili/psu/master/components.json`)
    .then((res) => res.data);

  return components.Components;
}

export function useComponents() {
  return useQuery("components", fetchComponents);
}

/* 
    Frameworks
*/

// Get all frameworks
export async function fetchFrameworks(): Promise<DashboardFramework[]> {
  const frameworks = await axios
    .get(`https://raw.githubusercontent.com/AlonGvili/psu/master/frameworks.json`)
    .then((res) => res.data);

  return frameworks.Frameworks;
}

export function useFrameworks() {
  return useQuery("frameworks", fetchFrameworks);
}

// Get the newest framework.
export async function fetchNewestFramework() {
  const newestFramework = await axios
    .get(`https://raw.githubusercontent.com/AlonGvili/psu/master/newestframework.json`)
    .then((res) => res.data);

  return newestFramework.NewestFramework;
}

export function useNewestFramework() {
  return useQuery(["frameworks", "latest"], fetchNewestFramework);
}

// Add new framework.
export function useNewFramework() {
  return useMutation(
    (framework: DashboardFramework) =>
      axios
        .post(`${url}/dashboardframework`, framework)
        .then((res) => res.data),
    {
      onMutate: (framework) => {
        queryCache.cancelQueries("frameworks");

        const oldFrameworks:
          | DashboardFramework[]
          | undefined = queryCache.getQueryData("frameworks");

        return () => queryCache.setQueryData("frameworks", oldFrameworks);
      },
      onError: (error, dashboard, rollback: () => void) => {
        if (rollback) {
          rollback();
        }
      },
      onSuccess: () => {
        queryCache.invalidateQueries("frameworks");
      },
    }
  );
}

// Delete framework
export function useDeleteFramework() {
  return useMutation(
    (frameworkId: number) =>
      axios
        .delete(`${url}/dashboardframework/${frameworkId}`)
        .then((res) => res.data),
    {
      onMutate: (frameworkId) => {
        const oldFrameworks:
          | DashboardFramework[]
          | undefined = queryCache.getQueryData("frameworks");

        const tempFrameworks = oldFrameworks?.filter(
          (framework) => framework.id !== frameworkId
        );

        queryCache.setQueryData("dashboards", tempFrameworks);

        return () => queryCache.setQueryData("frameworks", oldFrameworks);
      },
      onError: (error, dashboardId, rollback: () => void) => {
        if (rollback) {
          rollback();
        }
      },
      onSuccess: () => {
        queryCache.invalidateQueries("frameworks");
      },
    }
  );
}

/*
    PowerShell
*/

// Get all powershell
export async function fetchPowerShell(): Promise<PowerShellVersion[]> {
  return await axios
    .get(`${url}/powerShellVersion?t=${getTimestamp()}`)
    .then((res: AxiosResponse<PowerShellVersion[]>) => res.data);
}

export function usePowerShell() {
  return useQuery("powershell", fetchPowerShell);
}

/*
    Api
*/

// APIs

export async function fetchEndpoints(): Promise<Endpoint[]> {
  const endpoints: Endpoint[] = await axios
    .get(`${url}/endpoint`)
    .then((res: AxiosResponse<Endpoint[]>) => res.data);

  endpoints.forEach((endpoint: Endpoint) => {
    queryCache.setQueryData(
      ["endpoint", { endpointId: endpoint.id }],
      endpoint
    );
  });

  return endpoints;
}

export async function fetchEndpointOutput(command: string) {
  console.log("command", command);
  let response = await axios.get(command).then((res) => res.data);

  return response;
}

export async function fetchEndpoint(id: number): Promise<Endpoint> {
  return await axios
    .get(`${url}/endpoint/${id}`)
    .then((res: AxiosResponse<Endpoint>) => res.data);
}

export async function fetchEndpointParts(id: number): Promise<Part[]> {
  return await axios
    .get(`${url}/endpoint/${id}/parts`)
    .then((res: AxiosResponse<Part[]>) => res.data);
}

export function useEndpoints() {
  return useQuery("endpoints", fetchEndpoints, { refetchOnReconnect: true });
}

export function useEndpoint(endpointId: number) {
  return useQuery(
    ["endpoint", { endpointId }],
    async () => {
      const endpoint = await fetchEndpoint(endpointId);

      queryCache.setQueryData(
        ["endpoint", { endpointId, type: "url" }],
        `${window.location.origin}${endpoint.url}`
      );

      return endpoint;
    },
    { refetchOnWindowFocus: false }
  );
}

export function useEndpointParts(endpointId: number | -1) {
  return useQuery(
    ["endpoint", { endpointId, type: "parts" }],
    async () => fetchEndpointParts(endpointId),
    { refetchOnWindowFocus: false }
  );
}

export function useEndpointOutput(endpointId: number, command: string) {
  return useQuery(
    ["endpoint", { endpointId, type: "output" }],
    async () => {
      let response = await axios
        .get(command)
        .then((res: AxiosResponse) => res.data)
        .catch((error) => error.response.data);
      return JSON.stringify(response, null, "\t");
    },
    { enabled: false, refetchOnWindowFocus: false }
  );
}

export function useEndpointUrl(endpointId: number) {
  const endpoint = useEndpoint(endpointId);
  return useQuery(
    ["endpoint", { endpointId, type: "url" }],
    async () => {
      return `${window.location.origin}${endpoint.data?.url}`;
    },
    { refetchOnWindowFocus: false }
  );
}

export function useUpdateEndpoint() {
  return useMutation(
    (endpoint: Endpoint) =>
      axios
        .put(`${url}/endpoint/${endpoint.id}`, endpoint)
        .then((res: AxiosResponse<Endpoint>) => res.data),
    {
      onMutate: (endpoint) => {
        queryCache.cancelQueries(["endpoint", { endpointId: endpoint.id }]);

        const oldEndpoint: Endpoint | undefined = queryCache.getQueryData<
          Endpoint
        >(["endpoint", { endpointId: endpoint.id }]);

        queryCache.setQueryData(
          ["endpoint", { endpointId: endpoint.id }],
          endpoint
        );

        return oldEndpoint;
      },

      onError: (error, endpoint, oldEndpoint) => {
        queryCache.setQueryData(
          ["endpoint", { endpointId: endpoint.id }],
          oldEndpoint
        );
      },

      onSuccess: (data, endpoint) => {
        queryCache.invalidateQueries(
          ["endpoint", { endpointId: endpoint.id }],
          { exact: true }
        );
        queryCache.invalidateQueries("endpoints");
      },
    }
  );
}

export function useNewEndpoint() {
  return useMutation(
    (endpoint: Endpoint) =>
      axios
        .post(`${url}/endpoint`, endpoint)
        .then((res: AxiosResponse<Endpoint>) => res.data),
    {
      onMutate: (endpoint) => {
        queryCache.cancelQueries("endpoints");

        const oldEndpoints: Dashboard[] | undefined = queryCache.getQueryData(
          "endpoints"
        );

        return () => queryCache.setQueryData("endpoints", oldEndpoints);
      },
      onError: (error, endpoint, rollback: () => void) => {
        if (rollback) {
          rollback();
        }
      },
      onSuccess: () => {
        queryCache.invalidateQueries("endpoints");
      },
    }
  );
}

export function useDeleteEndpoint() {
  return useMutation(
    (endpointId: number) =>
      axios.delete(`${url}/endpoint/${endpointId}`).then((res) => res.data),
    {
      onMutate: (endpointId) => {
        const oldEndpoints: Endpoint[] | undefined = queryCache.getQueryData(
          "endpoints"
        );

        queryCache.setQueryData<Endpoint[] | undefined>(
          "endpoints",
          (old: Endpoint[] | undefined) =>
            old?.filter((endpoint) => endpoint.id !== endpointId)
        );

        return () => queryCache.setQueryData("endpoints", oldEndpoints);
      },
      onError: (error, endpointId, rollback: () => void) => {
        if (rollback) {
          rollback();
        }
      },
      onSuccess: () => {
        queryCache.invalidateQueries("endpoints");
      },
    }
  );
}

/*
  Environments
*/

export async function fetchEnvironments(): Promise<Environment[]> {
  const environments: Environment[] = await axios
    .get(`${url}/environment`)
    .then((res: AxiosResponse<Environment[]>) => res.data);

  environments.forEach((environment: Environment) => {
    queryCache.setQueryData(
      ["environments", { environmentName: environment.name }],
      environment
    );
  });

  return environments;
}

export function useEnvironments() {
  return useQuery("environments", fetchEnvironments, {
    isDataEqual: (oldData, newData) => oldData === newData,
  });
}

export function useNewEnvironment() {
  return useMutation(
    (environment: Environment) =>
      axios
        .post(`${url}/environment`, environment)
        .then((res: AxiosResponse<Environment>) => res.data),
    {
      onMutate: (environment) => {
        queryCache.cancelQueries("environments");

        const oldEnvironments:
          | Environment[]
          | undefined = queryCache.getQueryData("environments");

        return () => queryCache.setQueryData("environments", oldEnvironments);
      },
      onError: (error, environment, rollback: () => void) => {
        if (rollback) {
          rollback();
        }
      },
      onSuccess: () => {
        queryCache.invalidateQueries("environments");
      },
    }
  );
}

export function useDeleteEnvironment() {
  return useMutation(
    (environmentId: number) =>
      axios
        .delete(`${url}/environment/${environmentId}`)
        .then((res) => res.data),
    {
      onMutate: (environmentId) => {
        queryCache.cancelQueries([
          "environment",
          { environmentId: environmentId },
        ]);

        const oldEnvs: Environment[] | undefined = queryCache.getQueryData(
          "environment"
        );

        queryCache.setQueryData<Environment[] | undefined>(
          "environments",
          (old: Environment[] | undefined) => {
            return old?.filter(
              (environment) => environment.id !== environmentId
            );
          }
        );

        return () => queryCache.setQueryData("environments", oldEnvs);
      },
      onError: (error, environmentId, rollback: () => void) => {
        if (rollback) {
          rollback();
        }
      },
      onSuccess: (data, environmentId) => {
        queryCache.removeQueries([
          "environment",
          { environmentId: environmentId },
        ]);
        queryCache.invalidateQueries("environments");
      },
    }
  );
}

/*
RateLimits
*/

export async function fetchRateLimits(): Promise<RateLimit[]> {
  const rateLimits: RateLimit[] = await axios
    .get(`${url}/ratelimit?t=${getTimestamp()}`)
    .then((res: AxiosResponse<RateLimit[]>) => res.data);

  rateLimits.forEach((rateLimit: RateLimit) => {
    queryCache.setQueryData(
      ["ratelimit", { rateLimitId: rateLimit.id }],
      rateLimit
    );
  });

  return rateLimits;
}

export function useRateLimits() {
  return useQuery("ratelimits", fetchRateLimits);
}

export function useDeleteRateLimit() {
  return useMutation(
    (rateLimitId: number) =>
      axios.delete(`${url}/ratelimit/${rateLimitId}`).then((res) => res.data),
    {
      onMutate: (rateLimitId) => {
        queryCache.cancelQueries(["ratelimit", { rateLimitId: rateLimitId }]);

        const oldRateLimits: RateLimit[] | undefined = queryCache.getQueryData(
          "ratelimits"
        );

        queryCache.setQueryData<RateLimit[] | undefined>(
          "ratelimits",
          (old: RateLimit[] | undefined) => {
            return old?.filter((ratelimit) => ratelimit.id !== rateLimitId);
          }
        );

        return () => queryCache.setQueryData("ratelimits", oldRateLimits);
      },
      onError: (error, rateLimitId, rollback: () => void) => {
        if (rollback) {
          rollback();
        }
      },
      onSuccess: (data, rateLimitId) => {
        queryCache.removeQueries(["ratelimits", { rateLimitId: rateLimitId }]);
        queryCache.invalidateQueries("ratelimits");
      },
    }
  );
}

export function useNewRateLimit() {
  return useMutation(
    (rateLimit: RateLimit) =>
      axios
        .post(`${url}/ratelimit`, rateLimit)
        .then((res: AxiosResponse<RateLimit>) => res.data),
    {
      onMutate: (rateLimit) => {
        queryCache.cancelQueries("ratelimits");

        const oldRateLimits: RateLimit[] | undefined = queryCache.getQueryData(
          "ratelimits"
        );

        return () => queryCache.setQueryData("ratelimits", oldRateLimits);
      },
      onError: (error, ratelimit, rollback: () => void) => {
        if (rollback) {
          rollback();
        }
      },
      onSuccess: () => {
        queryCache.invalidateQueries("ratelimits");
      },
    }
  );
}

/*
  Roles
*/

export async function fetchRoles(): Promise<Role[]> {
  const roles = await axios
    .get(`https://raw.githubusercontent.com/AlonGvili/psu/master/roles.json`)
    .then((res) => res.data);

  roles.Roles.forEach((role: Role) => {
    queryCache.setQueryData(["role", { roleId: role.id }], role);
  });

  return roles.Roles;
}

export function useRoles() {
  return useQuery("roles", fetchRoles);
}

/*
Variables
*/

export async function fetchVariables(): Promise<Variable[]> {
  const variables: Variable[] = await axios
    .get(`${url}/variable?t=${getTimestamp()}`)
    .then((res: AxiosResponse<Variable[]>) => res.data);

  variables.forEach((variable: Variable) => {
    queryCache.setQueryData(
      ["variable", { variableId: variable.id }],
      variable
    );
  });

  return variables;
}

export function useVariables() {
  return useQuery("variables", fetchVariables);
}

/* 
Settings
*/

export async function fetchSettings(): Promise<Settings> {
  const settings: Settings = await axios
    .get(`${url}/settings?t=${getTimestamp()}`)
    .then((res: AxiosResponse<Settings[]>) => res.data[0]);

  return settings;
}

export function useSettings() {
  return useQuery("settings", fetchSettings);
}

export function useUpdateSettings() {
  return useMutation(
    (settings: Settings) =>
      axios
        .put(`${url}/settings`, settings)
        .then((res: AxiosResponse<Settings>) => res.data),
    {
      onMutate: (settings) => {
        queryCache.cancelQueries("settings");

        return () => queryCache.setQueryData("settings", settings);
      },
      onError: (error, settings, rollback: () => void) => {
        if (rollback) {
          rollback();
        }
      },
      onSuccess: () => {
        queryCache.invalidateQueries("settings");
      },
    }
  );
}

/*
  License.
*/

export async function fetchLicenses(): Promise<License[]> {
  return await axios
    .get(`${url}/license`)
    .then((res: AxiosResponse<License[]>) => res.data);
}

export async function fetchLicense(id: number): Promise<License> {
  return await axios
    .get(`${url}/license/${id}`)
    .then((res: AxiosResponse<License>) => res.data);
}

export async function fetchLicensedFeatures(): Promise<Feature[]> {
  return await axios
    .get(`${url}/license/feature?t=${getTimestamp()}`)
    .then((res: AxiosResponse<Feature[]>) => res.data);
}

// Get All Licenses
export function useLicenses() {
  return useQuery("licenses", fetchLicenses);
}

// Get License By Id
export function useLicense(id: number) {
  return useQuery(["licenses", { licenseId: id }], () => fetchLicense(id));
}

// Get Licensed Features
export function useLicensedFeatures() {
  return useQuery(["licenses", "features"], fetchLicensedFeatures);
}

// Add New License
export function useNewLicense() {
  return useMutation(
    (license: License) =>
      axios
        .post(`${url}/license`, { licenseText: license })
        .then((res) => res.data),
    {
      onMutate: (license) => {
        queryCache.cancelQueries("licenses");

        const oldLicenses: License[] | undefined = queryCache.getQueryData(
          "licenses"
        );

        return () => queryCache.setQueryData("licenses", oldLicenses);
      },
      onError: (error, license, rollback: () => void) => {
        if (rollback) {
          rollback();
        }
      },
      onSuccess: () => {
        queryCache.invalidateQueries("licenses");
      },
    }
  );
}

// Delete license.
export async function deleteLicense(id: number) {
  return await axios.delete(`${url}/license/${id}`).then((res) => res.data);
}

export function useDeleteLicense() {
  return useMutation((licenseId: number) => deleteLicense(licenseId), {
    onMutate: (licenseId) => {
      const oldLicenses: License[] | undefined = queryCache.getQueryData(
        "licenses"
      );

      queryCache.setQueryData<License[] | undefined>(
        "licenses",
        (old: License[] | undefined) =>
          old?.filter((license) => license.id !== licenseId)
      );

      return () => queryCache.setQueryData("licenses", oldLicenses);
    },
    onError: (error, licenseId, rollback: () => void) => {
      if (rollback) {
        rollback();
      }
    },
    onSuccess: (data, licenseId) => {
      queryCache.invalidateQueries("licenses");
    },
  });
}
