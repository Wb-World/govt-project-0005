import React, { useEffect, useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getFeedback } from '../storage/feedback.js';

export default function UsersFeedbackPage() {
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setLoading(true);
        const data = await getFeedback();
        if (isMounted) {
          setFeedbacks(data || []);
        }
      } catch (err) {
        console.error('Error fetching feedbacks:', err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  const categories = useMemo(() => {
    const set = new Set();
    feedbacks.forEach((f) => {
      if (f.feedback_type) set.add(f.feedback_type);
    });
    return ['All', ...Array.from(set)];
  }, [feedbacks]);

  const filteredFeedbacks = useMemo(() => {
    return feedbacks.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.feedback_type !== selectedCategory) {
        return false;
      }
      // Rating filter
      if (selectedRating !== 'All') {
        const ratingNum = Number(item.rating);
        if (Number(selectedRating) !== ratingNum) return false;
      }
      // Language filter
      if (selectedLanguage !== 'All' && item.language !== selectedLanguage) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const nameMatch = (item.name || '').toLowerCase().includes(query);
        const messageMatch = (item.message || '').toLowerCase().includes(query);
        const typeMatch = (item.feedback_type || '').toLowerCase().includes(query);
        if (!nameMatch && !messageMatch && !typeMatch) return false;
      }
      return true;
    });
  }, [feedbacks, selectedCategory, selectedRating, selectedLanguage, searchQuery]);

  const stats = useMemo(() => {
    const total = feedbacks.length;
    const withRating = feedbacks.filter((f) => f.rating && Number(f.rating) > 0);
    const avgRating = withRating.length
      ? (withRating.reduce((sum, f) => sum + Number(f.rating), 0) / withRating.length).toFixed(1)
      : '5.0';
    const fiveStars = feedbacks.filter((f) => Number(f.rating) === 5).length;
    return { total, avgRating, fiveStars };
  }, [feedbacks]);

  const formatDate = (isoString) => {
    if (!isoString) return '';
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return isoString;
    }
  };

  const getInitials = (name) => {
    if (!name || name.toLowerCase() === 'anonymous') return '👤';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return name.slice(0, 2).toUpperCase();
  };

  const getTagColor = (type) => {
    switch ((type || '').toLowerCase()) {
      case 'appreciation':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'suggestion':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'experience':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'compliment':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'poor':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'satisfactory':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'good':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'excellent':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default:
        return 'bg-amber-100 text-amber-800 border-amber-200';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 flex flex-col font-sans">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/en" className="flex items-center gap-3 group">
              <img
                src="/assets/icons/TamilNadu_Logo.svg"
                alt="Government of Tamil Nadu"
                className="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
              />
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                  Kovalam Town Panchayat
                </h1>
                <p className="text-xs text-amber-600 font-medium tracking-wide">
                  Chengalpattu District, Tamil Nadu
                </p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back</span>
            </button>

            <Link
              to="/en/Feedback"
              className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-full shadow-sm hover:shadow-md transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zm-4 0h-2v2h2V9z" clipRule="evenodd" />
              </svg>
              <span>Share Thought</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs sm:text-sm font-semibold tracking-wide mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Community Voices & Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-amber-900 tracking-tight">
            Users' Feedback
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-3 rounded-full"></div>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Authentic thoughts, feedback, and experiences shared by citizens and visitors of Kovalam Town Panchayat.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl font-bold border border-amber-100">
              💬
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Total Thoughts</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">{stats.total}</p>
              <p className="text-xs text-amber-600 font-medium">Shared by citizens</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl font-bold border border-amber-100">
              ⭐
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Average Rating</p>
              <div className="flex items-center gap-2">
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">{stats.avgRating}</p>
                <span className="text-amber-500 text-lg">★★★★★</span>
              </div>
              <p className="text-xs text-emerald-600 font-medium">Citizen satisfaction</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl font-bold border border-amber-100">
              🌟
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">5-Star Reviews</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">{stats.fiveStars}</p>
              <p className="text-xs text-amber-600 font-medium">Top appreciation</p>
            </div>
          </div>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search by name, thought, or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all text-gray-900"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 absolute left-3 top-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-gray-600 p-1"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Select Dropdowns */}
            <div className="flex flex-wrap gap-2.5 items-center">
              {/* Rating filter */}
              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
              >
                <option value="All">All Ratings</option>
                <option value="5">5 Stars (★★★★★)</option>
                <option value="4">4 Stars (★★★★☆)</option>
                <option value="3">3 Stars (★★★☆☆)</option>
                <option value="2">2 Stars (★★☆☆☆)</option>
                <option value="1">1 Star (★☆☆☆☆)</option>
              </select>

              {/* Language filter */}
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
              >
                <option value="All">All Languages</option>
                <option value="en">English</option>
                <option value="ta">தமிழ் (Tamil)</option>
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 items-center">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-1">Categories:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white shadow-sm font-semibold'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Feedback List Section */}
        {loading ? (
          /* Loading Skeletons */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm animate-pulse space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-100 rounded w-1/3"></div>
                  </div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-100 rounded w-full"></div>
                  <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-3 bg-gray-100 rounded w-4/6"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredFeedbacks.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-sm max-w-xl mx-auto my-8">
            <div className="w-20 h-20 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
              ✍️
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Feedbacks Found</h3>
            <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
              {searchQuery || selectedCategory !== 'All' || selectedRating !== 'All'
                ? 'No user feedback matches your current filter criteria. Try clearing search or filters.'
                : 'No thoughts have been shared yet. Be the first citizen to share your valuable thoughts!'}
            </p>
            {searchQuery || selectedCategory !== 'All' || selectedRating !== 'All' ? (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedRating('All');
                  setSelectedLanguage('All');
                }}
                className="px-5 py-2.5 text-sm font-semibold text-amber-600 bg-amber-50 hover:bg-amber-100 rounded-full transition-colors"
              >
                Clear Filters
              </button>
            ) : (
              <Link
                to="/en/Feedback"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-full shadow-md transition-all"
              >
                Share Your Feedback
              </Link>
            )}
          </div>
        ) : (
          /* Grid of Feedback Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeedbacks.map((item, index) => {
              const rating = Number(item.rating) || 5;
              const isAnonymous = item.anonymous || !item.name || item.name.toLowerCase() === 'anonymous';
              const displayName = isAnonymous ? 'Anonymous Citizen' : item.name;

              return (
                <div
                  key={item.id || `feedback-${index}`}
                  className="bg-white rounded-2xl p-6 border border-gray-200/80 hover:border-amber-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle top amber highlight on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div>
                    {/* Author & Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-sm font-bold shadow-sm flex-shrink-0">
                          {getInitials(displayName)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                            {displayName}
                            {isAnonymous && (
                              <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-normal">
                                Citizen
                              </span>
                            )}
                          </h4>
                          <p className="text-xs text-gray-400">
                            {formatDate(item.created_at)}
                          </p>
                        </div>
                      </div>

                      {/* Language Badge */}
                      <span className="text-[11px] font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {item.language === 'ta' ? 'தமிழ்' : 'EN'}
                      </span>
                    </div>

                    {/* Rating & Tag */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      {/* Rating Stars */}
                      <div className="flex text-amber-500 text-base" title={`${rating} out of 5 stars`}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i}>{i < rating ? '★' : '☆'}</span>
                        ))}
                      </div>

                      {/* Feedback Type Tag */}
                      {item.feedback_type && (
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${getTagColor(
                            item.feedback_type
                          )}`}
                        >
                          {item.feedback_type}
                        </span>
                      )}
                    </div>

                    {/* Message / Thought */}
                    <div className="relative mt-2">
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                        "{item.message}"
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom / Verified Footer */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1 text-emerald-600 font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Verified Submission
                    </span>
                    <span className="text-gray-300">#KovalamPanchayat</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <img src="/assets/icons/TamilNadu_Logo.svg" alt="Logo" className="w-8 h-8 object-contain" />
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Kovalam Town Panchayat. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium text-amber-600">
            <Link to="/en" className="hover:underline">Home</Link>
            <span>•</span>
            <Link to="/en/Feedback" className="hover:underline">Share Feedback</Link>
            <span>•</span>
            <Link to="/admin" className="text-gray-400 hover:text-gray-600">Admin Portal</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
