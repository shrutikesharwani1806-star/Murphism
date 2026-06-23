'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Trash2, Clock, CheckCircle, User, Mail, Phone, 
  BookOpen, MessageSquare, Lock, LogOut, RefreshCw
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import BookLoader from '@/components/BookLoader';

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  
  const [enrollments, setEnrollments] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('enrollments'); // 'enrollments' | 'contacts' | 'users'
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [courseFilter, setCourseFilter] = useState('all');

  // Securely verify admin session on mount
  useEffect(() => {
    fetch('/api/auth/me')
      .then(r => r.json())
      .then(data => {
        if (data.success && data.user && data.user.isAdmin) {
          setIsAuthenticated(true);
          fetchData();
        } else {
          // If not admin, redirect to home page
          router.push('/');
        }
      })
      .catch(() => {
        router.push('/');
      });
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setIsAuthenticated(false);
    setEnrollments([]);
    setContacts([]);
    setUsers([]);
    router.push('/');
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/enquiries');
      const data = await res.json();
      if (data.success) {
        setEnrollments(data.enrollments || []);
        setContacts(data.contacts || []);
      }
      const resUsers = await fetch('/api/admin/users');
      const dataUsers = await resUsers.json();
      if (dataUsers.success) {
        setUsers(dataUsers.users || []);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, type, newStatus) => {
    try {
      const res = await fetch('/api/admin/enquiries', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, type, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        if (type === 'enrollment') {
          setEnrollments(prev => prev.map(item => item._id === id ? { ...item, status: newStatus } : item));
        } else {
          setContacts(prev => prev.map(item => item._id === id ? { ...item, status: newStatus } : item));
        }
      }
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const handleDelete = async (id, type) => {
    if (!confirm('Are you sure you want to delete this enquiry?')) return;
    try {
      const res = await fetch(`/api/admin/enquiries?id=${id}&type=${type}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success) {
        if (type === 'enrollment') {
          setEnrollments(prev => prev.filter(item => item._id !== id));
        } else {
          setContacts(prev => prev.filter(item => item._id !== id));
        }
      }
    } catch (err) {
      console.error('Error deleting:', err);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!confirm('Are you sure you want to delete this user account?')) return;
    try {
      const res = await fetch(`/api/admin/users?id=${userId}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success) {
        setUsers(prev => prev.filter(item => item._id !== userId));
      } else {
        alert(data.error || 'Failed to delete user');
      }
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };

  // Filtered lists
  const getFilteredEnrollments = () => {
    return enrollments.filter(item => {
      if (!item) return false;
      const name = item.name || '';
      const email = item.email || '';
      const mobile = item.mobile || '';
      const course = item.course || '';

      const matchesSearch = 
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mobile.includes(searchQuery);
      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
      const matchesCourse = courseFilter === 'all' || course.toLowerCase() === courseFilter.toLowerCase();
      return matchesSearch && matchesStatus && matchesCourse;
    });
  };

  const getFilteredContacts = () => {
    return contacts.filter(item => {
      if (!item) return false;
      const name = item.name || '';
      const email = item.email || '';
      const mobile = item.mobile || '';
      const subject = item.subject || '';
      const message = item.message || '';

      const matchesSearch = 
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mobile.includes(searchQuery) ||
        subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        message.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  };

  const getFilteredUsers = () => {
    return users.filter(item => {
      if (!item) return false;
      const name = item.name || '';
      const email = item.email || '';
      const phone = item.phone || '';

      const matchesSearch = 
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        phone.includes(searchQuery);
      return matchesSearch;
    });
  };

  const filteredEnrollments = getFilteredEnrollments();
  const filteredContacts = getFilteredContacts();
  const filteredUsers = getFilteredUsers();

  // Stats calculation
  const totalEnrollments = enrollments.length;
  const pendingEnrollments = enrollments.filter(e => e.status === 'pending').length;
  const enrolledCount = enrollments.filter(e => e.status === 'enrolled').length;
  const totalContacts = contacts.length;
  const newContacts = contacts.filter(c => c.status === 'new').length;

  // Get unique courses for filter
  const uniqueCourses = [...new Set(enrollments.map(e => e.course))];

  if (loading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050508] text-white">
        <BookLoader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050508] text-[#f0ece0] font-sans pb-16">
      {/* Navbar */}
      <header className="border-b border-gray-900 bg-[#0a0907]/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-[#c9a227] font-bold text-xl tracking-wider hover:opacity-80 transition-all">
              MURPHISM <span className="text-white text-sm font-normal tracking-normal border-l border-gray-800 pl-3 ml-2">ADMIN</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={fetchData} 
              className="p-2 rounded hover:bg-gray-900 text-gray-400 hover:text-white transition-all"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-[#c9a227]' : ''}`} />
            </button>
            <button 
              onClick={handleLogout} 
              className="flex items-center gap-2 px-3 py-1.5 rounded bg-red-950/30 hover:bg-red-900/30 text-red-400 hover:text-red-300 text-xs border border-red-900/40 transition-all font-medium"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 mt-8">
        {/* Welcome Block */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">Dashboard Overview</h1>
            <p className="text-gray-400 text-sm mt-1">Manage enquiries, student course enrollments, and communications.</p>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="p-5 rounded-lg bg-[#0a0907] border border-gray-900 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Enrollments</p>
              <p className="text-2xl font-bold text-white mt-1">{totalEnrollments}</p>
            </div>
            <div className="p-3 bg-blue-950/40 rounded-full text-blue-400 border border-blue-900/40">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>
          <div className="p-5 rounded-lg bg-[#0a0907] border border-gray-900 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Pending Review</p>
              <p className="text-2xl font-bold text-[#c9a227] mt-1">{pendingEnrollments}</p>
            </div>
            <div className="p-3 bg-amber-950/40 rounded-full text-[#c9a227] border border-amber-900/40">
              <Clock className="w-5 h-5 animate-pulse" />
            </div>
          </div>
          <div className="p-5 rounded-lg bg-[#0a0907] border border-gray-900 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Enrolled Students</p>
              <p className="text-2xl font-bold text-green-400 mt-1">{enrolledCount}</p>
            </div>
            <div className="p-3 bg-green-950/40 rounded-full text-green-400 border border-green-900/40">
              <CheckCircle className="w-5 h-5" />
            </div>
          </div>
          <div className="p-5 rounded-lg bg-[#0a0907] border border-gray-900 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">General Enquiries</p>
              <p className="text-2xl font-bold text-purple-400 mt-1">{totalContacts} <span className="text-xs text-purple-400 font-normal">({newContacts} new)</span></p>
            </div>
            <div className="p-3 bg-purple-950/40 rounded-full text-purple-400 border border-purple-900/40">
              <MessageSquare className="w-5 h-5" />
            </div>
          </div>
          <div className="p-5 rounded-lg bg-[#0a0907] border border-gray-900 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Registered Users</p>
              <p className="text-2xl font-bold text-cyan-400 mt-1">{users.length}</p>
            </div>
            <div className="p-3 bg-cyan-950/40 rounded-full text-cyan-400 border border-cyan-900/40">
              <User className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Tab Controls & Filters */}
        <div className="bg-[#0a0907] border border-gray-900 rounded-xl p-6 shadow-xl mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-900">
            {/* Tabs */}
            <div className="flex gap-2">
              <button
                onClick={() => { setActiveTab('enrollments'); setStatusFilter('all'); }}
                className={`px-4 py-2.5 rounded text-sm font-semibold tracking-wide transition-all ${
                  activeTab === 'enrollments'
                    ? 'bg-[#c9a227] text-black shadow-md shadow-[#c9a227]/10'
                    : 'bg-[#100f0d] text-gray-400 hover:text-white border border-gray-800'
                }`}
              >
                Enrollment Requests ({filteredEnrollments.length})
              </button>
              <button
                onClick={() => { setActiveTab('contacts'); setStatusFilter('all'); }}
                className={`px-4 py-2.5 rounded text-sm font-semibold tracking-wide transition-all ${
                  activeTab === 'contacts'
                    ? 'bg-[#c9a227] text-black shadow-md shadow-[#c9a227]/10'
                    : 'bg-[#100f0d] text-gray-400 hover:text-white border border-gray-800'
                }`}
              >
                General Contacts ({filteredContacts.length})
              </button>
              <button
                onClick={() => { setActiveTab('users'); setStatusFilter('all'); }}
                className={`px-4 py-2.5 rounded text-sm font-semibold tracking-wide transition-all ${
                  activeTab === 'users'
                    ? 'bg-[#c9a227] text-black shadow-md shadow-[#c9a227]/10'
                    : 'bg-[#100f0d] text-gray-400 hover:text-white border border-gray-800'
                }`}
              >
                Registered Users ({filteredUsers.length})
              </button>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search name, email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2.5 rounded bg-[#100f0d] border border-gray-800 text-sm text-white focus:outline-none focus:border-[#c9a227] w-64 transition-all"
                />
              </div>

              {/* Status Filter (hidden on users tab) */}
              {activeTab !== 'users' && (
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2.5 rounded bg-[#100f0d] border border-gray-800 text-sm text-white focus:outline-none focus:border-[#c9a227]"
                >
                  <option value="all">All Statuses</option>
                  {activeTab === 'enrollments' ? (
                    <>
                      <option value="pending">Pending</option>
                      <option value="contacted">Contacted</option>
                      <option value="enrolled">Enrolled</option>
                      <option value="rejected">Rejected</option>
                    </>
                  ) : (
                    <>
                      <option value="new">New</option>
                      <option value="read">Read</option>
                      <option value="replied">Replied</option>
                    </>
                  )}
                </select>
              )}

              {/* Course Filter (Enrollments only) */}
              {activeTab === 'enrollments' && (
                <select
                  value={courseFilter}
                  onChange={(e) => setCourseFilter(e.target.value)}
                  className="px-3 py-2.5 rounded bg-[#100f0d] border border-gray-800 text-sm text-white focus:outline-none focus:border-[#c9a227]"
                >
                  <option value="all">All Courses</option>
                  {uniqueCourses.map(course => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              )}
            </div>
          </div>

          {/* Table / List */}
          <div className="overflow-x-auto mt-6">
            {activeTab === 'enrollments' ? (
              filteredEnrollments.length === 0 ? (
                <div className="text-center py-12 text-gray-500 text-sm">
                  No enrollment requests found matching the current filters.
                </div>
              ) : (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-900 text-gray-400 text-xs font-semibold uppercase tracking-wider">
                      <th className="py-4 px-4">Student Details</th>
                      <th className="py-4 px-4">Enrolling Course</th>
                      <th className="py-4 px-4">Message</th>
                      <th className="py-4 px-4">Submitted At</th>
                      <th className="py-4 px-4">Status</th>
                      <th className="py-4 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-900/60 text-sm">
                    {filteredEnrollments.map((item) => (
                      <tr key={item._id} className="hover:bg-white/[0.01] transition-all">
                        <td className="py-4 px-4">
                          <div className="font-semibold text-white text-base">{item.name}</div>
                          <div className="flex flex-col gap-0.5 mt-1 text-xs text-gray-400">
                            <span className="flex items-center gap-1.5"><Mail className="w-3 h-3 text-[#c9a227]" /> {item.email}</span>
                            {item.mobile && <span className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-[#c9a227]" /> {item.mobile}</span>}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="px-2.5 py-1 rounded bg-[#c9a227]/10 text-[#c9a227] font-medium text-xs border border-[#c9a227]/20 uppercase tracking-wider">
                            {item.course}
                          </span>
                        </td>
                        <td className="py-4 px-4 max-w-xs">
                          <p className="text-gray-300 text-xs break-words line-clamp-3" title={item.message}>
                            {item.message || <span className="text-gray-600 italic">No message provided</span>}
                          </p>
                        </td>
                        <td className="py-4 px-4 text-xs text-gray-400">
                          {new Date(item.createdAt).toLocaleString()}
                        </td>
                        <td className="py-4 px-4">
                          <select
                            value={item.status}
                            onChange={(e) => handleStatusChange(item._id, 'enrollment', e.target.value)}
                            className={`px-2 py-1 rounded text-xs font-semibold focus:outline-none border transition-all ${
                              item.status === 'pending' ? 'bg-amber-950/40 text-amber-400 border-amber-900/40' :
                              item.status === 'contacted' ? 'bg-blue-950/40 text-blue-400 border-blue-900/40' :
                              item.status === 'enrolled' ? 'bg-green-950/40 text-green-400 border-green-900/40' :
                              'bg-red-950/40 text-red-400 border-red-900/40'
                            }`}
                          >
                            <option value="pending" className="bg-[#0a0907] text-white">Pending</option>
                            <option value="contacted" className="bg-[#0a0907] text-white">Contacted</option>
                            <option value="enrolled" className="bg-[#0a0907] text-white">Enrolled</option>
                            <option value="rejected" className="bg-[#0a0907] text-white">Rejected</option>
                          </select>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <button
                            onClick={() => handleDelete(item._id, 'enrollment')}
                            className="p-2 rounded bg-red-950/20 hover:bg-red-950/60 text-red-400 hover:text-red-200 border border-red-900/30 transition-all"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            ) : activeTab === 'contacts' ? (
              filteredContacts.length === 0 ? (
                <div className="text-center py-12 text-gray-500 text-sm">
                  No general contact enquiries found matching the current filters.
                </div>
              ) : (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-900 text-gray-400 text-xs font-semibold uppercase tracking-wider">
                      <th className="py-4 px-4">Contact Details</th>
                      <th className="py-4 px-4">Subject</th>
                      <th className="py-4 px-4">Message</th>
                      <th className="py-4 px-4">Submitted At</th>
                      <th className="py-4 px-4">Status</th>
                      <th className="py-4 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-900/60 text-sm">
                    {filteredContacts.map((item) => (
                      <tr key={item._id} className="hover:bg-white/[0.01] transition-all">
                        <td className="py-4 px-4">
                          <div className="font-semibold text-white text-base">{item.name}</div>
                          <div className="flex flex-col gap-0.5 mt-1 text-xs text-gray-400">
                            <span className="flex items-center gap-1.5"><Mail className="w-3 h-3 text-[#c9a227]" /> {item.email}</span>
                            {item.mobile && <span className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-[#c9a227]" /> {item.mobile}</span>}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="font-medium text-gray-200">
                            {item.subject || <span className="text-gray-600 italic">No subject</span>}
                          </span>
                        </td>
                        <td className="py-4 px-4 max-w-xs">
                          <p className="text-gray-300 text-xs break-words line-clamp-3" title={item.message}>
                            {item.message}
                          </p>
                        </td>
                        <td className="py-4 px-4 text-xs text-gray-400">
                          {new Date(item.createdAt).toLocaleString()}
                        </td>
                        <td className="py-4 px-4">
                          <select
                            value={item.status}
                            onChange={(e) => handleStatusChange(item._id, 'contact', e.target.value)}
                            className={`px-2 py-1 rounded text-xs font-semibold focus:outline-none border transition-all ${
                              item.status === 'new' ? 'bg-amber-950/40 text-amber-400 border-amber-900/40' :
                              item.status === 'read' ? 'bg-blue-950/40 text-blue-400 border-blue-900/40' :
                              'bg-green-950/40 text-green-400 border-green-900/40'
                            }`}
                          >
                            <option value="new" className="bg-[#0a0907] text-white">New</option>
                            <option value="read" className="bg-[#0a0907] text-white">Read</option>
                            <option value="replied" className="bg-[#0a0907] text-white">Replied</option>
                          </select>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <button
                            onClick={() => handleDelete(item._id, 'contact')}
                            className="p-2 rounded bg-red-950/20 hover:bg-red-950/60 text-red-400 hover:text-red-200 border border-red-900/30 transition-all"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            ) : activeTab === 'users' ? (
              filteredUsers.length === 0 ? (
                <div className="text-center py-12 text-gray-500 text-sm">
                  No registered users found matching the current filters.
                </div>
              ) : (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-900 text-gray-400 text-xs font-semibold uppercase tracking-wider">
                      <th className="py-4 px-4">User Details</th>
                      <th className="py-4 px-4">Phone</th>
                      <th className="py-4 px-4">Role</th>
                      <th className="py-4 px-4">Registered At</th>
                      <th className="py-4 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-900/60 text-sm">
                    {filteredUsers.map((item) => (
                      <tr key={item._id} className="hover:bg-white/[0.01] transition-all">
                        <td className="py-4 px-4">
                          <div className="font-semibold text-white text-base">{item.name}</div>
                          <div className="flex items-center gap-1.5 mt-1 text-xs text-gray-400">
                            <Mail className="w-3 h-3 text-[#c9a227]" /> {item.email}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-300">
                          {item.phone ? (
                            <span className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-[#c9a227]" /> {item.phone}</span>
                          ) : (
                            <span className="text-gray-600 italic">Not provided</span>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          {item.isAdmin ? (
                            <span className="px-2.5 py-1 rounded bg-[#c9a227]/10 text-[#c9a227] font-medium text-xs border border-[#c9a227]/20 uppercase tracking-wider">Admin</span>
                          ) : (
                            <span className="px-2.5 py-1 rounded bg-gray-900/60 text-gray-400 font-medium text-xs border border-gray-800 uppercase tracking-wider">User</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-xs text-gray-400">
                          {new Date(item.createdAt).toLocaleString()}
                        </td>
                        <td className="py-4 px-4 text-right">
                          {!item.isAdmin && (
                            <button
                              onClick={() => handleDeleteUser(item._id)}
                              className="p-2 rounded bg-red-950/20 hover:bg-red-950/60 text-red-400 hover:text-red-200 border border-red-900/30 transition-all"
                              title="Delete User"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}
