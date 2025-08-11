import React, { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { expertisePages } from '../../data/expertiseData';
import StandardServicePage from '../../templates/StandardServicePage/StandardServicePage';

import './ExpertisePage.css';

const templates = {
  standard: StandardServicePage,
};

const ExpertisePage = () => {
  const { category, service } = useParams();
  const navigate = useNavigate();

  const pageKey = useMemo(() => service, [service]);
  const data = expertisePages[pageKey];
  const Template = templates[data?.template || 'standard'];

  useEffect(() => {
    document.body.classList.add('expertise-page');
    return () => document.body.classList.remove('expertise-page');
  }, []);

  useEffect(() => {
    if (!data) return;
    if (data.category && data.category !== category) {
      navigate(`/expertise/${data.category}/${data.slug}`, { replace: true });
    }
  }, [category, data, navigate]);

  if (!data) {
    return (
      <main className="expertise" id="main-content">
        <div className="container expertise__notfound">
          <h1>Service Not Found</h1>
          <p>The requested service doesn't exist. Please use the navigation to find what you need.</p>
          <a className="btn btn--primary" href="/expertise">Back to Expertise</a>
        </div>
      </main>
    );
  }

  return <Template data={data} />;
};

export default ExpertisePage;


