const User = ({users, lotteries, shows}) =>{
  return (
    
    <div>

    <div>
      {users ? users.map(user => 
      <div>{user.username}</div>
      ): null}
      </div>

      <div>
      {lotteries ? lotteries.map(lottery => 
      <div>{lottery.status}</div>
      ): null}  
      </div>

      <div>
      {shows ? shows.map(show => 
      <div>{show.name}</div>
      ): null}  
      </div>

    </div>
  )
}
export default User;