import { MapPinIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

const IssueCard = ({ issue }) => {
  const statusColors = {
    'Pending': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
    'In Progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800',
    'Resolved': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800',
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="card p-6 hover:shadow-2xl transition-all duration-300 group">
      <div className="flex justify-between items-start gap-4 mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-civic-600 transition-colors">
            {issue.title}
          </h3>
          <div className="flex items-center gap-2 mt-1 text-sm text-gray-500 dark:text-gray-400">
            <MapPinIcon className="w-4 h-4" />
            {issue.location}
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[issue.status] || statusColors['Pending']}`}>
          {issue.status}
        </span>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-2">
        {issue.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <UserIcon className="w-4 h-4 text-civic-500" />
          <span>Reported by <span className="font-semibold text-gray-700 dark:text-gray-200">{issue.reportedBy?.name || 'Anonymous'}</span></span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <CalendarIcon className="w-4 h-4" />
          {formatDate(issue.createdAt)}
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
