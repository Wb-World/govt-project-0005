import React, { useEffect, useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFeedback, saveFeedback } from '../storage/feedback.js';

export default function FeedbackPage() {
  const { language: routeLang } = useParams();
  const isTamil = (routeLang || '').toLowerCase() === 'ta';
  const lang = isTamil ? 'ta' : 'en';

  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('All');

  // Form state
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [feedbackType, setFeedbackType] = useState('');
  const [department, setDepartment] = useState('');
  const [message, setMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const feedbackTypes = isTamil
    ? ['நல்லது', 'மிகச்சிறந்தது', 'திருப்தி', 'மோசம்']
    : ['Excellent', 'Good', 'Satisfactory', 'Poor'];

  const departments = [
    { value: 'Reception', en: 'Reception',      ta: 'வரவேற்பு' },
    { value: 'Aadhaar',   en: 'Aadhaar',        ta: 'ஆதார்' },
    { value: 'E-Sevai',   en: 'E-Sevai',        ta: 'இ-சேவை' },
    { value: 'Tax',       en: 'Tax Management', ta: 'வரி மேலாண்மை' },
  ];

  // Fetch feedbacks directly from DB
  const loadData = async () => {
    try {
      setLoading(true);
      const data = await getFeedback();
      setFeedbacks(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Error fetching feedbacks:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setErrorMessage(isTamil ? 'தயவுசெய்து உங்கள் கருத்தை உள்ளிடவும்.' : 'Please enter your feedback message.');
      return;
    }

    setErrorMessage('');
    setSubmitting(true);

    const feedbackPayload = {
      language: lang,
      name: isAnonymous ? 'Anonymous' : (name.trim() || 'Anonymous'),
      rating: Number(rating) || 5,
      feedback_type: feedbackType || (isTamil ? 'நல்லது' : 'Good'),
      department: department || null,
      anonymous: isAnonymous,
      message: message.trim(),
    };

    try {
      // 1. Submit data to Supabase DB
      await saveFeedback(feedbackPayload);

      // 2. Fetch latest data directly from DB to show immediately under the feedback form
      const latestData = await getFeedback();
      setFeedbacks(Array.isArray(latestData) ? latestData : []);

      // Reset form
      setName('');
      setMessage('');
      setIsAnonymous(false);
      setRating(0);
      setDepartment('');
      setFeedbackType('');
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 4000);
    } catch (err) {
      console.error('Error submitting feedback:', err);
      setErrorMessage(isTamil ? 'கருத்தை சமர்ப்பிப்பதில் பிழை ஏற்பட்டது. மீண்டும் முயற்சிக்கவும்.' : 'Failed to submit feedback. Please try again.');
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
        hour: '2-digit',
        minute: '2-digit',
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
        return 'bg-teal-50 text-teal-700 border-teal-200';
      case 'poor':
      case 'மோசம்':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'satisfaction':
      case 'satisfactory':
      case 'திருப்தி':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'excellent':
      case 'மிகச்சிறந்தது':
      case 'appreciation':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-amber-50 text-amber-700 border-amber-200';
    }
  };

  const filteredFeedbacks = useMemo(() => {
    if (filterType === 'All') return feedbacks;
    return feedbacks.filter((f) => {
      const t = (f.feedback_type || f.type || '').toLowerCase();
      return t === filterType.toLowerCase();
    });
  }, [feedbacks, filterType]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-amber-50/30 text-gray-900 font-sans">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to={isTamil ? '/ta' : '/en'} className="flex items-center space-x-3 group">
              <img
                src="/assets/icons/TamilNadu_Logo.svg"
                alt="Kovalam Panchayat Logo"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div>
                <h1 className="text-base sm:text-xl font-bold tracking-tight text-white leading-none">
                  {isTamil ? 'கோவளம் ஊராட்சி' : 'KOVALAM PANCHAYAT'}
                </h1>
                <p className="text-[11px] sm:text-xs text-amber-100 font-medium mt-0.5">
                  {isTamil ? 'ஊழலற்ற நிர்வாகம்' : 'Corruption Free Administration'}
                </p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              to={isTamil ? '/ta' : '/en'}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-semibold backdrop-blur-sm transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>{isTamil ? 'முகப்பு' : 'Home'}</span>
            </Link>

            <Link
              to={isTamil ? '/en/feedback' : '/ta/feedback'}
              className="px-3 sm:px-4 py-1.5 rounded-full bg-amber-700/80 hover:bg-amber-800 text-white text-xs sm:text-sm font-bold shadow transition-all"
            >
              {isTamil ? 'English' : 'தமிழ்'}
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Header Hero Title */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 text-amber-800 text-xs sm:text-sm font-semibold mb-3 border border-amber-200">
            <span>✨</span>
            <span>{isTamil ? 'பொதுமக்கள் கருத்து தளம்' : 'Citizen Feedback Portal'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight">
            {isTamil ? 'கருத்துக்கள் மற்றும் பாராட்டுக்கள்' : 'Voices of Appreciation & Feedback'}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            {isTamil
              ? 'உங்கள் அனுபவங்கள் எங்களை மேலும் சிறக்க வைக்கின்றன. உங்கள் கருத்துக்களைப் பகிர்ந்து எங்களுடன் இணையுங்கள்.'
              : 'Your feedback drives transparent, citizen-centric governance. Share your experience with Kovalam Panchayat services.'}
          </p>
        </div>

        {/* Feedback Submission Card */}
        <section className="bg-white rounded-2xl shadow-xl border border-amber-100 overflow-hidden mb-12 relative">
          <div className="h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>

          <div className="p-5 sm:p-8 lg:p-10">
            <div className="flex items-center justify-between pb-5 border-b border-gray-100 mb-6">
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <span>✍️</span>
                  <span>{isTamil ? 'உங்கள் கருத்தைப் பகிருங்கள்' : 'Share Your Feedback'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {isTamil ? 'அனைத்து விவரங்களும் பாதுகாப்பாக சேமிக்கப்படும்' : 'Your submission will be stored and reflected immediately.'}
                </p>
              </div>
            </div>

            {submitSuccess && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3 animate-fadeIn">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-semibold">
                  {isTamil
                    ? 'நன்றி! உங்கள் கருத்து வெற்றிகரமாக சேமிக்கப்பட்டு கீழே காண்பிக்கப்படுகிறது.'
                    : 'Thank you! Your feedback has been recorded and is now live below.'}
                </span>
              </div>
            )}

            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-center gap-3">
                <svg className="w-5 h-5 text-rose-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold">{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Form Column */}
                <div className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-1.5">
                      {isTamil ? 'உங்கள் பெயர்' : 'Your Name'}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isAnonymous}
                      placeholder={isAnonymous ? (isTamil ? 'அநாமதேயம்' : 'Anonymous Citizen') : (isTamil ? 'உங்கள் முழுப் பெயரை உள்ளிடவும்' : 'e.g. Ramesh Kumar')}
                      className="w-full bg-stone-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm sm:text-base text-gray-900 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:text-gray-400"
                    />
                  </div>

                  {/* Rating Stars */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-1.5">
                      {isTamil ? 'மதிப்பீடு (1 - 5)' : 'Your Rating'}
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1 text-2xl sm:text-3xl">
                        {[1, 2, 3, 4, 5].map((starVal) => (
                          <button
                            key={starVal}
                            type="button"
                            onClick={() => setRating(rating === starVal ? 0 : starVal)}
                            className={`transition-all transform hover:scale-125 focus:outline-none cursor-pointer p-0.5 ${
                              rating > 0 && starVal <= rating ? 'text-amber-400' : 'text-gray-300 hover:text-amber-300'
                            }`}
                            aria-label={`Rate ${starVal} stars`}
                          >
                            {rating > 0 && starVal <= rating ? '★' : '☆'}
                          </button>
                        ))}
                      </div>
                      {rating > 0 && (
                        <span className="text-xs sm:text-sm font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 animate-fadeIn">
                          {rating} / 5
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Department Select */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-1.5">
                      {isTamil ? 'தொடர்புடைய துறை' : 'Department / Service'}
                    </label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full bg-stone-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm sm:text-base text-gray-900 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all cursor-pointer"
                    >
                      <option value="">{isTamil ? 'துறையைத் தேர்ந்தெடுக்கவும்' : 'Select Department'}</option>
                      {departments.map((d) => (
                        <option key={d.value} value={d.value}>
                          {isTamil ? `${d.ta} (${d.en})` : d.en}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Feedback Type Tags */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-1.5">
                      {isTamil ? 'கருத்து வகை' : 'Feedback Category'}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {feedbackTypes.map((type) => {
                        const isSelected = Boolean(feedbackType) && feedbackType.toLowerCase() === type.toLowerCase();
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFeedbackType(isSelected ? '' : type)}
                            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-amber-500 text-white border-amber-600 shadow-md ring-2 ring-amber-300'
                                : 'bg-stone-50 text-gray-700 border-gray-200 hover:bg-amber-50 hover:border-amber-200'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Form Column */}
                <div className="space-y-5 flex flex-col justify-between">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-gray-800 mb-1.5">
                      {isTamil ? 'உங்கள் கருத்து / பரிந்துரை *' : 'Your Detailed Feedback *'}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        isTamil
                          ? 'உங்கள் அனுபவம் அல்லது ஆலோசனைகளை இங்கே விவரிக்கவும்...'
                          : 'Write your thoughts, suggestions, or words of appreciation here...'
                      }
                      className="w-full bg-stone-50 border border-gray-200 rounded-xl p-4 text-sm sm:text-base text-gray-900 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    ></textarea>
                  </div>

                  <div className="flex items-center bg-stone-50 p-3.5 rounded-xl border border-gray-200">
                    <label className="inline-flex items-center cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={isAnonymous}
                        onChange={(e) => setIsAnonymous(e.target.checked)}
                        className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 border-gray-300 cursor-pointer"
                      />
                      <span className="ml-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                        {isTamil ? 'பெயரை மறைத்து அநாமதேயமாக சமர்ப்பிக்கவும்' : 'Submit as Anonymous Citizen'}
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-gray-400">
                  {/* {isTamil ? '🔒 நேரடி தரவுத்தள பாதுகாப்பு' : '🔒 Direct Database Sync • Real-time display'} */}
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-amber-500/25 transition-all duration-200 transform active:scale-95 disabled:opacity-75 cursor-pointer text-sm sm:text-base"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                      <span>{isTamil ? 'சேமிக்கிறது...' : 'Submitting to Database...'}</span>
                    </>
                  ) : submitSuccess ? (
                    <span>✓ {isTamil ? 'வெற்றிகரமாக பகிரப்பட்டது!' : 'Feedback Submitted!'}</span>
                  ) : (
                    <>
                      <span>{isTamil ? 'கருத்தை சமர்ப்பிக்கவும்' : 'Submit Feedback'}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Submitted Feedbacks List Under Form */}
        <section className="bg-white rounded-2xl shadow-xl border border-gray-200/80 p-5 sm:p-8 lg:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">💬</span>
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900">
                  {isTamil ? 'பொதுமக்கள் பகிர்ந்த கருத்துக்கள்' : 'Citizen Feedbacks'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                {isTamil
                  ? 'மக்களால் தரவுத்தளத்தில் பகிரப்பட்ட உண்மையான பதிவுகள்'
                  : 'Live feedback fetched directly from the database'}
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-amber-100 text-amber-900 text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full border border-amber-200">
                {filteredFeedbacks.length} {isTamil ? 'கருத்துக்கள்' : 'Feedbacks'}
              </span>

              <button
                onClick={loadData}
                className="p-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-xs font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer"
                title="Refresh from Database"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="hidden sm:inline">{isTamil ? 'புதுப்பி' : 'Refresh'}</span>
              </button>
            </div>
          </div>

          {/* Feedback Cards */}
          <div className="mt-6 space-y-4 max-h-[700px] overflow-y-auto pr-1 sm:pr-2">
            {loading ? (
              /* Loading skeletons */
              [1, 2, 3].map((n) => (
                <div key={n} className="bg-stone-50 rounded-xl p-5 border border-gray-100 animate-pulse space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div className="space-y-1.5 flex-1">
                      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-3 bg-gray-100 rounded w-1/4"></div>
                    </div>
                  </div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                </div>
              ))
            ) : filteredFeedbacks.length === 0 ? (
              <div className="text-center py-14 bg-stone-50 rounded-xl border border-dashed border-gray-200">
                <div className="text-4xl mb-3">💬</div>
                <h4 className="text-base font-bold text-gray-700">
                  {isTamil ? 'இதுவரை கருத்துக்கள் எதுவும் இல்லை' : 'No feedback entries yet'}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-sm mx-auto">
                  {isTamil
                    ? 'மேலே உள்ள படிவத்தைப் பயன்படுத்தி முதல் கருத்தைப் பதிவிடுங்கள்!'
                    : 'Be the first to submit your feedback using the form above!'}
                </p>
              </div>
            ) : (
              filteredFeedbacks.map((item, idx) => {
                const ratingNum = Number(item.rating) || 5;
                const isAnon = Boolean(item.anonymous) || !item.name || item.name.toLowerCase() === 'anonymous';
                const displayName = isAnon ? (isTamil ? 'அநாமதேய குடிமகன்' : 'Anonymous Citizen') : item.name;
                const tagType = item.feedback_type || item.type;

                return (
                  <div
                    key={item.id || `feedback-item-${idx}`}
                    className="bg-stone-50/60 hover:bg-white rounded-xl p-4 sm:p-6 border border-gray-200/80 hover:border-amber-300 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Card Header: Avatar, Name, Date, Rating, Tag */}
                      <div className="flex items-start justify-between gap-3 mb-3 flex-wrap sm:flex-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 shadow-sm">
                            {getInitials(displayName)}
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-bold text-gray-900 flex items-center gap-1.5 flex-wrap">
                              <span>{displayName}</span>
                              {isAnon && (
                                <span className="text-[10px] bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded font-normal">
                                  {isTamil ? 'குடிமகன்' : 'Citizen'}
                                </span>
                              )}
                            </h4>
                            <p className="text-[11px] sm:text-xs text-gray-400">
                              {formatDate(item.created_at)}
                            </p>
                          </div>
                        </div>

                        {/* Badges and Stars */}
                        <div className="flex sm:flex-col items-center sm:items-end gap-1.5 w-full sm:w-auto justify-between sm:justify-start mt-2 sm:mt-0">
                          <div className="flex text-amber-500 text-sm sm:text-base">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <span key={s}>{s <= ratingNum ? '★' : '☆'}</span>
                            ))}
                          </div>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {item.department && (
                              <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full border bg-blue-50 text-blue-700 border-blue-200">
                                🏢 {item.department}
                              </span>
                            )}
                            {tagType && (
                              <span
                                className={`text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full border ${getTagColor(
                                  tagType
                                )}`}
                              >
                                {tagType}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed whitespace-pre-line mt-2 pl-1">
                        "{item.message}"
                      </p>
                    </div>

                    {/* Card Footer: Verified Badge */}
                    <div className="mt-4 pt-2.5 border-t border-gray-200/60 flex items-center justify-between text-[11px] sm:text-xs text-gray-400">
                      <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {isTamil ? 'சரிபார்க்கப்பட்ட பதிவு' : 'Verified Entry'}
                      </span>
                      <span className="text-gray-400">#KovalamPanchayat</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
