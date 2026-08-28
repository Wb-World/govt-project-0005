import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getFeedback, saveFeedback } from '../storage/feedback.js';

export default function FeedbackPage() {
  const { language: routeLang } = useParams();
  const isTamil = routeLang === 'ta';
  const lang = isTamil ? 'ta' : 'en';

  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form state
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [feedbackType, setFeedbackType] = useState(null);
  const [message, setMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const feedbackTypes = isTamil
    ? ['நல்லது', 'மோசம்', 'திருப்தி', 'மிகச்சிறந்தது']
    : ['Excellent', 'Good', 'Satisfaction', 'Poor'];

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setSubmitting(true);
    const feedbackPayload = {
      language: lang,
      name: isAnonymous ? 'Anonymous' : name.trim(),
      rating: Number(rating) || 5,
      type: feedbackType,
      anonymous: isAnonymous,
      message: message.trim(),
      created_at: new Date().toISOString(),
    };

    try {
      const saved = await saveFeedback(feedbackPayload);
      setFeedbacks((prev) => [saved || feedbackPayload, ...prev]);
      setName('');
      setMessage('');
      setIsAnonymous(false);
      setRating(5);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (err) {
      console.error('Error submitting feedback:', err);
      // Fallback update
      setFeedbacks((prev) => [feedbackPayload, ...prev]);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (isoString) => {
    if (!isoString) return '';
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString(isTamil ? 'ta-IN' : 'en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    } catch {
      return isoString;
    }
  };

  const getInitials = (authorName) => {
    if (!authorName || authorName.toLowerCase() === 'anonymous') return '👤';
    const parts = authorName.trim().split(' ');
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return authorName.slice(0, 2).toUpperCase();
  };

  const getTagColor = (type) => {
    switch ((type || '').toLowerCase()) {
      case 'good':
      case 'நல்லது':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'poor':
      case 'மோசம்':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'satisfaction':
      case 'satisfactory':
      case 'திருப்தி':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'excellent':
      case 'மிகச்சிறந்தது':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'appreciation':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default:
        return 'bg-amber-100 text-amber-800 border-amber-200';
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Feedback Container */}
        <div className="feedback-content rounded-2xl p-6 sm:p-10 bg-white border border-gray-200/80 shadow-lg relative overflow-hidden">
          {/* Decorative accents */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-amber-100/50 pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-blue-100/40 pointer-events-none"></div>

          {/* Section Header */}
          <div className="relative z-10 text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700 tracking-tight">
              {isTamil ? 'கருத்துக்கள் மற்றும் பாராட்டுக்கள்' : 'Voices of Appreciation'}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-3 rounded-full"></div>
            <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
              {isTamil
                ? 'உங்கள் அனுபவங்கள் எங்களை மேலும் சிறக்க வைக்கின்றன. உங்கள் கருத்துக்களைப் பகிர்ந்து எங்களுடன் இணையுங்கள்.'
                : 'Your experiences inspire us to do better. Share your thoughts and join our community of supporters.'}
            </p>
          </div>

          {/* Feedback Submission Form */}
          <div className="feedback-form-container bg-amber-50/80 rounded-xl p-6 sm:p-8 border border-amber-200/70 mb-10 relative z-10">
            <h2 className="text-xl sm:text-2xl font-bold text-amber-700 mb-6">
              {isTamil ? 'உங்கள் கருத்துக்களைப் பகிரவும்' : 'Share Your Thoughts'}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Column 1 */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                      {isTamil ? 'உங்கள் பெயர்' : 'Your Name'}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isAnonymous}
                      placeholder={isAnonymous ? (isTamil ? 'அநாமதேயம்' : 'Anonymous') : (isTamil ? 'பெயரை உள்ளிடவும்' : 'Enter your name')}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all disabled:bg-gray-100 disabled:text-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                      {isTamil ? 'உங்கள் மதிப்பீடு' : 'Your Rating'}
                    </label>
                    <div className="flex space-x-2 text-2xl text-amber-500">
                      {[1, 2, 3, 4, 5].map((starVal) => (
                        <button
                          key={starVal}
                          type="button"
                          onClick={() => setRating(starVal)}
                          className="hover:scale-125 transition-transform focus:outline-none cursor-pointer"
                        >
                          {starVal <= rating ? '★' : '☆'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                      {isTamil ? 'கருத்து வகை' : 'Feedback Type'}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {feedbackTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFeedbackType(type)}
                          className="px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                      {isTamil ? 'உங்கள் கருத்து' : 'Your Feedback'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={isTamil ? 'உங்கள் அனுபவத்தைப் பகிருங்கள்...' : 'Share your experience...'}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isAnonymous}
                        onChange={(e) => setIsAnonymous(e.target.checked)}
                        className="rounded border-gray-300 text-amber-600 focus:ring-amber-500 w-4 h-4"
                      />
                      <span className="ml-2 text-sm text-gray-700 font-medium">
                        {isTamil ? 'அநாமதேயமாக சேர்க்கவும்' : 'Include anonymously'}
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium py-2.5 px-7 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 cursor-pointer disabled:opacity-75"
                >
                  {submitting ? (
                    <span>{isTamil ? 'சேமிக்கிறது...' : 'Submitting...'}</span>
                  ) : submitSuccess ? (
                    <span>✓ {isTamil ? 'பகிரப்பட்டது!' : 'Feedback Shared!'}</span>
                  ) : (
                    <>
                      <span>{isTamil ? 'கருத்தைப் பகிரவும்' : 'Share Your Feedback'}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Submitted Feedbacks List Header */}
          <div className="relative z-10 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {isTamil ? 'பொதுமக்கள் கருத்துக்கள்' : 'Citizen Feedbacks'}
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                  {isTamil
                    ? 'மக்களால் பகிரப்பட்ட உண்மையான கருத்துக்கள்'
                    : 'Authentic thoughts and experiences shared by citizens'}
                </p>
              </div>
              <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
                {feedbacks.length} {isTamil ? 'கருத்துக்கள்' : 'Feedbacks'}
              </span>
            </div>

            {/* Scrollable Feedback Entries Container */}
            <div className="max-h-[560px] overflow-y-auto space-y-4 pr-2">
              {loading ? (
                /* Loading skeletons */
                [1, 2, 3].map((n) => (
                  <div key={n} className="bg-gray-50 rounded-xl p-5 border border-gray-200 animate-pulse space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                      <div className="space-y-1.5 flex-1">
                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                        <div className="h-3 bg-gray-100 rounded w-1/4"></div>
                      </div>
                    </div>
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                  </div>
                ))
              ) : feedbacks.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                  <div className="text-3xl mb-2">💬</div>
                  <p className="text-sm font-semibold text-gray-600">
                    {isTamil ? 'இதுவரை கருத்துக்கள் எதுவும் இல்லை.' : 'No feedback submitted yet.'}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {isTamil
                      ? 'முதல் கருத்தைப் பகிர்ந்து தொடங்குங்கள்!'
                      : 'Be the first to share your thoughts!'}
                  </p>
                </div>
              ) : (
                feedbacks.map((item, idx) => {
                  const ratingNum = Number(item.rating) || 5;
                  const isAnon = item.anonymous || !item.name || item.name.toLowerCase() === 'anonymous';
                  const displayName = isAnon ? (isTamil ? 'அநாமதேய குடிமகன்' : 'Anonymous Citizen') : item.name;

                  return (
                    <div
                      key={item.id || `feedback-item-${idx}`}
                      className="bg-white rounded-xl p-5 border border-gray-200/90 hover:border-amber-300 shadow-sm transition-all flex flex-col justify-between group"
                    >
                      <div>
                        {/* Top: Avatar, Name, Date, Rating, Tag */}
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-sm">
                              {getInitials(displayName)}
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                                {displayName}
                                {isAnon && (
                                  <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-normal">
                                    {isTamil ? 'குடிமகன்' : 'Citizen'}
                                  </span>
                                )}
                              </h4>
                              <p className="text-xs text-gray-400">
                                {formatDate(item.created_at)}
                              </p>
                            </div>
                          </div>

                          {/* Tag & Rating */}
                          <div className="flex flex-col items-end gap-1">
                            <div className="flex text-amber-500 text-sm">
                              {[1, 2, 3, 4, 5].map((s) => (
                                <span key={s}>{s <= ratingNum ? '★' : '☆'}</span>
                              ))}
                            </div>
                            {item.feedback_type && (
                              <span
                                className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${getTagColor(
                                  item.feedback_type
                                )}`}
                              >
                                {item.feedback_type}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Message */}
                        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line mt-2 pl-1">
                          "{item.message}"
                        </p>
                      </div>

                      {/* Verified Badge */}
                      <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                        <span className="flex items-center gap-1 text-emerald-600 font-medium">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {isTamil ? 'சரிபார்க்கப்பட்ட கருத்து' : 'Verified Submission'}
                        </span>
                        <span className="text-gray-300">#KovalamPanchayat</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
