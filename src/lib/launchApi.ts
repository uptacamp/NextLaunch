import { LaunchesResponse, Launch } from '@/types/launch';

const API_BASE = 'https://ll.thespacedevs.com/2.3.0';

// Florida launch pad identifiers and location keywords
const FLORIDA_KEYWORDS = ['florida', 'cape canaveral', 'kennedy', 'ksc', 'ccafs', 'cafs'];

export async function fetchUpcomingLaunches(): Promise<Launch[]> {
  try {
    const response = await fetch(`${API_BASE}/launch/upcoming/?limit=100`, {
      next: { revalidate: 60 } // Cache for 60 seconds
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data: LaunchesResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error('Failed to fetch launches:', error);
    return [];
  }
}

export function filterFloridaLaunches(launches: Launch[]): Launch[] {
  return launches.filter((launch) => {
    const padLocation = launch.pad?.location?.name?.toLowerCase() || '';
    return FLORIDA_KEYWORDS.some((keyword) => padLocation.includes(keyword));
  });
}

export function sortLaunchesByDate(launches: Launch[]): Launch[] {
  return [...launches].sort((a, b) => {
    const dateA = new Date(a.net).getTime();
    const dateB = new Date(b.net).getTime();
    return dateA - dateB;
  });
}
