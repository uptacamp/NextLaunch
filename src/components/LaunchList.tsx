'use client';

import { useEffect, useState } from 'react';
import { Launch } from '@/types/launch';
import { LaunchCard } from './LaunchCard';

interface LaunchListProps {
  initialLaunches: Launch[];
}

export function LaunchList({ initialLaunches }: LaunchListProps) {
  const [launches, setLaunches] = useState<Launch[]>(initialLaunches);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/launches');
        if (response.ok) {
          const data = await response.json();
          setLaunches(data.launches);
          setLastUpdated(new Date());
        }
      } catch (error) {
        console.error('Failed to refresh launches:', error);
      } finally {
        setIsLoading(false);
      }
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
  }, [autoRefresh]);

  const handleRefresh = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/launches');
      if (response.ok) {
        const data = await response.json();
        setLaunches(data.launches);
        setLastUpdated(new Date());
      }
    } catch (error) {
      console.error('Failed to refresh launches:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm text-gray-600">Last updated</p>
            <p className="text-lg font-semibold text-gray-900">
              {lastUpdated.toLocaleTimeString()}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={autoRefresh}
                onChange={(e) => setAutoRefresh(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <span className="text-sm font-medium text-gray-700">Auto-refresh (5 min)</span>
            </label>
            <button
              onClick={handleRefresh}
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Refreshing...' : 'Refresh Now'}
            </button>
          </div>
        </div>
      </div>

      {/* Launches Count */}
      <div className="text-gray-700">
        <p className="text-lg font-semibold">
          {launches.length} {launches.length === 1 ? 'Launch' : 'Launches'} Found
        </p>
      </div>

      {/* Launch Cards Grid */}
      {launches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {launches.map((launch) => (
            <LaunchCard key={launch.id} launch={launch} />
          ))}
        </div>
      ) : (
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <p className="text-gray-600 text-lg">No Florida launches found</p>
        </div>
      )}
    </div>
  );
}
