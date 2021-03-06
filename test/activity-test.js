import { expect } from 'chai';
import Activity from '../src/Activity';
import UserRepo from '../src/User-repo';
import User from '../src/User';

describe('Activity', function() {
  let activityData;
  let user1;
  let user2;
  let user3;
  let user4;
  let users;
  let userRepo;
  let activity;

  beforeEach(function() {
    activityData = [{
        "userID": 1,
        "date": "2019/06/15",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "numSteps": 7402,
        "minutesActive": 116,
        "flightsOfStairs": 33
      },
      {
        "userID": 4,
        "date": "2019/06/15",
        "numSteps": 3486,
        "minutesActive": 114,
        "flightsOfStairs": 32
      },
      {
        "userID": 5,
        "date": "2019/06/15",
        "numSteps": 11374,
        "minutesActive": 213,
        "flightsOfStairs": 13
      },
      {
        "userID": 6,
        "date": "2019/06/15",
        "numSteps": 14810,
        "minutesActive": 287,
        "flightsOfStairs": 18
      },
      {
        "userID": 7,
        "date": "2019/06/15",
        "numSteps": 2634,
        "minutesActive": 107,
        "flightsOfStairs": 5
      },
      {
        "userID": 11,
        "date": "2019/06/15",
        "numSteps": 10333,
        "minutesActive": 114,
        "flightsOfStairs": 31
      },
      {
        "userID": 11,
        "date": "2019/06/15",
        "numSteps": 6389,
        "minutesActive": 41,
        "flightsOfStairs": 33
      },
      {
        "userID": 10,
        "date": "2019/06/15",
        "numSteps": 8015,
        "minutesActive": 106,
        "flightsOfStairs": 37
      },
      {
        "userID": 11,
        "date": "2019/06/15",
        "numSteps": 11652,
        "minutesActive": 20,
        "flightsOfStairs": 24
      },
      {
        "userID": 12,
        "date": "2019/06/15",
        "numSteps": 9256,
        "minutesActive": 108,
        "flightsOfStairs": 2
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numSteps": 5000,
        "minutesActive": 12,
        "flightsOfStairs": 14
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numSteps": 9303,
        "minutesActive": 45,
        "flightsOfStairs": 9
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numSteps": 3000,
        "minutesActive": 62,
        "flightsOfStairs": 23
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "numSteps": 9303,
        "minutesActive": 4,
        "flightsOfStairs": 2
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numSteps": 9303,
        "minutesActive": 7,
        "flightsOfStairs": 4
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "numSteps": 12000,
        "minutesActive": 13,
        "flightsOfStairs": 26
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "numSteps": 9303,
        "minutesActive": 21,
        "flightsOfStairs": 14
      },
      {
        "userID": 1,
        "date": "2019/06/23",
        "numSteps": 9000,
        "minutesActive": 8,
        "flightsOfStairs": 9
      }
    ];

    user1 = new User({
      id: 1,
      name: "Alex Roth",
      address: "1234 Turing Street, Denver CO 80301-1697",
      email: "alex.roth1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 5000,
      friends: [2, 3, 4]
    });

    user2 = new User({
      id: 2,
      name: "Allie McCarthy",
      address: "1235 Turing Street, Denver CO 80301-1697",
      email: "allie.mcc1@hotmail.com",
      strideLength: 3.3,
      dailyStepGoal: 9000,
      friends: [1, 3, 4]
    });

    user3 = new User({
      id: 3,
      name: "Jerry Seinfield",
      address: "32 Baker Street, Denver CO 12345",
      email: "jseinfield@gmail.com",
      strideLength: 3.8,
      dailyStepGoal: 20000,
      friends: [1, 2, 4]
    });

    user4 = new User({
      id: 4,
      name: "Patrick the Starfish",
      address: "A rock in the ocean",
      email: "thebigpstar@pacificocean.net",
      strideLength: .2,
      dailyStepGoal: 13000,
      friends: [1, 2]
    });

    users = [user1, user2, user3, user4];

    userRepo = new UserRepo(users);
    activity = new Activity(activityData);
  });

  it('should take in data', function() {
    expect(activity.activityData[0].userID).to.eql(1);
    expect(activity.activityData[10].flightsOfStairs).to.eql(24);
  });

  it('should return the miles a given user has walked on a given date', function() {
    let userData = activity.getDailyMiles(1, "2019/06/15", userRepo);

    expect(userData).to.equal(2.9);
  });

  it('should return the number of minutes a given user was active for on a given day', function() {
    let userData = activity.calculateDailyTotal(1, "2019/06/16", 'minutesActive');

    expect(userData).to.equal(12);
  });

  it('should return average active minutes in a given week', function() {
    let weekActiveAverage = activity.calculateActiveWeeklyAverage(1, "2019/06/21", userRepo);

    expect(weekActiveAverage).to.equal(40.4);
  });

  it('should return true/false if the given user met their step goal on a given day', function() {
    let userGoal = activity.accomplishStepGoal(4, "2019/06/15", userRepo);
    let userGoal2 = activity.accomplishStepGoal(1, "2019/06/20", userRepo);

    expect(userGoal).to.equal(false);
    expect(userGoal2).to.equal(true);
  });

  it('should return all days that a given user exceeded their step goal', function() {
    let daysExceededGoal = activity.getDaysGoalExceeded(1, userRepo);

    expect(daysExceededGoal).to.deep.equal([
      "2019/06/17",
      "2019/06/19",
      "2019/06/20",
      "2019/06/21",
      "2019/06/22",
      "2019/06/23"
    ]);
  });

  it('should return the highest number of stairs climbed in a day for all time', function() {
    let userStairRecord = activity.getStairRecord(11);

    expect(userStairRecord).to.equal(33);
  });

  it('should return the average flight of stairs for all users on given day', function() {
    let averageStairs = activity.getAllUsersAverageForDay("2019/06/15", userRepo, "flightsOfStairs");

    expect(averageStairs).to.equal(21.2);
  });

  it('should return average steps taken for given date for all users', function() {
    activityData = activityData.push({
      "userID": 1,
      "date": "2019/06/23",
      "numSteps": 12000,
      "minutesActive": 13,
      "flightsOfStairs": 26
    },
    {
      "userID": 2,
      "date": "2019/06/23",
      "numSteps": 9000,
      "minutesActive": 21,
      "flightsOfStairs": 14
    },
    {
      "userID": 3,
      "date": "2019/06/23",
      "numSteps": 2000,
      "minutesActive": 8,
      "flightsOfStairs": 9
    });

    let averageSteps = activity.getAllUsersAverageForDay("2019/06/23", userRepo, "numSteps");

    expect(averageSteps).to.equal(8000);
  });

  it('should return average minutes active given date for all users', function() {
    activityData = activityData.push({
      "userID": 1,
      "date": "2019/06/23",
      "numSteps": 12000,
      "minutesActive": 13,
      "flightsOfStairs": 26
    },
    {
      "userID": 2,
      "date": "2019/06/23",
      "numSteps": 9000,
      "minutesActive": 21,
      "flightsOfStairs": 14
    },
    {
      "userID": 3,
      "date": "2019/06/23",
      "numSteps": 2000,
      "minutesActive": 8,
      "flightsOfStairs": 9
    });

    let averageActiveMin = activity.getAllUsersAverageForDay("2019/06/23", userRepo, "minutesActive");

    expect(averageActiveMin).to.equal(12.5);
  });

  it('should return relevant data for given user on given date', function() {
    let userSteps = activity.getDailyUserData(2, "2019/06/15", userRepo, 'numSteps');
    let userActiveMin = activity.getDailyUserData(1, "2019/06/18", userRepo, 'minutesActive');

    expect(userSteps).to.equal(4294);
    expect(userActiveMin).to.equal(62);
  });

  it('should return a weeks worth of relevant data for a given user', function() {
    let userWeekData1 = activity.getWeeklyUserData(1, "2019/06/23", userRepo, 'numSteps')[0];
    let userWeekData2 = activity.getWeeklyUserData(1, "2019/06/23", userRepo, 'minutesActive')[3];
    let userWeekData3 = activity.getWeeklyUserData(1, "2019/06/23", userRepo, 'flightsOfStairs')[0];

    expect(userWeekData1).to.equal("2019/06/23: 9000");
    expect(userWeekData2).to.equal("2019/06/20: 7");
    expect(userWeekData3).to.equal("2019/06/23: 9");
  });

})

