'use client';
import { useState, useEffect } from 'react';
import { Mail, Check, X, Eye, Loader2, Filter } from 'lucide-react';

interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  approved: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function AdminContactsPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'approved' | 'pending'>('all');
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  useEffect(() => {
    fetchMessages();
  }, [filter]);

  const fetchMessages = async () => {
    setIsLoading(true);
    try {
      let url = '/api/Contact';
      if (filter === 'approved') {
        url += '?approved=true';
      } else if (filter === 'pending') {
        url += '?approved=false';
      }

      const response = await fetch(url);
      const data = await response.json();

      if (data.success) {
        setMessages(data.data);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApprove = async (id: string) => {
    setActionLoading(id);
    try {
      const response = await fetch(`/api/Contact/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ approved: true }),
      });

      const data = await response.json();

      if (data.success) {
        // Update the message in the list
        setMessages(messages.map(msg => 
          msg._id === id ? { ...msg, approved: true } : msg
        ));
        if (selectedMessage?._id === id) {
          setSelectedMessage({ ...selectedMessage, approved: true });
        }
      }
    } catch (error) {
      console.error('Error approving message:', error);
    } finally {
      setActionLoading(null);
    }
  };

  const handleReject = async (id: string) => {
    setActionLoading(id);
    try {
      const response = await fetch(`/api/Contact/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ approved: false }),
      });

      const data = await response.json();

      if (data.success) {
        setMessages(messages.map(msg => 
          msg._id === id ? { ...msg, approved: false } : msg
        ));
        if (selectedMessage?._id === id) {
          setSelectedMessage({ ...selectedMessage, approved: false });
        }
      }
    } catch (error) {
      console.error('Error rejecting message:', error);
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    setActionLoading(id);
    try {
      const response = await fetch(`/api/Contact/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        setMessages(messages.filter(msg => msg._id !== id));
        if (selectedMessage?._id === id) {
          setSelectedMessage(null);
        }
      }
    } catch (error) {
      console.error('Error deleting message:', error);
    } finally {
      setActionLoading(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const filteredMessages = messages;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6cf92] to-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#4D5557] mb-2" style={{ fontFamily: 'Playfair Display' }}>
            Contact Messages
          </h1>
          <p className="text-[#4A1A11]">Manage and respond to customer inquiries</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-[#4D5557]" />
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'all'
                  ? 'bg-[#4D5557] text-white'
                  : 'bg-gray-100 text-[#4D5557] hover:bg-gray-200'
              }`}
            >
              All ({messages.length})
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'pending'
                  ? 'bg-[#4D5557] text-white'
                  : 'bg-gray-100 text-[#4D5557] hover:bg-gray-200'
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilter('approved')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'approved'
                  ? 'bg-[#4D5557] text-white'
                  : 'bg-gray-100 text-[#4D5557] hover:bg-gray-200'
              }`}
            >
              Approved
            </button>
          </div>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-[#4D5557]" />
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Messages List */}
            <div className="space-y-4">
              {filteredMessages.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No messages found</p>
                </div>
              ) : (
                filteredMessages.map((message) => (
                  <div
                    key={message._id}
                    className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all hover:shadow-lg ${
                      selectedMessage?._id === message._id ? 'ring-2 ring-[#4D5557]' : ''
                    }`}
                    onClick={() => setSelectedMessage(message)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#4D5557] text-lg">{message.name}</h3>
                        <p className="text-sm text-gray-600">{message.email}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          message.approved
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {message.approved ? 'Approved' : 'Pending'}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm mb-3 line-clamp-2">{message.message}</p>
                    <p className="text-xs text-gray-500">{formatDate(message.createdAt)}</p>
                  </div>
                ))
              )}
            </div>

            {/* Message Detail */}
            <div className="lg:sticky lg:top-8 lg:h-fit">
              {selectedMessage ? (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-[#4D5557] mb-1" style={{ fontFamily: 'Playfair Display' }}>
                        {selectedMessage.name}
                      </h2>
                      <a href={`mailto:${selectedMessage.email}`} className="text-[#4D5557] hover:underline">
                        {selectedMessage.email}
                      </a>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        selectedMessage.approved
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {selectedMessage.approved ? 'Approved' : 'Pending'}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Message:</h3>
                    <p className="text-gray-800 whitespace-pre-wrap">{selectedMessage.message}</p>
                  </div>

                  <div className="mb-6 text-sm text-gray-600">
                    <p>Received: {formatDate(selectedMessage.createdAt)}</p>
                    {selectedMessage.updatedAt !== selectedMessage.createdAt && (
                      <p>Updated: {formatDate(selectedMessage.updatedAt)}</p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {!selectedMessage.approved ? (
                      <button
                        onClick={() => handleApprove(selectedMessage._id)}
                        disabled={actionLoading === selectedMessage._id}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {actionLoading === selectedMessage._id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Check className="w-4 h-4" />
                        )}
                        Approve
                      </button>
                    ) : (
                      <button
                        onClick={() => handleReject(selectedMessage._id)}
                        disabled={actionLoading === selectedMessage._id}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {actionLoading === selectedMessage._id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <X className="w-4 h-4" />
                        )}
                        Unapprove
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(selectedMessage._id)}
                      disabled={actionLoading === selectedMessage._id}
                      className="px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {actionLoading === selectedMessage._id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <X className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <Eye className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Select a message to view details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}