export interface LaunchPad {
  id: string;
  name: string;
  location: {
    name: string;
  };
}

export interface Rocket {
  id: string;
  name: string;
  configuration: {
    name: string;
  };
}

export interface Agency {
  id: string;
  name: string;
  type: string;
}

export interface Launch {
  id: string;
  name: string;
  status: {
    id: number;
    name: string;
  };
  net: string;
  rocket: Rocket;
  mission?: {
    name?: string;
  };
  pad: LaunchPad;
  launch_service_provider: Agency;
}

export interface LaunchesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Launch[];
}
