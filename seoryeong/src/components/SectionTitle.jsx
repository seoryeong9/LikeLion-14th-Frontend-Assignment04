function SectionTitle({ emoji, title }) {
  return (
    <h2 style={{ textAlign: 'center', marginTop: '30px', color: '#ff7710' }}>
      {emoji} {title}
    </h2>
  );
}

export default SectionTitle;