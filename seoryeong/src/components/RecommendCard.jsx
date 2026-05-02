function RecommendCard({ title, subInfo, description }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px',
      width: '250px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2>{title}</h2>
      <h4 style={{ color: '#555', margin: '5px 0' }}>{subInfo}</h4>
      <p>{description}</p>
    </div>
  );
}

export default RecommendCard;