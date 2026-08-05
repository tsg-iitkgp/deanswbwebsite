import Resources from '../components/Resources';

const ResourcesPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Student Resources</h1>
          <p className="page-subtitle">Access all essential portals, forms, and services provided by the Student Welfare Board.</p>
        </div>
      </div>
      <Resources />
    </div>
  );
};

export default ResourcesPage;
