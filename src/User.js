class User {
  constructor(userDetails) {
    this.id = userDetails.id;
    this.name = userDetails.name;
    this.address = userDetails.address;
    this.email = userDetails.email;
    this.strideLength = userDetails.strideLength;
    this.dailyStepGoal = userDetails.dailyStepGoal;
    this.friends = userDetails.friends;
  };

  getFirstName() {
    return this.name.split(' ', 1).join();
  };

  getFriendsNames(dataSet) {
    return this.friends.map((friendId) => (dataSet.getDataFromID(friendId).name));
  };
};

export default User;
