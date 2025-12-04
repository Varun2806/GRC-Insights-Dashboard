import React, { useState, useMemo } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertTriangle, CheckCircle, TrendingUp, Activity, Shield, AlertCircle } from 'lucide-react';

const GRCDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Q4 2024');
  const [selectedRiskLevel, setSelectedRiskLevel] = useState('All');

  // Sample data - Risk Distribution
  const riskData = [
    { category: 'Operational', critical: 8, high: 15, medium: 23, low: 12 },
    { category: 'Financial', critical: 5, high: 12, medium: 18, low: 20 },
    { category: 'Compliance', critical: 3, high: 9, medium: 14, low: 25 },
    { category: 'Strategic', critical: 6, high: 11, medium: 20, low: 15 },
    { category: 'Technology', critical: 10, high: 18, medium: 22, low: 8 }
  ];

  // Compliance KPIs
  const complianceData = [
    { name: 'GDPR', value: 94, target: 95 },
    { name: 'SOX', value: 96, target: 98 },
    { name: 'ISO 27001', value: 89, target: 90 },
    { name: 'HIPAA', value: 92, target: 95 },
    { name: 'PCI DSS', value: 91, target: 93 }
  ];

  // Incident Trends
  const incidentTrends = [
    { month: 'Jul', incidents: 45, resolved: 42, pending: 3 },
    { month: 'Aug', incidents: 52, resolved: 48, pending: 4 },
    { month: 'Sep', incidents: 38, resolved: 36, pending: 2 },
    { month: 'Oct', incidents: 61, resolved: 55, pending: 6 },
    { month: 'Nov', incidents: 47, resolved: 44, pending: 3 },
    { month: 'Dec', incidents: 43, resolved: 40, pending: 3 }
  ];

  // Risk Score Distribution
  const riskScoreData = [
    { name: 'Critical', value: 32, color: '#dc2626' },
    { name: 'High', value: 65, color: '#f97316' },
    { name: 'Medium', value: 97, color: '#fbbf24' },
    { name: 'Low', value: 80, color: '#22c55e' }
  ];

  // Alert Insights
  const alertData = [
    { type: 'Policy Violations', count: 18, trend: 'up' },
    { type: 'Control Failures', count: 12, trend: 'down' },
    { type: 'Access Anomalies', count: 25, trend: 'up' },
    { type: 'Audit Findings', count: 8, trend: 'stable' }
  ];

  // Calculate KPIs
  const totalRisks = riskScoreData.reduce((sum, item) => sum + item.value, 0);
  const criticalRisks = riskScoreData[0].value;
  const avgCompliance = Math.round(complianceData.reduce((sum, item) => sum + item.value, 0) / complianceData.length);
  const totalIncidents = incidentTrends[incidentTrends.length - 1].incidents;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                <Shield className="text-blue-400" size={40} />
                GRC Insights Dashboard
              </h1>
              <p className="text-slate-300">Risk & Compliance Monitoring | Real-time Analytics</p>
            </div>
            <div className="flex gap-3">
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Q4 2024</option>
                <option>Q3 2024</option>
                <option>Q2 2024</option>
              </select>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <Activity className="text-white/80" size={32} />
              <span className="bg-blue-500/30 text-white text-xs px-2 py-1 rounded">Live</span>
            </div>
            <h3 className="text-white/80 text-sm mb-1">Total Risks</h3>
            <p className="text-3xl font-bold text-white">{totalRisks}</p>
            <p className="text-blue-200 text-xs mt-2">Across all categories</p>
          </div>

          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <AlertTriangle className="text-white/80" size={32} />
              <span className="bg-red-500/30 text-white text-xs px-2 py-1 rounded">Alert</span>
            </div>
            <h3 className="text-white/80 text-sm mb-1">Critical Risks</h3>
            <p className="text-3xl font-bold text-white">{criticalRisks}</p>
            <p className="text-red-200 text-xs mt-2">Immediate attention needed</p>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="text-white/80" size={32} />
              <span className="bg-green-500/30 text-white text-xs px-2 py-1 rounded">Target: 95%</span>
            </div>
            <h3 className="text-white/80 text-sm mb-1">Compliance Rate</h3>
            <p className="text-3xl font-bold text-white">{avgCompliance}%</p>
            <p className="text-green-200 text-xs mt-2">Above industry standard</p>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="text-white/80" size={32} />
              <span className="bg-purple-500/30 text-white text-xs px-2 py-1 rounded">MTD</span>
            </div>
            <h3 className="text-white/80 text-sm mb-1">Open Incidents</h3>
            <p className="text-3xl font-bold text-white">{totalIncidents}</p>
            <p className="text-purple-200 text-xs mt-2">-8% from last month</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Risk Heatmap */}
          <div className="col-span-2 bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <AlertCircle className="text-orange-400" size={24} />
              Risk Distribution by Category
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={riskData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="category" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                  labelStyle={{ color: '#f1f5f9' }}
                />
                <Legend />
                <Bar dataKey="critical" stackId="a" fill="#dc2626" name="Critical" />
                <Bar dataKey="high" stackId="a" fill="#f97316" name="High" />
                <Bar dataKey="medium" stackId="a" fill="#fbbf24" name="Medium" />
                <Bar dataKey="low" stackId="a" fill="#22c55e" name="Low" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Risk Score Pie */}
          <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Risk Severity</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={riskScoreData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={90}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {riskScoreData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Incident Trends */}
          <div className="col-span-2 bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Incident Trend Analysis</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={incidentTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                  labelStyle={{ color: '#f1f5f9' }}
                />
                <Legend />
                <Line type="monotone" dataKey="incidents" stroke="#3b82f6" strokeWidth={3} name="Total Incidents" />
                <Line type="monotone" dataKey="resolved" stroke="#22c55e" strokeWidth={3} name="Resolved" />
                <Line type="monotone" dataKey="pending" stroke="#f59e0b" strokeWidth={3} name="Pending" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Compliance KPIs */}
          <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Compliance KPIs</h2>
            <div className="space-y-4">
              {complianceData.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300 text-sm font-medium">{item.name}</span>
                    <span className={`text-sm font-bold ${item.value >= item.target ? 'text-green-400' : 'text-orange-400'}`}>
                      {item.value}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${item.value >= item.target ? 'bg-green-500' : 'bg-orange-500'}`}
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-slate-400">Target: {item.target}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alert Insights */}
        <div className="mt-6 bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700">
          <h2 className="text-xl font-semibold text-white mb-4">Automated Alert Insights</h2>
          <div className="grid grid-cols-4 gap-4">
            {alertData.map((alert, idx) => (
              <div key={idx} className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300 text-sm">{alert.type}</span>
                  {alert.trend === 'up' && <TrendingUp className="text-red-400" size={16} />}
                  {alert.trend === 'down' && <TrendingUp className="text-green-400 rotate-180" size={16} />}
                </div>
                <p className="text-2xl font-bold text-white">{alert.count}</p>
                <p className="text-xs text-slate-400 mt-1">Last 30 days</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center text-slate-400 text-sm">
          <p>Dashboard updates in real-time • Last updated: {new Date().toLocaleString()} • Compliance Accuracy: 92%</p>
        </div>
      </div>
    </div>
  );
};

export default GRCDashboard;