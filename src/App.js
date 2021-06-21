import React from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import Requests from './requirements/requests';

function App() {
  return (
    <div className="App">
      <Banner>

      </Banner>
      
      <Row title="ONLY ON NETFLIX"
       fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow={true}
        />
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated}/>
      <Row title="Action " fetchUrl={Requests.fetchActionMovies}/>
      <Row title="Comedy " fetchUrl={Requests.fetchComedyMovies}/>
      <Row title="Romance" fetchUrl={Requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
