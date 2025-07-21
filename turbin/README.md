# Turbine Inspection Management System

A comprehensive React application for managing wind turbine inspections, built with a complete navigation system and mock API integration.

## Features

### 🔐 Authentication
- **Login System**: Username/password authentication (admin/0000)
- **OTP Verification**: Two-factor authentication with OTP (123456)
- **Protected Routes**: Secure access to authenticated pages
- **Session Management**: Persistent authentication state

### 🧭 Navigation & Routing
- **Homepage**: Landing page with turbine background and login access
- **Sidebar Navigation**: Fixed sidebar with Home, Dashboard, and Settings icons
- **Protected Routing**: Authentication-based route protection
- **Responsive Design**: Mobile-friendly navigation

### 📊 Project Management
- **Review Page**: Project overview with search and filtering
- **Create Project Modal**: Form for creating new inspection projects
- **Project Table**: Display projects with creation date, turbine ID, and image count
- **Upload Interface**: File upload system for images and technical documents

### 🔍 Inspection Features
- **Check Page**: Visual inspection interface with turbine blade analysis
- **Filter System**: Advanced filtering by position, severity, inspector, and date
- **Defect Tracking**: Track and categorize defects by location and severity
- **Inspector Assignment**: Assign inspectors to specific projects

### ⚙️ Settings & Management
- **User Settings**: Profile management and password changes
- **Language Selection**: Multi-language support with search functionality
- **User Management**: Admin interface for managing system users
- **Dashboard**: Analytics and reporting interface

### 🎨 Design System
- **Material Design**: Consistent UI components and icons
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Accessibility**: Semantic HTML and ARIA attributes
- **Modern Styling**: CSS with proper component organization

## Technology Stack

- **Frontend**: React 19.1.0 with Hooks and Context API
- **Routing**: React Router DOM 7.7.0
- **State Management**: Context API with custom hooks
- **Styling**: Pure CSS with component-scoped styles
- **Build Tool**: Create React App
- **Mock API**: Custom mock service for development
- **Deployment**: GitHub Pages ready

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Sidebar.jsx      # Navigation sidebar
│   ├── SearchBar.jsx    # Search component
│   └── CreateProjectModal.jsx  # Project creation modal
├── pages/               # Application pages
│   ├── HomePage.jsx     # Landing page
│   ├── LoginPage.jsx    # Authentication
│   ├── OTPPage.jsx      # OTP verification
│   ├── ReviewPage.jsx   # Project overview
│   ├── UploadPage.jsx   # File upload
│   ├── CheckPage.jsx    # Inspection interface
│   ├── SettingsPage.jsx # User settings
│   ├── FilterPage.jsx   # Advanced filtering
│   └── DashboardPage.jsx # Analytics
├── contexts/            # React contexts
│   └── AuthContext.js   # Authentication state
├── services/            # API services
│   └── mockApi.js       # Mock backend API
├── utils/               # Utility functions
│   └── constants.js     # Application constants
├── styles/              # Component styles
└─�� hooks/               # Custom React hooks
```

## Installation & Setup

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn package manager

### Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd turbine-inspection-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## Usage Guide

### Getting Started
1. **Access the Application**: Open the homepage and click "Login"
2. **Authentication**: 
   - Username: `admin`
   - Password: `0000`
3. **OTP Verification**: Enter `123456` when prompted
4. **Navigate**: Use the sidebar to access different sections

### Creating Projects
1. Go to the Review page (Home icon)
2. Click "Create new" button
3. Fill out the project form:
   - Project name
   - Company name
   - Location/Site
   - Upload files (optional)
4. Click "Create" to save

### Managing Projects
- **Search**: Use the search bar to find specific projects
- **Filter**: Click filter options to narrow down results
- **Upload**: Click on a project to upload images and files
- **Inspect**: Access the inspection interface for detailed analysis

### User Management (Admin)
- Access user management through the dashboard
- Create new users with specific roles
- Manage user permissions and access levels
- View user activity and last visit information

### Settings
- **Profile**: Update username and email
- **Password**: Change password with current password verification
- **Language**: Select from 13 supported languages
- **Logout**: Secure session termination

## Mock API Endpoints

The application uses a mock API service that simulates real backend functionality:

- **Authentication**: Login and OTP verification
- **Projects**: CRUD operations for inspection projects
- **Users**: User management and role assignment
- **Files**: File upload simulation
- **Inspection Data**: Defect tracking and analysis
- **Dashboard**: Statistics and analytics

## Customization

### Adding New Languages
Edit `src/utils/constants.js` and add new language objects to the `LANGUAGES` array:

```javascript
{
  code: 'es',
  name: 'Spanish',
  nativeName: 'Español'
}
```

### Modifying Inspection Categories
Update the constants in `src/utils/constants.js`:
- `DEFECT_POSITIONS`: Add new turbine blade positions
- `SEVERITY_LEVELS`: Modify severity classifications
- `INSPECTORS`: Add new inspector options

### Styling Customization
Each component has its own CSS file for easy customization:
- Colors: Modify CSS custom properties in `src/app.css`
- Layout: Adjust component-specific styles
- Responsive: Update media queries for different screen sizes

## Integration with Real Backend

To replace the mock API with a real backend:

1. **Update API Service**: Replace `src/services/mockApi.js` with actual API calls
2. **Authentication**: Implement real JWT token handling
3. **File Upload**: Integrate with cloud storage (AWS S3, etc.)
4. **Database**: Connect to your preferred database system
5. **Environment Variables**: Add API endpoints to environment configuration

## Performance Optimization

- **Code Splitting**: Implement lazy loading for pages
- **Caching**: Add service worker for offline capability
- **Image Optimization**: Compress and optimize turbine images
- **Bundle Analysis**: Use webpack-bundle-analyzer for optimization

## Security Considerations

- **Authentication**: Implement proper JWT token validation
- **API Security**: Add CORS and rate limiting
- **File Upload**: Validate file types and sizes
- **Data Validation**: Sanitize all user inputs
- **HTTPS**: Ensure secure communication in production

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or support, please contact the development team or create an issue in the repository.

---

**Note**: This application uses mock data for demonstration purposes. For production use, integrate with a real backend API and implement proper security measures.
