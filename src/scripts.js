import './css/base.scss';
import './css/style.scss';

import './images/person walking on path.jpg';
import './images/The Rock.jpg';

import User from './User';
import Activity from './Activity';
import Hydration from './Hydration';
import Sleep from './Sleep';
import UserRepo from './User-repo';

import {fetchApi} from './Fetch-API';
import {domDisplay} from './DOM-loader';

let userList;
let userRepo;
let hydrationRepo;
let sleepRepo;
let activityRepo;

const fetchedUserData = fetchApi.fetchUserData();
const fetchedSleepData = fetchApi.fetchSleepData();
const fetchedHydrationData = fetchApi.fetchHydrationData();
const fetchedActivityData = fetchApi.fetchActivityData();

Promise.all([fetchedUserData, fetchedSleepData, fetchedHydrationData, fetchedActivityData]).then(values => {
  userList = createUsers(values[0]);
  userRepo = new UserRepo(userList);
  sleepRepo = new Sleep(values[1]);
  hydrationRepo = new Hydration(values[2]);
  activityRepo = new Activity(values[3]);
  startApp();
});

const sleepIdInfo = document.getElementById('sleep-userID-input');
const sleepDateInfo = document.getElementById('sleep-date-input');
const sleepHoursSleptInfo = document.getElementById('sleep-hoursSlept-input');
const sleepSleepQualityInfo = document.getElementById('sleep-sleepQuality-input');
const hydrationIdInfo = document.getElementById('hydration-userID-input');
const hydrationDateInfo = document.getElementById('hydration-date-input');
const hydrationOuncesInfo = document.getElementById('hydration-ounces-input');
const activityIdInfo = document.getElementById('activity-userID-input')
const activityDateInfo = document.getElementById('activity-date-input')
const activityNumStepsInfo = document.getElementById('activity-numSteps-input')
const activityMinsActiveInfo = document.getElementById('activity-minsActive-input')
const activityFlightsOfStairsInfo = document.getElementById('activity-flightsOfStairs-input')

const sidebarName = document.getElementById('sidebarUserName');
const stepGoalCard = document.getElementById('userStepGoalCard');
const avStepGoalCard = document.getElementById('averageStepsGoalCard');
const headerText = document.getElementById('headerText');
const userAddress = document.getElementById('userAddress');
const userEmail = document.getElementById('userEmail');
const userStridelength = document.getElementById('userStridelength');
const friendList = document.getElementById('friendList');
const hydrationToday = document.getElementById('hydrationToday');
const hydrationAverage = document.getElementById('hydrationAverage');
const hydrationThisWeek = document.getElementById('hydrationThisWeek');
const hydrationEarlierWeek = document.getElementById('hydrationEarlierWeek');
const historicalWeek = document.querySelectorAll('.historicalWeek');
const sleepToday = document.getElementById('sleepToday');
const sleepQualityToday = document.getElementById('sleepQualityToday');
const avUserSleepQuality = document.getElementById('avUserSleepQuality');
const sleepThisWeek = document.getElementById('sleepThisWeek');
const sleepEarlierWeek = document.getElementById('sleepEarlierWeek');
const friendChallengeListToday = document.getElementById('friendChallengeListToday');
const friendChallengeListHistory = document.getElementById('friendChallengeListHistory');
const bigWinner = document.getElementById('bigWinner');
const userStepsToday = document.getElementById('userStepsToday');
const avgStepsToday = document.getElementById('avgStepsToday');
const userStairsToday = document.getElementById('userStairsToday');
const avgStairsToday = document.getElementById('avgStairsToday');
const userMinutesToday = document.getElementById('userMinutesToday');
const avgMinutesToday = document.getElementById('avgMinutesToday');
const userStepsThisWeek = document.getElementById('userStepsThisWeek');
const userStairsThisWeek = document.getElementById('userStairsThisWeek');
const userMinutesThisWeek = document.getElementById('userMinutesThisWeek');
const bestUserSteps = document.getElementById('bestUserSteps');
const streakList = document.getElementById('streakList');
const streakListMinutes = document.getElementById('streakListMinutes')

