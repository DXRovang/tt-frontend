const Shows = (shows) =>{
  return (
    <div>
      {shows.shows ? shows.shows.map(show => <div>{show.name}</div>): null}     
    </div>
  )
}
export default Shows;