describe('Friend Activity', function() {
  let activityData;
  let activity;
  let user1;
  let user2;
  let user3;
  let user4;
  let user5;
  let users;
  let userRepo;

  beforeEach(function() {
    activityData = [{
        "userID": 1,
        "date": "2019/06/15",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 2,
        "date": "2019/06/14",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      },
      {
        "userID": 3,
        "date": "2019/06/13",
        "numSteps": 7402,
        "minutesActive": 116,
        "flightsOfStairs": 33
      },
      {
        "userID": 4,
        "date": "2019/06/12",
        "numSteps": 3486,
        "minutesActive": 114,
        "flightsOfStairs": 32
      },
      {
        "userID": 1,
        "date": "2019/06/14",
        "numSteps": 11374,
        "minutesActive": 213,
        "flightsOfStairs": 13
      },
      {
        "userID": 2,
        "date": "2019/06/13",
        "numSteps": 14810,
        "minutesActive": 287,
        "flightsOfStairs": 18
      },
      {
        "userID": 3,
        "date": "2019/06/12",
        "numSteps": 2634,
        "minutesActive": 107,
        "flightsOfStairs": 5
      },
      {
        "userID": 4,
        "date": "2019/06/11",
        "numSteps": 10333,
        "minutesActive": 114,
        "flightsOfStairs": 31
      },
      {
        "userID": 1,
        "date": "2019/06/02",
        "numSteps": 6389,
        "minutesActive": 41,
        "flightsOfStairs": 33
      },
      {
        "userID": 2,
        "date": "2019/06/03",
        "numSteps": 8015,
        "minutesActive": 106,
        "flightsOfStairs": 37
      },
      {
        "userID": 3,
        "date": "2019/06/19",
        "numSteps": 11652,
        "minutesActive": 20,
        "flightsOfStairs": 24
      },
      {
        "userID": 4,
        "date": "2019/06/15",
        "numSteps": 9256,
        "minutesActive": 108,
        "flightsOfStairs": 2
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numSteps": 3578,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numSteps": 3579,
        "minutesActive": 141,
        "flightsOfStairs": 16
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numSteps": 3580,
        "minutesActive": 142,
        "flightsOfStairs": 16
      }
    ];

    activity = new Activity(activityData);

    user1 = new User({
      id: 1,
      name: "Alex Roth",
      address: "1234 Turing Street, Denver CO 80301-1697",
      email: "alex.roth1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [2, 3, 4]
    });

    user2 = new User({
      id: 2,
      name: "Allie McCarthy",
      address: "1235 Turing Street, Denver CO 80301-1697",
      email: "allie.mcc1@hotmail.com",
      strideLength: 3.3,
      dailyStepGoal: 9000,
      friends: [1, 3, 4]
    });

    user3 = new User({
      id: 3,
      name: "The Rock",
      address: "1236 Awesome Street, Denver CO 80301-1697",
      email: "therock@hotmail.com",
      strideLength: 10,
      dailyStepGoal: 60000,
      friends: [1, 2, 4]
    });

    user4 = new User({
      id: 4,
      name: "Rainbow Dash",
      address: "1237 Equestria Street, Denver CO 80301-1697",
      email: "rainbowD1@hotmail.com",
      strideLength: 3.8,
      dailyStepGoal: 7000,
      friends: [1, 2]
    });

    users = [user1, user2, user3, user4];

    userRepo = new UserRepo(users);

  });

  it('should get a users friend lists activity', function() {
    let friendsActivityData = activity.getFriendsActivityData(user4, userRepo);

    expect(friendsActivityData.length).to.equal(9);
  });

  it('should get a users ranked friendslist activity for a chosen week', function() {
    let rankedFriendsActivity = activity.getFriendsAverageStepsForWeek(user4, "2019/06/15", userRepo);

    expect(rankedFriendsActivity).to.deep.equal([{
        '2': 9552
      },
      {
        '1': 7475.5
      }
    ]);
  });

  it('should get a winner from the randked friends list', function() {
    let rankedFriendsActivity = activity.showcaseWinner(user4, "2019/06/15", userRepo);

    expect(rankedFriendsActivity).to.equal(
      'Allie McCarthy: 9552');
  });

  it('should show a 3-day increasing streak for a users step count', function() {
    let activityStreak1 = activity.getStreakDays(userRepo, 1, 'numSteps');
    let activityStreak2 = activity.getStreakDays(userRepo, 1, 'minutesActive');

    expect(activityStreak1).to.deep.equal(['2019/06/17', '2019/06/18']);
    expect(activityStreak2).to.deep.equal(['2019/06/18']);
  });

  it('should know the ID of the winning friend', function() {
    let winnerID = activity.getWinnerId(user4, "2019/06/15", userRepo);

    expect(winnerID).to.equal(2);
  });

});
