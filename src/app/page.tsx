import { fetchUpcomingLaunches, filterFloridaLaunches, sortLaunchesByDate } from '@/lib/launchApi';
import { LaunchList } from '@/components/LaunchList';

export const revalidate = 300; // Revalidate every 5 minutes

export default async function Home() {
  const launches = await fetchUpcomingLaunches();
  const floridaLaunches = filterFloridaLaunches(launches);
  const sortedLaunches = sortLaunchesByDate(floridaLaunches);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">🚀 NextLaunch</h1>
          <p className="text-xl text-gray-600 mb-2">Upcoming Florida Space Launches</p>
          <p className="text-gray-500">Real-time data from Launch Library 2</p>
        </div>

        {/* Launch List */}
        <LaunchList initialLaunches={sortedLaunches} />
      </div>
    </main>
  );
}
