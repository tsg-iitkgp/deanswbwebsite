import Initiatives from '../components/Initiatives';

const InitiativesPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our Initiatives</h1>
          <p className="page-subtitle">Discover the programs designed by the students, for the students, to foster growth and support at IIT Kharagpur.</p>
        </div>
      </div>
      <Initiatives />
    </div>
  );
};

export default InitiativesPage;