document.querySelector('#submit-sleep-info').addEventListener('click', fetchApi.postSleepData);
document.querySelector('#submit-hydration-info').addEventListener('click', fetchApi.postHydrationData);
document.querySelector('#submit-activity-info').addEventListener('click', fetchApi.postActivityData);

function startApp() {
  getCurrentInfo();
};

function getCurrentInfo() {
  const userNowId = Math.floor(Math.random() * 50);
  const userNow = userRepo.getUserFromID(userNowId);
  const today = userRepo.getCurrentDate(userNowId, hydrationRepo.hydrationData);
  const randomHistory = getRandomDate(userRepo, userNowId, hydrationRepo.hydrationData);
  const winnerNow = activityRepo.getWinnerId(userNow, today, userRepo);
  displayUserInfo(userNow, userNowId, today, randomHistory, winnerNow);
};

function displayUserInfo(userNow, userNowId, today, randomHistory, winnerNow) {
  addInfoToSidebar(userNow, userRepo);
  addHydrationInfo(userNowId, hydrationRepo, today, userRepo, randomHistory);
  addSleepInfo(userNowId, sleepRepo, today, userRepo, randomHistory);
  addActivityInfo(userNowId, activityRepo, today, userRepo, randomHistory, userNow, winnerNow);
  addFriendGameInfo(userNowId, activityRepo, userRepo, today, randomHistory, userNow);
  historicalWeek.forEach(instance => instance.insertAdjacentHTML('afterBegin', `Week of ${randomHistory}`));
};

function createUsers(userData) {
  return userData.reduce((userList, userInfo) => {
    let user = new User(userInfo);
    userList.push(user);
    return userList;
  }, [])
};

function addInfoToSidebar(user, userRepo) {
  sidebarName.innerText = user.name;
  headerText.innerText = `${user.getFirstName()}'s Activity Tracker`;
  stepGoalCard.innerText = `Your daily step goal is ${user.dailyStepGoal}.`;
  avStepGoalCard.innerText = `The average daily step goal is ${userRepo.calculateAverageStepGoal()}.`;
  userAddress.innerText = user.address;
  userEmail.innerText = user.email;
  userStridelength.innerText = `Your stridelength is ${user.strideLength} meters.`;
  friendList.insertAdjacentHTML('afterBegin', makeFriendHTML(user, userRepo));
};

function makeFriendHTML(user, userRepo) {
  const friends = user.getFriendsNames(userRepo);
  const createFriends = friends.map(friendName => `<li class='historical-list-listItem'>${friendName}</li>`).join('');
  return createFriends;
};

function getRandomDate(userRepo, id, dataSet) {
  let sortedArray = userRepo.makeSortedUserArray(id, dataSet);
  return sortedArray[Math.floor(Math.random() * sortedArray.length + 1)].date
};

function addHydrationInfo(id, hydrationInfo, dateString, userRepo, laterDateString) {
  const dailyOunces = hydrationInfo.calculateDailyTotal(id, dateString, 'numOunces');
  hydrationToday.insertAdjacentHTML('afterBegin', `<p>You drank</p><p><span class="number">${dailyOunces}</span></p><p>oz water today.</p>`);
  const averageOunces = hydrationInfo.calculateAverage(id, 'numOunces');
  hydrationAverage.insertAdjacentHTML('afterBegin', `<p>Your average water intake is</p><p><span class="number">${averageOunces}</span></p> <p>oz per day.</p>`);
  const firstWeekOunces = hydrationInfo.calculateFirstWeekOunces(userRepo, id);
  hydrationThisWeek.insertAdjacentHTML('afterBegin', makeHydrationHTML(id, hydrationInfo, userRepo, firstWeekOunces));
  const randomWeekOunces = hydrationInfo.calculateRandomWeekOunces(laterDateString, id, userRepo);
  hydrationEarlierWeek.insertAdjacentHTML('afterBegin', makeHydrationHTML(id, hydrationInfo, userRepo, randomWeekOunces));
};

function makeHydrationHTML(id, hydrationInfo, userRepo, relevantData) {
  const hydration = relevantData.map(drinkData => `<li class="historical-list-listItem">On ${drinkData}oz</li>`).join('');
  return hydration;
};

