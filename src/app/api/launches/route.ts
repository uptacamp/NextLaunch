import { NextResponse } from 'next/server';
import { fetchUpcomingLaunches, filterFloridaLaunches, sortLaunchesByDate } from '@/lib/launchApi';

export async function GET() {
  try {
    const launches = await fetchUpcomingLaunches();
    const floridaLaunches = filterFloridaLaunches(launches);
    const sortedLaunches = sortLaunchesByDate(floridaLaunches);

    return NextResponse.json({
      success: true,
      launches: sortedLaunches,
      count: sortedLaunches.length,
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch launches',
      },
      { status: 500 }
    );
  }
}
