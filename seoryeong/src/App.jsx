import Header from './components/Header';
import SectionTitle from './components/SectionTitle';
import RecommendCard from './components/RecommendCard';

function App() {
  const movies = [
    { id: 1, title: "탑건: 매버릭", subInfo: "액션 / 드라마" }
  ];

  const books = [
    { id: 1, title: "오만과 편견", subInfo: "제인 오스틴 / 고전 소설"}
  ];

  const musics = [
    { id: 1, title: "36Pills", subInfo: "빈첸(VINXEN) / 힙합" }
  ];

  return (
    <div>
      <Header />

      <main style={{ padding: '20px' }}>
        {/* 영화 섹션 */}
        <SectionTitle emoji="🎬" title="추천 영화" />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {movies.map((movie) => (
            <RecommendCard
              key={movie.id}
              title={movie.title}
              subInfo={movie.subInfo}
              description={movie.description}
            />
          ))}
        </div>

        {/* 책 섹션 */}
        <SectionTitle emoji="📚" title="추천 도서" />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {books.map((book) => (
            <RecommendCard
              key={book.id}
              title={book.title}
              subInfo={book.subInfo}
              description={book.description}
            />
          ))}
        </div>

        {/* 음악 섹션 */}
        <SectionTitle emoji="🎵" title="추천 음악" />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {musics.map((music) => (
            <RecommendCard
              key={music.id}
              title={music.title}
              subInfo={music.subInfo}
              description={music.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;