'use client';

import { Launch } from '@/types/launch';
import { formatDate, formatTime } from '@/lib/dateUtils';

interface LaunchCardProps {
  launch: Launch;
}

const getStatusColor = (statusName: string): string => {
  const status = statusName.toLowerCase();
  if (status.includes('go')) return 'bg-green-100 text-green-800 border-green-300';
  if (status.includes('hold')) return 'bg-yellow-100 text-yellow-800 border-yellow-300';
  if (status.includes('tbd')) return 'bg-gray-100 text-gray-800 border-gray-300';
  return 'bg-blue-100 text-blue-800 border-blue-300';
};

export function LaunchCard({ launch }: LaunchCardProps) {
  const netDate = new Date(launch.net);
  const isUpcoming = netDate > new Date();
  const rocketName = launch.rocket?.configuration?.name || 'Unknown Rocket';
  const padName = launch.pad?.name || 'Unknown Pad';
  const providerName = launch.launch_service_provider?.name || 'Unknown Provider';
  const statusName = launch.status?.name || 'Unknown';

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-200">
      {/* Header with launch name */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
        <h3 className="text-xl font-bold text-white truncate">{launch.name}</h3>
      </div>

      {/* Content */}
      <div className="px-6 py-4 space-y-4">
        {/* Status and Date */}
        <div className="flex items-center justify-between gap-4">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${
              getStatusColor(statusName)
            }`}
          >
            {statusName}
          </span>
          <div className="text-right">
            <div className="text-sm text-gray-600">Scheduled</div>
            <div className="text-lg font-bold text-gray-900">{formatDate(netDate)}</div>
            <div className="text-sm font-semibold text-blue-600">{formatTime(netDate)}</div>
          </div>
        </div>

        {/* Mission Details */}
        <div className="border-t border-gray-200 pt-4 space-y-3">
          {/* Rocket */}
          <div className="flex items-start gap-3">
            <span className="text-gray-500 font-semibold min-w-fit">🚀 Rocket:</span>
            <span className="text-gray-800">{rocketName}</span>
          </div>

          {/* Provider */}
          <div className="flex items-start gap-3">
            <span className="text-gray-500 font-semibold min-w-fit">🏢 Provider:</span>
            <span className="text-gray-800">{providerName}</span>
          </div>

          {/* Launch Pad */}
          <div className="flex items-start gap-3">
            <span className="text-gray-500 font-semibold min-w-fit">📍 Pad:</span>
            <span className="text-gray-800">{padName}</span>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <span className="text-gray-500 font-semibold min-w-fit">📍 Location:</span>
            <span className="text-gray-800">{launch.pad?.location?.name || 'Unknown'}</span>
          </div>
        </div>
      </div>

      {/* Footer with countdown indicator */}
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
        {isUpcoming ? (
          <div className="text-sm font-semibold text-green-600">✓ Upcoming Launch</div>
        ) : (
          <div className="text-sm font-semibold text-gray-500">○ Past Launch</div>
        )}
      </div>
    </div>
  );
}
