export function manageFriends(state, action) {
          switch(action.type){
            case "friends/add":
              return {friends: [...friends, action.payload]}
            case "friends/remove":
              return {friends: filter((friend)=> friend.id !== action.payload)}  //find by id , payload directly points "id" here
            default:
                return state;
          
          }
  }

}
