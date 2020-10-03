import React from "react"
import { queryCache, useQuery, useMutation } from "react-query";
import {Dashboard, Endpoint, Part} from "../types"
import axios, { AxiosResponse } from "axios"

const url = "http://localhost:3004";

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

        queryCache.setQueryData<Endpoint[] | undefined>("endpoints", (old: Endpoint[] | undefined) =>
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

export default function ApisPage(){
    const endpoints = useEndpoints()
    return (
        <>
        {endpoints.data?.map(endpoint => endpoint.url)}
        </>
    )
}