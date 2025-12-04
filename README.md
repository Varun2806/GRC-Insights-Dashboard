# GRC Insights Dashboard

**A comprehensive enterprise-grade Governance, Risk, and Compliance (GRC) monitoring solution**

[Features](#features) • [Installation](#installation) • [Documentation](#documentation) • [Contributing](#contributing)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Architecture](#architecture)
- [Component Documentation](#component-documentation)
- [Data Models](#data-models)
- [Customization Guide](#customization-guide)
- [Styling and Theming](#styling-and-theming)
- [Performance Optimization](#performance-optimization)
- [Browser Support](#browser-support)
- [API Integration](#api-integration)
- [Security Considerations](#security-considerations)
- [Testing](#testing)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [License](#license)

---

## Overview

The GRC Insights Dashboard is a modern, real-time analytics platform designed to provide comprehensive visibility into an organization's governance, risk, and compliance posture. Built with React and powered by Recharts, this dashboard transforms complex GRC data into actionable insights through intuitive visualizations and interactive components.

### Why GRC Insights Dashboard?

In today's regulatory environment, organizations face increasing pressure to maintain robust governance frameworks, manage risks effectively, and ensure compliance with multiple regulatory standards. The GRC Insights Dashboard addresses these challenges by:

- **Centralizing GRC Data**: Consolidate risk metrics, compliance KPIs, and incident data in a single view
- **Enabling Proactive Risk Management**: Identify critical risks and emerging patterns before they escalate
- **Simplifying Compliance Reporting**: Track adherence to GDPR, SOX, ISO 27001, HIPAA, and PCI DSS standards
- **Supporting Data-Driven Decisions**: Leverage visual analytics to inform strategic risk decisions
- **Improving Stakeholder Communication**: Present complex GRC metrics in an accessible format

### Key Use Cases

- **Enterprise Risk Management**: Monitor and analyze risk exposure across operational, financial, compliance, strategic, and technology domains
- **Compliance Monitoring**: Track compliance metrics against regulatory targets and industry benchmarks
- **Incident Response**: Visualize incident trends and resolution rates to optimize response strategies
- **Executive Reporting**: Provide leadership with high-level GRC insights for strategic planning
- **Audit Preparation**: Maintain continuous visibility into compliance posture for audit readiness

---

## Features

### 📊 Real-Time KPI Monitoring

The dashboard provides four critical KPI cards that update in real-time:

- **Total Risks**: Aggregate view of all identified risks across the organization (274 risks)
- **Critical Risks**: High-priority risks requiring immediate attention (32 critical alerts)
- **Compliance Rate**: Average compliance score across all regulatory frameworks (92%)
- **Open Incidents**: Current unresolved incidents with trend analysis (43 incidents, -8% MTD)

Each KPI card features:
- Color-coded status indicators (blue, red, green, purple)
- Contextual badges (Live, Alert, Target, MTD)
- Trend information and comparative metrics
- Gradient backgrounds for visual hierarchy

### 🎯 Risk Distribution Analysis

A comprehensive stacked bar chart displays risk distribution across five key categories:

1. **Operational Risks**: Day-to-day business operations and processes
2. **Financial Risks**: Financial exposure, market volatility, and economic factors
3. **Compliance Risks**: Regulatory adherence and policy violations
4. **Strategic Risks**: Business strategy execution and competitive positioning
5. **Technology Risks**: IT infrastructure, cybersecurity, and digital transformation

Each category shows risk breakdown by severity:
- **Critical** (Red): Immediate threat requiring urgent action
- **High** (Orange): Significant risk requiring prompt attention
- **Medium** (Yellow): Moderate risk requiring monitoring
- **Low** (Green): Minimal risk with standard controls

### 🥧 Risk Severity Distribution

An interactive pie chart provides a holistic view of risk severity across the organization:

- **Critical Risks**: 32 (12% of total)
- **High Risks**: 65 (24% of total)
- **Medium Risks**: 97 (35% of total)
- **Low Risks**: 80 (29% of total)

The visualization uses intuitive color coding and percentage labels for quick interpretation.

### 📈 Incident Trend Analysis

A multi-line chart tracks incident patterns over a six-month period:

- **Total Incidents**: Overall incident volume per month
- **Resolved Incidents**: Successfully closed incidents
- **Pending Incidents**: Outstanding incidents requiring resolution

The trend analysis helps identify:
- Seasonal patterns in incident occurrence
- Resolution effectiveness and efficiency
- Resource allocation needs
- Emerging risk patterns

### ✅ Compliance KPI Tracking

Monitor compliance with five major regulatory frameworks:

1. **GDPR** (General Data Protection Regulation)
   - Current: 94% | Target: 95%
   - Status: Approaching target

2. **SOX** (Sarbanes-Oxley Act)
   - Current: 96% | Target: 98%
   - Status: Approaching target

3. **ISO 27001** (Information Security Management)
   - Current: 89% | Target: 90%
   - Status: Approaching target

4. **HIPAA** (Health Insurance Portability and Accountability Act)
   - Current: 92% | Target: 95%
   - Status: Below target

5. **PCI DSS** (Payment Card Industry Data Security Standard)
   - Current: 91% | Target: 93%
   - Status: Below target

Each framework displays:
- Progress bar with percentage completion
- Color-coded status (green = meeting target, orange = below target)
- Target threshold for context

### 🚨 Automated Alert Insights

Real-time monitoring of four critical alert categories:

- **Policy Violations**: 18 violations (trending up)
- **Control Failures**: 12 failures (trending down)
- **Access Anomalies**: 25 anomalies (trending up)
- **Audit Findings**: 8 findings (stable)

Trend indicators help prioritize investigation and remediation efforts.

### 🎛️ Interactive Controls

- **Period Selection**: Filter dashboard data by quarter (Q4 2024, Q3 2024, Q2 2024)
- **Risk Level Filtering**: Focus on specific risk severity levels (implemented as state management)
- **Responsive Design**: Adapts seamlessly to different screen sizes and resolutions

---

## Technology Stack

### Core Technologies

- **React 18.x**: Modern JavaScript library for building user interfaces
  - Hooks-based architecture (useState, useMemo)
  - Functional component patterns
  - Efficient re-rendering and state management

- **Recharts 2.x**: Composable charting library built on React components
  - Responsive chart containers
  - Customizable tooltips and legends
  - SVG-based rendering for crisp visuals

- **Lucide React 0.263.1**: Beautiful, consistent icon set
  - Lightweight SVG icons
  - Tree-shakeable for optimal bundle size
  - Accessible and customizable

### Styling

- **Tailwind CSS**: Utility-first CSS framework
  - Responsive design utilities
  - Custom color palettes
  - Gradient backgrounds and modern aesthetics
  - Dark theme optimized for GRC contexts

### Development Tools

- **Node.js**: JavaScript runtime environment
- **npm/yarn**: Package management
- **Webpack/Vite**: Module bundling (depending on your setup)
- **Babel**: JavaScript transpilation

---

## Getting Started

### Prerequisites

Before installing the GRC Insights Dashboard, ensure you have the following installed:

- **Node.js**: Version 16.x or higher
- **npm**: Version 8.x or higher (or yarn 1.22.x+)
- **Git**: For cloning the repository
- **Modern Web Browser**: Chrome, Firefox, Safari, or Edge (latest versions)

### Installation

#### Step 1: Clone the Repository

```bash
git clone https://github.com/your-organization/grc-insights-dashboard.git
cd grc-insights-dashboard
```

#### Step 2: Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

This will install all required dependencies:
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "recharts": "^2.5.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24"
  }
}
```

#### Step 3: Configure Tailwind CSS

Ensure your `tailwind.config.js` is properly configured:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color extensions if needed
      }
    },
  },
  plugins: [],
}
```

### Running the Application

#### Development Mode

Start the development server with hot reloading:

```bash
npm start
# or
yarn start
```

The application will open at `http://localhost:3000`

#### Production Build

Create an optimized production build:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `build/` directory.

#### Preview Production Build

Test the production build locally:

```bash
npm run serve
# or
npx serve -s build
```

---

## Architecture

### Component Hierarchy

```
GRCDashboard (Root Component)
│
├── State Management
│   ├── selectedPeriod: string
│   └── selectedRiskLevel: string
│
├── Header Section
│   ├── Title & Logo
│   └── Period Selector Dropdown
│
├── KPI Cards Grid (4 columns)
│   ├── Total Risks Card
│   ├── Critical Risks Card
│   ├── Compliance Rate Card
│   └── Open Incidents Card
│
├── Main Analytics Grid (3 columns)
│   ├── Risk Distribution Chart (2 cols)
│   │   └── Stacked Bar Chart Component
│   └── Risk Severity Pie (1 col)
│       └── Pie Chart Component
│
├── Secondary Analytics Grid (3 columns)
│   ├── Incident Trends (2 cols)
│   │   └── Line Chart Component
│   └── Compliance KPIs (1 col)
│       └── Progress Bars List
│
├── Alert Insights Section
│   └── Alert Cards Grid (4 columns)
│
└── Footer
    └── Status Information
```

### Data Flow

1. **Static Data**: Currently uses sample data arrays defined within the component
2. **State Management**: React hooks manage UI state (period selection, filters)
3. **Computed Values**: useMemo hook calculates derived metrics (totals, averages)
4. **Props Flow**: Data passed to Recharts components via props
5. **Event Handling**: User interactions update state, triggering re-renders

### Future Architecture Considerations

When integrating with a backend API:

```
Frontend (React)
    ↓
API Layer (Axios/Fetch)
    ↓
Backend API (REST/GraphQL)
    ↓
Business Logic Layer
    ↓
Data Access Layer
    ↓
Database (PostgreSQL/MongoDB)
```

---

## Component Documentation

### GRCDashboard Component

The main component that orchestrates the entire dashboard.

**Props**: None (root component)

**State**:
- `selectedPeriod`: Controls the time period for data filtering
- `selectedRiskLevel`: Filters risks by severity level

**Key Methods**:
- `useMemo` calculations for derived KPIs

**Example Usage**:
```jsx
import GRCDashboard from './components/GRCDashboard';

function App() {
  return <GRCDashboard />;
}
```

### Chart Components

#### BarChart - Risk Distribution

**Configuration**:
```jsx
<BarChart data={riskData}>
  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
  <XAxis dataKey="category" stroke="#94a3b8" />
  <YAxis stroke="#94a3b8" />
  <Tooltip />
  <Legend />
  <Bar dataKey="critical" stackId="a" fill="#dc2626" />
  <Bar dataKey="high" stackId="a" fill="#f97316" />
  <Bar dataKey="medium" stackId="a" fill="#fbbf24" />
  <Bar dataKey="low" stackId="a" fill="#22c55e" />
</BarChart>
```

**Customization Options**:
- Adjust `strokeDasharray` for grid line patterns
- Modify `fill` colors for different risk levels
- Change `stackId` for grouped vs stacked bars

#### PieChart - Risk Severity

**Configuration**:
```jsx
<PieChart>
  <Pie
    data={riskScoreData}
    cx="50%"
    cy="50%"
    labelLine={false}
    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
    outerRadius={90}
    dataKey="value"
  />
</PieChart>
```

**Customization Options**:
- Adjust `outerRadius` for pie size
- Modify `label` function for custom text
- Add `innerRadius` for donut charts

#### LineChart - Incident Trends

**Configuration**:
```jsx
<LineChart data={incidentTrends}>
  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
  <XAxis dataKey="month" stroke="#94a3b8" />
  <YAxis stroke="#94a3b8" />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="incidents" stroke="#3b82f6" strokeWidth={3} />
  <Line type="monotone" dataKey="resolved" stroke="#22c55e" strokeWidth={3} />
  <Line type="monotone" dataKey="pending" stroke="#f59e0b" strokeWidth={3} />
</LineChart>
```

**Customization Options**:
- Change `type` to "linear", "step", or "monotone"
- Adjust `strokeWidth` for line thickness
- Add `dot` prop for custom data point markers

---

## Data Models

### Risk Data Structure

```typescript
interface RiskCategory {
  category: string;      // Risk category name
  critical: number;      // Count of critical risks
  high: number;          // Count of high risks
  medium: number;        // Count of medium risks
  low: number;           // Count of low risks
}

const riskData: RiskCategory[] = [
  { category: 'Operational', critical: 8, high: 15, medium: 23, low: 12 },
  // ... more categories
];
```

### Compliance Data Structure

```typescript
interface ComplianceFramework {
  name: string;          // Framework name (e.g., "GDPR")
  value: number;         // Current compliance percentage
  target: number;        // Target compliance percentage
}

const complianceData: ComplianceFramework[] = [
  { name: 'GDPR', value: 94, target: 95 },
  // ... more frameworks
];
```

### Incident Data Structure

```typescript
interface IncidentTrend {
  month: string;         // Month abbreviation
  incidents: number;     // Total incidents
  resolved: number;      // Resolved incidents
  pending: number;       // Pending incidents
}

const incidentTrends: IncidentTrend[] = [
  { month: 'Jul', incidents: 45, resolved: 42, pending: 3 },
  // ... more months
];
```

### Risk Score Data Structure

```typescript
interface RiskScore {
  name: string;          // Severity level name
  value: number;         // Count of risks
  color: string;         // Hex color code
}

const riskScoreData: RiskScore[] = [
  { name: 'Critical', value: 32, color: '#dc2626' },
  // ... more severity levels
];
```

### Alert Data Structure

```typescript
interface AlertInsight {
  type: string;          // Alert category
  count: number;         // Number of alerts
  trend: 'up' | 'down' | 'stable';  // Trend direction
}

const alertData: AlertInsight[] = [
  { type: 'Policy Violations', count: 18, trend: 'up' },
  // ... more alert types
];
```

---

## Customization Guide

### Adding New Risk Categories

To add a new risk category to the distribution chart:

1. Update the `riskData` array:

```javascript
const riskData = [
  // Existing categories...
  { category: 'Cybersecurity', critical: 12, high: 20, medium: 18, low: 10 }
];
```

2. The chart will automatically render the new category with all severity levels.

### Modifying Compliance Frameworks

To add or modify compliance standards:

```javascript
const complianceData = [
  // Existing frameworks...
  { name: 'NIST CSF', value: 88, target: 90 },
  { name: 'COBIT', value: 91, target: 95 }
];
```

### Customizing KPI Cards

To add a new KPI card, duplicate the card structure:

```jsx
<div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl p-6 shadow-lg">
  <div className="flex items-center justify-between mb-2">
    <YourIcon className="text-white/80" size={32} />
    <span className="bg-indigo-500/30 text-white text-xs px-2 py-1 rounded">Status</span>
  </div>
  <h3 className="text-white/80 text-sm mb-1">Your Metric</h3>
  <p className="text-3xl font-bold text-white">{yourValue}</p>
  <p className="text-indigo-200 text-xs mt-2">Additional context</p>
</div>
```

### Adjusting Time Periods

Modify the period selector options:

```jsx
<select 
  value={selectedPeriod}
  onChange={(e) => setSelectedPeriod(e.target.value)}
  className="bg-slate-700 text-white px-4 py-2 rounded-lg"
>
  <option>Q4 2024</option>
  <option>Q3 2024</option>
  <option>Q2 2024</option>
  <option>Q1 2024</option>
  <option>FY 2024</option>
</select>
```

Then implement filtering logic based on `selectedPeriod`.

### Theming and Color Schemes

#### Changing the Overall Color Palette

The dashboard uses Tailwind's slate color scheme for the dark theme. To change:

**Option 1: Modify Tailwind Config**
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-dark': '#1a1a2e',
        'custom-darker': '#16213e',
        // ... more custom colors
      }
    }
  }
}
```

**Option 2: Update Class Names**
Replace `slate-900`, `slate-800`, `slate-700` with your custom colors throughout the component.

#### Changing Risk Severity Colors

Modify the color values in `riskScoreData`:

```javascript
const riskScoreData = [
  { name: 'Critical', value: 32, color: '#your-critical-color' },
  { name: 'High', value: 65, color: '#your-high-color' },
  { name: 'Medium', value: 97, color: '#your-medium-color' },
  { name: 'Low', value: 80, color: '#your-low-color' }
];
```

Also update the `Bar` components:

```jsx
<Bar dataKey="critical" stackId="a" fill="#your-critical-color" name="Critical" />
<Bar dataKey="high" stackId="a" fill="#your-high-color" name="High" />
// ... etc
```

---

## Styling and Theming

### Dark Theme Implementation

The dashboard features a sophisticated dark theme optimized for extended viewing sessions:

- **Background**: Gradient from slate-900 to slate-800
- **Cards**: Slate-800 with slate-700 borders
- **Text**: White primary, slate-300 secondary
- **Accents**: Color-coded by metric type (blue, red, green, purple)

### Responsive Design

The dashboard uses a responsive grid system:

```css
/* KPI Cards: 4 columns on desktop, adjusts on smaller screens */
grid-cols-4

/* Main charts: 3-column grid with 2:1 ratio */
grid-cols-3 col-span-2

/* Alert cards: 4 columns */
grid-cols-4
```

### Custom Styling Classes

Key Tailwind classes used:

- `bg-gradient-to-br`: Background gradients
- `rounded-xl`: Rounded corners for cards
- `shadow-xl`: Drop shadows for depth
- `border border-slate-700`: Subtle borders
- `hover:` states: Interactive feedback

---

## Performance Optimization

### React Optimization Techniques

1. **useMemo for Calculations**
```javascript
const totalRisks = useMemo(() => 
  riskScoreData.reduce((sum, item) => sum + item.value, 0),
  [riskScoreData]
);
```

2. **ResponsiveContainer**: Recharts component that adapts to parent size without forcing re-renders

3. **Efficient State Updates**: Minimal state usage reduces unnecessary re-renders

### Bundle Size Optimization

- **Tree Shaking**: Import only needed Recharts components
- **Icon Optimization**: Lucide React icons are tree-shakeable
- **Code Splitting**: Consider lazy loading for future route-based components

### Best Practices

- Keep data transformations outside render cycle
- Use `React.memo()` for pure sub-components if needed
- Implement virtualization for large data sets (future enhancement)
- Optimize image assets and use SVG where possible

---

## Browser Support

### Fully Supported Browsers

- **Chrome**: Version 90+
- **Firefox**: Version 88+
- **Safari**: Version 14+
- **Edge**: Version 90+
- **Opera**: Version 76+

### Mobile Browsers

- **iOS Safari**: Version 14+
- **Chrome Mobile**: Version 90+
- **Samsung Internet**: Version 14+

### Known Issues

- Internet Explorer: Not supported (uses modern JavaScript features)
- Older mobile browsers may experience performance issues with complex charts

### Progressive Enhancement

The dashboard is built with progressive enhancement in mind:
- Core functionality works on all modern browsers
- Advanced features (animations, gradients) enhance experience on capable browsers
- Fallbacks provided for critical features

---

## API Integration

### Preparing for Backend Integration

Currently, the dashboard uses static data. To integrate with a backend API:

#### Step 1: Create API Service Layer

```javascript
// services/grcApi.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

export const grcApi = {
  // Fetch risk data
  getRiskData: async (period) => {
    const response = await axios.get(`${API_BASE_URL}/risks`, {
      params: { period }
    });
    return response.data;
  },

  // Fetch compliance data
  getComplianceData: async () => {
    const response = await axios.get(`${API_BASE_URL}/compliance`);
    return response.data;
  },

  // Fetch incident trends
  getIncidentTrends: async (startDate, endDate) => {
    const response = await axios.get(`${API_BASE_URL}/incidents/trends`, {
      params: { startDate, endDate }
    });
    return response.data;
  },

  // Fetch alert insights
  getAlertInsights: async () => {
    const response = await axios.get(`${API_BASE_URL}/alerts`);
    return response.data;
  }
};
```

#### Step 2: Update Component with useEffect

```javascript
import { useState, useEffect } from 'react';
import { grcApi } from './services/grcApi';

const GRCDashboard = () => {
  const [riskData, setRiskData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [risks, compliance, incidents, alerts] = await Promise.all([
          grcApi.getRiskData(selectedPeriod),
          grcApi.getComplianceData(),
          grcApi.getIncidentTrends(),
          grcApi.getAlertInsights()
        ]);
        
        setRiskData(risks);
        // Set other data...
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedPeriod]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;

  // Render dashboard...
};
```

#### Step 3: Expected API Response Formats

**Risk Data Endpoint** (`GET /api/risks`)
```json
{
  "period": "Q4 2024",
  "data": [
    {
      "category": "Operational",
      "critical": 8,
      "high": 15,
      "medium": 23,
      "low": 12
    }
  ]
}
```

**Compliance Data Endpoint** (`GET /api/compliance`)
```json
{
  "frameworks": [
    {
      "name": "GDPR",
      "value": 94,
      "target": 95,
      "lastUpdated": "2024-12-04T10:00:00Z"
    }
  ]
}
```

---

## Security Considerations

### Current Security Measures

- **No Authentication**: Currently a frontend-only demo
- **Static Data**: No sensitive data exposure risk
- **CSP Compatible**: Uses inline styles via Tailwind (consider CSP headers in production)

### Recommendations for Production

1. **Authentication & Authorization**
   - Implement OAuth 2.0 or JWT-based authentication
   - Role-based access control (RBAC) for different user types
   - Session management and token refresh

2. **API Security**
   - HTTPS only for all API calls
   - API key management and rotation
   - Rate limiting to prevent abuse
   - Input validation and sanitization

3. **Data Protection**
   - Encrypt sensitive data in transit and at rest
   - Implement data masking for PII
   - Audit logging for compliance

4. **Frontend Security**
   - Content Security Policy (CSP) headers
   - XSS protection via React's built-in escaping
   - Dependency vulnerability scanning (npm audit)
   - Regular security updates

5. **Compliance**
   - GDPR compliance for user data
   - SOC 2 Type II certification considerations
   - Regular penetration testing
   - Incident response plan

---

## Testing

### Testing Strategy

#### Unit Tests

Test individual components and functions:

```javascript
// __tests__/GRCDashboard.test.js
import { render, screen } from '@testing-library/react';
import GRCDashboard from './GRCDashboard';

describe('GRCDashboard', () => {
  test('renders dashboard title', () => {
    render(<GRCDashboard />);
    expect(screen.getByText('GRC Insights Dashboard')).toBeInTheDocument();
  });

  test('displays correct total risks', () => {
    render(<GRCDashboard />);
    expect(screen.getByText('274')).toBeInTheDocument();
  });

  test('period selector changes state', () => {
    const { getByRole } = render(<GRCDashboard />);
    const select = getByRole('combobox');
    fireEvent.change(select, { target: { value: 'Q3 2024' } });
    expect(select.value).toBe('Q3 2024');
  });
});
```

#### Integration Tests

Test component interactions:

```javascript
describe('Dashboard Interactions', () => {
  test('changing period updates displayed data', async () => {
    render(<GRCDashboard />);
    // Change period
    // Assert data updates
  });
});
```

#### Visual Regression Tests

Consider using tools like:
- **Chromatic**: Visual testing for React components
- **Percy**: Automated visual testing
- **Storybook**: Component documentation and testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Generate coverage report
npm test -- --coverage
```

### Test Coverage Goals

- **Statements**: 80%+
- **Branches**: 75%+
- **Functions**: 80%+
- **Lines**: 80%+

---

## Deployment

### Deployment Options

#### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `build`
4. Deploy automatically on push

#### Option 2: Netlify

1. Connect GitHub repository
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `build`
3. Enable automatic deploys

#### Option 3: AWS S3 + CloudFront

```bash
# Build the application
npm run build

# Upload to S3
aws s3 sync build/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

#### Option 4: Docker Container

```dockerfile
# Dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t grc-dashboard .
docker run -p 80:80 grc-dashboard
```

### Environment Variables

Create a `.env` file for environment-specific configuration:

```env
REACT_APP_API_URL=https://api.yourdomain.com
REACT_APP_VERSION=1.0.0
REACT_APP_ENVIRONMENT=production
```

### CI/CD Pipeline Example

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
      - name: Build
        run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-
