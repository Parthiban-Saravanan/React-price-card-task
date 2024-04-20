
import React from 'react';
import './index.css';

const PlanCard = ({ plan }) => {
  return (
    <div className="card">
      <h2>{plan.name}</h2>
      <p className="price">{plan.price}</p>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>Choose Plan</button>
    </div>
  );
};

const App = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$0/month',
      features: [
        '5GB Storage',
        'Community Access',
        'Unlimited Public Projects',
        'Community Access'
      ]
    },

    {
      name: 'Plus',
      price: '$9/month',
      features: [
        '5 Users',
        '5GB Storage',
        'Community Access',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Sub-Domain'
      ]
    },

    {
      name: 'Plus',
      price: '$59/month',
      features: [
        'Unlimited Users',
        '5GB Storage',
        'Community Access',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Sub-Domain',
        'Monthly Status Report'
      ]
    },
  ];

  return (
    <div className="container">
      {plans.map((plan, index) => (
        <PlanCard key={index} plan={plan} />
      ))}
    </div>
  );
};

export default App;