function addSleepInfo(id, sleepInfo, dateString, userRepo) {
  const sleepHours = sleepInfo.calculateDailyTotal(id, dateString, 'hoursSlept');
  sleepToday.insertAdjacentHTML("afterBegin", `<p>You slept</p> <p><span class="number">${sleepHours}</span></p> <p>hours today.</p>`);
  const sleepQuality = sleepInfo.calculateDailyTotal(id, dateString, 'sleepQuality');
  sleepQualityToday.insertAdjacentHTML("afterBegin", `<p>Your sleep quality was</p> <p><span class="number">${sleepQuality}</span></p><p>out of 5.</p>`);
  const averageSleepQuality = Math.round(sleepInfo.calculateAllUserSleepQuality() *100)/100;
  avUserSleepQuality.insertAdjacentHTML("afterBegin", `<p>The average user's sleep quality is</p> <p><span class="number">${averageSleepQuality}</span></p><p>out of 5.</p>`);
  const weekSleepTotal = sleepInfo.calculateWeekTotal(dateString, id, userRepo, 'hoursSlept');
  sleepThisWeek.insertAdjacentHTML('afterBegin', makeSleepHTML(id, sleepInfo, userRepo, weekSleepTotal));
  const weekSleepQuality = sleepInfo.calculateWeekTotal(dateString, id, userRepo, 'sleepQuality');
  sleepEarlierWeek.insertAdjacentHTML('afterBegin', makeSleepHTML(id, sleepInfo, userRepo, weekSleepQuality));
};

function makeSleepHTML(id, sleepInfo, userRepo, relevantData) {
  const sleepHours = relevantData.map(sleepData => `<li class="historical-list-listItem">On ${sleepData} hours</li>`).join('');
  return sleepHours;
};

function addActivityInfo(id, activityInfo, dateString, userRepo, winnerId, user) {
  const userDailyActiveMinutes = activityInfo.getDailyUserData(id, dateString, userRepo, 'minutesActive');
  userMinutesToday.insertAdjacentHTML("afterBegin", `<p>Active Minutes:</p><p>You</p><p><span class="number">${userDailyActiveMinutes}</span></p>`);
  const usersAverage = activityInfo.getAllUsersAverageForDay(dateString, userRepo, 'minutesActive');
  avgMinutesToday.insertAdjacentHTML("afterBegin", `<p>Active Minutes:</p><p>All Users</p><p><span class="number">${usersAverage}</span></p>`);
  domDisplay.createDailyActivityData(id, activityInfo, dateString, userRepo);
  domDisplay.createWeeklyActivityData(id, activityInfo, dateString, userRepo, winnerId, user);
};

function addFriendGameInfo(id, activityInfo, userRepo, dateString, laterDateString, user) {
  const challengeWinner = activityInfo.getChallengeListAndWinner(user, dateString, userRepo);
  friendChallengeListToday.insertAdjacentHTML("afterBegin", makeFriendChallengeHTML(id, challengeWinner));
  const stepStreak = activityInfo.getStreakDays(userRepo, id, 'numSteps');
  streakList.insertAdjacentHTML("afterBegin", makeStepStreakHTML(id, stepStreak));
  const minutesStreak = activityInfo.getStreakDays(userRepo, id, 'minutesActive');
  streakListMinutes.insertAdjacentHTML("afterBegin", makeStepStreakHTML(id, minutesStreak));
  const challengeList = activityInfo.getChallengeListAndWinner(user, dateString, userRepo);
  friendChallengeListHistory.insertAdjacentHTML("afterBegin", makeFriendChallengeHTML(id, challengeList));
  const winnerInfo = activityInfo.showcaseWinner(user, dateString, userRepo);
  bigWinner.insertAdjacentHTML('afterBegin', `THIS WEEK'S WINNER! ${winnerInfo} steps`);
}

function makeFriendChallengeHTML(id, relevantData) {
  const friendInfo = relevantData.map(friendChallengeData => `<li class="historical-list-listItem">Your friend ${friendChallengeData} average steps.</li>`).join('');
  return friendInfo
}

function makeStepStreakHTML(id, relevantData) {
  const streakInfo = relevantData.map(streakData => `<li class="historical-list-listItem">${streakData}!</li>`).join('');
  return streakInfo
}
