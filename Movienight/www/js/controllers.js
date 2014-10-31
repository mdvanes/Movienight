angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // // Form data for the login modal
  // $scope.loginData = {};

  // // Create the login modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/login.html', {
  //   scope: $scope
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });

  // // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
  //   $scope.modal.hide();
  // };

  // // Open the login modal
  // $scope.login = function() {
  //   $scope.modal.show();
  // };

  // // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);

  //   // Simulate a login delay. Remove this and replace with your login
  //   // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };
})


// Automata
// Jacq Vaucan, an insurance agent of ROC robotics corporation, routinely investigates the case of manipulating a robot. What he discovers will have profound consequences for the future of humanity.
// data:image/jpeg;base64,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

.controller('MyMoviesCtrl', function($scope) {
  $scope.mymovies = [
    { title: 'Automata', id: 1,
      description: 'Jacq Vaucan, an insurance agent of ROC robotics corporation, routinely investigates the case of manipulating a robot. What he discovers will have profound consequences for the future of humanity.',
      img: 'data:image/jpeg;base64,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' },
    //{ title: 'Bones', id: 2 },
    // { title: 'Dubstep', id: 3 },
    // { title: 'Indie', id: 4 },
    // { title: 'Rap', id: 5 },
    // { title: 'Cowbell', id: 6 }
  ];
})

.controller('GuidesCtrl', function($scope) {
  $scope.guides = [
    { title: '2 Broke Girls', id: 1 },
    { title: 'Bones', id: 2 },
    // { title: 'Dubstep', id: 3 },
    // { title: 'Indie', id: 4 },
    // { title: 'Rap', id: 5 },
    // { title: 'Cowbell', id: 6 }
  ];
})

.controller('GuideCtrl', function($scope, $stateParams) {
  $scope.title = 'Bones';
  $scope.episodes = [
    {
      season: 10,
      nr: 1,
      name: 'Foo',
      aired: '01-10-2014'
    }
  ];
});
