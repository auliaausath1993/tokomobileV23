var shop_name = "Naira Hijab"; // NAMA TOKO ONLINE
var domain = "https://nairahijab.com/mobile/"; // DOMAIN URL ADMIN
var admin_url = domain;

var base_url_api = "https://api.tokomobile.co.id/ongkir/development/api";
var token_api = "8abf4902a0db27dcb7f62a01c2fd0d0a";
var domain_api = "ratuwedges.com";

var base_url = domain+"_api_/android_dev/"; // URL API
var base_url_media = admin_url+"media"; // DIREKTORI PENYIMPANAN IMAGE DI HOSTING
var dir_image = "Pictures/Tokomobile"; // DIREKTORI PENYIMPANAN IMAGE DI SD CARD
var token = "8abf4902a0db27dcb7f62a01c2fd0d0a"; // ISI DENGAN TOKEN


//----------------------//

var loading = '<ion-spinner icon="android"></ion-spinner>';

var page = 1;
var page_pesanan = 1;
var page_pesan = 1;
var category = "all";
var message_notif = "";
var message_alert = "";
var idx = 0;

var alertNotActiveCount = 0;

function toRp(a,b,c,d,e){e=function(f){return f.split('').reverse().join('')};b=e(parseInt(a,10).toString());for(c=0,d='';c<b.length;c++){d+=b[c];if((c+1)%3===0&&c!==(b.length-1)){d+='.';}}return'\t'+e(d)+',00'}

function check_token()
{
	alert('Invalid Token');
	window.location = "#/login";
	return false;
}

function check_status_aplikasi(message)
{
	message_alert = message;
	window.location = "#/notifikasi";
	return false;
}

function check_status_member()
{
	message_notif = "Status member anda tidak aktif";
	alertNotActiveCount += 1;
	if (alertNotActiveCount === 1) {
		alert('Status member anda tidak aktif');
		localStorage.clear();
		document.location.href = 'index.html';
	}
}

function check_status_member_not_found()
{
	message_notif = "Member Not Found";
	window.location = "#/notifikasi";
	return false;
}



angular.module('starter', ['ionic','ionicLazyLoad', 'monospaced.elastic', 'ngclipboard'])
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	$stateProvider
	.state('startup', {
		url: '/startup',
		templateUrl: 'templates/startup.html',
		controller: 'startupController'
	})
	.state('eventmenu.login', {
		url: '/login',
		views: {
			'menuContent' :{
				templateUrl: 'templates/login.html',
				controller: 'loginController'
			}
		}
	})
	.state('register', {
		url: '/register',
		templateUrl: 'templates/register.html',
		controller: 'registerController'
	})
	.state('notifikasi', {
		url: '/notifikasi',
		templateUrl: 'templates/notifikasi.html',
		controller: 'notifikasiController'
	})
	.state('eventmenu', {
		url: "/event",
		abstract: true,
		templateUrl: "templates/menu.html"
	})
	.state('eventmenu.dashboard', {
		url: "/dashboard",
		views: {
			'menuContent' :{
				templateUrl: "templates/dashboard.html"
			}
		}
	})
	.state('eventmenu.login_inside', {
		url: "/login_inside",
		views: {
			'menuContent' :{
				templateUrl: "templates/login.html"
			}
		}
	})
	.state('eventmenu.dashboardCategory', {
		url: "/dashboardCategory",
		views: {
			'menuContent' :{
				templateUrl: "templates/dashboardCategory.html"
			}
		}
	})
	.state('eventmenu.dashboardSearch', {
		url: "/dashboardSearch",
		views: {
			'menuContent' :{
				templateUrl: "templates/dashboardSearch.html"
			}
		}
	})
	.state('eventmenu.detailbarang', {
		url: "/detailbarang",
		views: {
			'menuContent' :{
				templateUrl: "templates/detailbarang.html"
			}
		}
	})
	.state('eventmenu.listpesananbarang', {
		url: "/listpesananbarang",
		views: {
			'menuContent' :{
				templateUrl: "templates/listpesananbarang.html"
			}
		}
	})
	.state('eventmenu.dropship1', {
		url: "/dropship1",
		views: {
			'menuContent' :{
				templateUrl: "templates/dropship1.html"
			}
		}
	})
	.state('eventmenu.dropship2', {
		url: "/dropship2",
		views: {
			'menuContent' :{
				templateUrl: "templates/dropship2.html"
			}
		}
	})
	.state('eventmenu.dropship3', {
		url: "/dropship3",
		views: {
			'menuContent' :{
				templateUrl: "templates/dropship3.html"
			}
		}
	})
	.state('eventmenu.datapesanan', {
		url: "/datapesanan",
		views: {
			'menuContent' :{
				templateUrl: "templates/datapesanan.html"
			}
		}
	})
	.state('eventmenu.listdatapesanan', {
		url: "/listdatapesanan",
		views: {
			'menuContent' :{
				templateUrl: "templates/listdatapesanan.html"
			}
		}
	})
	.state('eventmenu.listdatadetailpesanan', {
		url: "/listdatadetailpesanan",
		views: {
			'menuContent' :{
				templateUrl: "templates/listdatadetailpesanan.html"
			}
		}
	})
	.state('eventmenu.konfirmasipembayaran', {
		url: "/konfirmasipembayaran",
		views: {
			'menuContent' :{
				templateUrl: "templates/konfirmasipembayaran.html"
			}
		}
	})
	.state('eventmenu.kotakmasuk', {
		url: "/kotakmasuk",
		views: {
			'menuContent' :{
				templateUrl: "templates/kotakmasuk.html"
			}
		}
	})
	.state('eventmenu.inforekening', {
		url: "/inforekening",
		views: {
			'menuContent' :{
				templateUrl: "templates/inforekening.html"
			}
		}
	})
	.state('eventmenu.pengaturan', {
		url: "/pengaturan",
		views: {
			'menuContent' :{
				templateUrl: "templates/pengaturan.html"
			}
		}
	})
	.state('eventmenu.editprofil', {
		url: "/editprofil",
		views: {
			'menuContent' :{
				templateUrl: "templates/editprofil.html"
			}
		}
	})
	.state('eventmenu.update', {
		url: "/update",
		views: {
			'menuContent' :{
				templateUrl: "templates/update.html"
			}
		}
	})
	.state('eventmenu.pesanmasukdetail', {
		url: "/pesanmasukdetail",
		views: {
			'menuContent' :{
				templateUrl: "templates/pesanmasukdetail.html"
			}
		}
	})

	$urlRouterProvider.otherwise('/event/dashboard');

})

.run(function($ionicPlatform,$ionicLoading,$rootScope,$state,$ionicPopup,$ionicHistory,$http,productService, dataMessageService) {
	$rootScope.shop_name = shop_name;

	$rootScope.cacheDashboard = true;
	$rootScope.cancel = function() {
		$ionicLoading.hide()
	}

	$rootScope.shop_name = shop_name;
	$rootScope.customer_name = window.localStorage['customer_name'];
	$rootScope.customer_id = window.localStorage['customer_id'];

	$ionicPlatform.ready(function() {
			FCMPlugin.getToken(
				function(token) {
					window.localStorage['registration_id'] = token;
					if (window.localStorage['customer_id'] != null) {
						var link = base_url + 'registering_fcm/' + token + '/' + window.localStorage['customer_id'];
						$http({
							method: 'POST',
							url: link,
							data: {},
							timeout: 8000
						}).then(
							function(res) {},
							function(response) {
								$ionicLoading.hide();
								alert('Failed to continue, please check your internet connection');
							}
						);
					}
				},
				function(err) {
					console.log('error retrieving token: ' + err);
				}
			);
			FCMPlugin.onNotification(
				function(data) {
					var alertPopup = $ionicPopup.alert({
						title: data.title,
						template: data.text,
						buttons: [{
							text: 'Lihat',
							type: 'button-positive',
							onTap: function(e) {
						     	dataMessageService.selectedMessageId = data.id_pesan;
								$state.go('eventmenu.pesanmasukdetail');
						    }
						}]
					});
					if (data.wasTapped) {
						alertPopup.then(function(res) {
							dataMessageService.selectedMessageId = data.id_pesan;
							$state.go('eventmenu.pesanmasukdetail');
						});
						console.log('data.wasTapped', true);
					} else {
						alertPopup.then(function(res) {
							dataMessageService.selectedMessageId = data.id_pesan;
							$state.go('eventmenu.pesanmasukdetail');
						});
						console.log('data.wasTapped', false);
					}
				},
				function(msg) {
					console.log('onNotification callback successfully registered: ' + msg);
				},
				function(err) {
					console.log('Error registering onNotification callback: ' + err);
				}
			);
		});


	$ionicPlatform.registerBackButtonAction(function (event) {
		if($state.current.name=="eventmenu.dashboard"){
			var confirmPopup = $ionicPopup.confirm({
				title: "Konfirmasi",
				template: "Anda yakin ingin keluar aplikasi ?"
			});

			confirmPopup.then(function(res) {
				if(res) {
					window.close();
					ionic.Platform.exitApp();
					navigator.app.exitApp();
				}
			});
		} else if ($state.current.name == 'login') {
			var confirmPopup = $ionicPopup.confirm({
				title: "Konfirmasi",
				template: "Anda yakin ingin keluar aplikasi ?"
			});

			confirmPopup.then(function(res) {
				if (res) {
					window.close();
					ionic.Platform.exitApp();
					navigator.app.exitApp();
				}
			});
		}else if ($state.current.name=="notifikasi"){
			var confirmPopup = $ionicPopup.confirm({
				title: "Konfirmasi",
				template: "Anda yakin ingin keluar aplikasi ?"
			});

			confirmPopup.then(function(res) {
				if(res) {
					window.close();
					ionic.Platform.exitApp();
					navigator.app.exitApp();
				}
			});
		}else if($state.current.name=="eventmenu.dashboardCategory"){
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			productService.category = 'all';
			productService.page = 1;
			$ionicHistory.clearCache().then(function(){
				$state.go('eventmenu.dashboard', {}, {reload: true});
			});
		}else if($state.current.name=="eventmenu.listpesananbarang"){
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$ionicHistory.clearCache().then(function(){
				$state.go('eventmenu.dashboard', {}, {reload: true});
			});
		}else if($state.current.name=="eventmenu.datapesanan"){
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$ionicHistory.clearCache().then(function(){
				$state.go('eventmenu.dashboard', {}, {reload: true});
			});
		}else if($state.current.name=="eventmenu.listdatapesanan"){
			$ionicHistory.nextViewOptions({
				disableBack: true
			});

			$ionicHistory.clearCache().then(function(){
				$state.go('eventmenu.dashboard', {}, {reload: true});
			});
		}else if($state.current.name=="eventmenu.konfirmasipembayaran"){
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$ionicHistory.clearCache().then(function(){
				$state.go('eventmenu.dashboard', {}, {reload: true});
			});
		}else if($state.current.name=="eventmenu.kotakmasuk"){
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$ionicHistory.clearCache().then(function(){
				$state.go('eventmenu.dashboard', {}, {reload: true});
			});
		}else if($state.current.name=="eventmenu.inforekening"){
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$ionicHistory.clearCache().then(function(){
				$state.go('eventmenu.dashboard', {}, {reload: true});
			});
		}else if($state.current.name=="eventmenu.pengaturan"){
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		}else if($state.current.name=="eventmenu.update"){
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$ionicHistory.clearCache().then(function(){
				$state.go('eventmenu.dashboard', {}, {reload: true});
			});
		}else if($state.current.name=="eventmenu.register"){
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		}else{
			page = 1;
			$ionicHistory.goBack();
		}


	}, 100);
})

//SERVICE
.service('productService', function() {
	this.productService;
})
.service('dataPesananService', function() {
	this.dataPesananService;
})
.service('dataMessageService', function() {
	this.dataMessageService;
})
.service('listPesananService', function() {
	this.listPesananService;
})
.service('konfirmasipembayaranService', function() {
	this.konfirmasipembayaranService;
})



//CONTROLLER
.controller("startupController", function($scope, $state, $http, $ionicLoading, $window) {
	var _this = this
	var customer_id = $window.localStorage['customer_id'];

	if (typeof customer_id === "undefined") {
		$state.go('login');
	}else{

		$state.go('eventmenu.dashboard');
	}



})
.controller("loginController", function($scope, $state, $http, $ionicLoading, $ionicPopup, $window) {
	var _this = this

	$scope.postData = {};
	$scope.login = function(){
		$ionicLoading.show({
			template: loading,
			cancelable : true
		})
		var link = base_url+'login';
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:$scope.postData.customer_id,
				password:$scope.postData.password,
				token:token,
				registration_id :window.localStorage['registration_id']
			},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide()
			$scope.response = res.data;

			/* check */
			if(res.data.status == 'Invalid Token')
			{
				check_token();
			}

			if(res.data.status == 'OFF')
			{
				check_status_aplikasi(data.message);
			}

			if(res.data.status == 'Member Not Found')
			{
				check_status_member_not_found();
			}
			if(res.data.status == 'Member Not Active')
			{
				check_status_member();
				message_alert = res.data.pesan;
			}

			if(res.data.status=="Success"){
				$window.localStorage['customer_id']      = res.data.customer_id;
				$window.localStorage['customer_email']   = res.data.customer_email;
				$window.localStorage['customer_name']    = res.data.customer_name;
				$window.localStorage['customer_phone']   = res.data.customer_phone;
				document.location.href = 'index.html';
				$timeout( function() {
					$window.location.reload(true);
				}, 1000);
			}else{
				var alertPopup = $ionicPopup.alert({
					title: res.data.status,
					template: res.data.error
				});
			}
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	};
	$scope.register = function(){
		$state.go('register');
	}
})
.controller("registerController", function($scope, $state, $http, $ionicLoading, $ionicSideMenuDelegate, $window,$ionicPopup, productService) {
	$scope.postData = {};

	$scope.editProfilKota = false;
	$scope.editProfilKecamatan = false;
	$ionicLoading.show()
	var param = "?token="+token_api+"&domain="+domain_api;
	var link = base_url_api+"/province"+param;
	$http({
		method : 'GET',
		url : link,
		data : { },
		timeout: 10000
	}).then(
	function(res) {
		if(res.data.desc == 'Invalid Token')
		{
			check_token();
		}

		if(res.data.desc == 'OFF')
		{
			check_status_aplikasi(res.data.message);
		}
		if(res.data.desc == 'Member Not Found')
		{
			check_status_member_not_found();
		}
		if(res.data.desc == 'Member Not Active')
		{
			check_status_member();
			message_alert = res.data.pesan;
		}
		/* end check */

		$ionicLoading.hide()
		$scope.data_provinsi = res.data.result;
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.getKotaByProvinsi = function (val) {
		$ionicLoading.show()
		var param = "?token="+token_api+"&domain="+domain_api+"&province_id="+$scope.postData.prov;
		var link = base_url_api+"/city"+param;

		$http({
			method : 'GET',
			url : link,
			data : {},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide()
			/* check */
			if(res.data.desc == 'Invalid Token')
			{
				check_token();
			}

			if(res.data.desc == 'OFF')
			{
				check_status_aplikasi(res.data.message);
			}
			if(res.data.desc == 'Member Not Found')
			{
				check_status_member_not_found();
			}
			if(res.data.desc == 'Member Not Active')
			{
				check_status_member();
				message_alert = res.data.pesan;
			}
			/* end check */

			$scope.kota = "-Pilih Kota-";
			$scope.kota_id = "0";
			$scope.data_kecamatan = [];
			$scope.kecamatan = "-Pilih Kecamatan-";
			$scope.kecamatan_id = "0";

			$scope.editProfilKota = true;
			$scope.data_kota = res.data.result;
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.getKecamatanByKota = function () {
		$ionicLoading.show()
		var param = "?token="+token_api+"&domain="+domain_api+"&city_id="+$scope.postData.kota;
		var link = base_url_api+"/subdistrict"+param;

		$http({
			method : 'GET',
			url : link,
			data : {},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide()
			/* check */
			if(res.data.desc == 'Invalid Token')
			{
				check_token();
			}

			if(res.data.desc == 'OFF')
			{
				check_status_aplikasi(res.data.message);
			}
			if(res.data.desc == 'Member Not Found')
			{
				check_status_member_not_found();
			}
			if(res.data.desc == 'Member Not Active')
			{
				check_status_member();
				message_alert = res.data.pesan;
			}
			/* end check */

			$scope.kecamatan = "-Pilih Kecamatan-";
			$scope.kecamatan_id = "0";

			$scope.editProfilKecamatan = true;
			$scope.data_kecamatan = res.data.result;
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.submit_register = function () {

		var nama = $scope.postData.nama;
		var email = $scope.postData.email;
		var phone = $scope.postData.phone;
		var alamat = $scope.postData.address;
		var pinbb = $scope.postData.pin_bb;
		var kodepos = $scope.postData.postcode;

		var password = $scope.postData.password;
		var confirm_password = $scope.postData.confirm_password;

		var provinsi = $scope.postData.prov;
		var kota = $scope.postData.kota;
		var kecamatan = $scope.postData.kecamatan;

		if(provinsi == "0" || provinsi==null){
			provinsi = $scope.prov_id;
		}
		if(kota == "0" || kota==null){
			kota = $scope.kota_id;
		}
		if(kecamatan == "0" || kecamatan==null){
			kecamatan = $scope.kecamatan_id;
		}

		if((nama != null) && (email != null) && (phone != null) && (alamat != null) && (pinbb != null) && (kodepos != null) && (password != null) && (confirm_password != null) && (provinsi != null) && (kota != null) && (kecamatan != null) && (kota != '0') && (kecamatan != '0')){
			if(password == confirm_password){
				$ionicLoading.show()
				var link = base_url+"register";

				$http({
					method : 'POST',
					url : link,
					data : {customer_id:window.localStorage['customer_id'],
					token:token,
					nama: nama,
					email: email,
					phone: phone,
					password: password,
					alamat: alamat,
					pinbb: pinbb,
					kodepos: kodepos,
					provinsi: provinsi,
					kota: kota,
					kecamatan: kecamatan},
					timeout: 10000
				}).then(
				function(res) {
					/* check */
					if(res.data.desc == 'Invalid Token')
					{
						check_token();
					}

					if(res.data.desc == 'OFF')
					{
						check_status_aplikasi(res.data.message);
					}
					if(res.data.desc == 'Member Not Found')
					{
						check_status_member_not_found();
					}
					if(res.data.desc == 'Member Not Active')
					{
						check_status_member();
						message_alert = res.data.pesan;
					}
					/* end check */

					if(res.data.status=="Success"){
						$window.localStorage['customer_id']      = res.data.customer_id;
						$window.localStorage['customer_email']   = res.data.email;
						$window.localStorage['customer_name']    = res.data.nama;
						$window.localStorage['customer_phone']   = res.data.phone;

						$ionicLoading.hide()
						var confirmPopup = $ionicPopup.alert({
							title: res.data.status,
							template: res.data.message
						});

						confirmPopup.then(function(res) {
							if(res) {
								document.location.href = 'index.html';
								$timeout( function() {
									$window.location.reload(true);
								}, 1000);
							}
						});
					}else{
						$ionicLoading.hide()
						var confirmPopup = $ionicPopup.alert({
							title: res.data.status,
							template: res.data.error
						});
					}
				}, function(response) {
					$ionicLoading.hide();
					alert('Failed to continue, please check your internet connection');
				});
			}else{
				var alertPopup = $ionicPopup.alert({
					title: "Notifikasi",
					template: "Password Tidak Sama !"
				});
			}
		}else{
			var alertPopup = $ionicPopup.alert({
				title: "Notifikasi",
				template: "Form Tidak Boleh Kosong  !"
			});
		}

	}
})

.controller("menuController", function($ionicHistory, $scope, $state, $http, $ionicLoading, $ionicSideMenuDelegate, $window, $rootScope,  productService,dataPesananService, $ionicPopup) {
	$scope.$on('new-order', function(event, args) {
		var anyThing = args.any.total_cart;
		$rootScope.total_cart = anyThing;
	});

	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];
	$scope.customer_email = $window.localStorage['customer_email'];
	$scope.customer_phone = $window.localStorage['customer_phone'];


	$scope.$on('$ionicView.enter', function(){
		$ionicSideMenuDelegate.canDragContent(true);
	});

	$ionicLoading.show()
	var link = base_url+'get_cart_total';
	$http({
		method : 'POST',
		url : link,
		data : {
			customer_id:window.localStorage['customer_id'],
			token:token
		},
		timeout: 10000
	}).then(
	function(res) {
		$ionicLoading.hide()
		/* check */
		if(res.data.status == 'Invalid Token')
		{
			check_token();
		}
		if(res.data.status == 'OFF')
		{
			check_status_aplikasi(res.data.message);
		}
		if(res.data.status == 'Member Not Found')
		{
			check_status_member_not_found();
		}
		if(res.data.status == 'Member Not Active')
		{
			check_status_member();
			message_alert = res.data.pesan;
		}
		message_notif = res.data.status;
		/* end check */

		total_cart = res.data.total_cart;
		$rootScope.total_cart = total_cart;
		$rootScope.no_wa = res.data.no_wa;
		$rootScope.total_message = res.data.total_message;
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.setJenisPesanan = function() {
		dataPesananService.jenisPesanan = "Unpaid";
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
		$ionicHistory.clearCache().then(function(){
			$state.go('eventmenu.listdatapesanan');
		});
	}

	if(localStorage.getItem('customer_id') != null)
	{
		$scope.sidemenu = [
		{ id: 0 , name : 'Beranda', icon : 'icon ion-android-home', target : '#/event/dashboard' , status : 'enabled', click : 'gotodashboard()'},
		{ id: 1 , name : 'Category', icon : 'icon ion-ios-copy', target : '#/event/dashboard' , status : 'enabled', click : 'kategoriSide("Ready Stock")'},
		{ id: 1 , name : 'Category PO', icon : 'icon ion-ios-copy', target : '#/event/dashboard' , status : 'enabled', click : 'kategoriSide("PO")'},
		{ id: 2 , name : 'List Pesanan Barang', icon : 'icon ion-android-cart', target : '#/event/listpesananbarang', status : 'enabled', click : ''},
		{ id: 3 , name : 'Data Pesanan', icon : 'icon ion-document-text', target : '#', status : 'enabled', click : 'setJenisPesanan()'},
		{ id: 4 , name : 'Konfirmasi Pembayaran', icon : 'icon ion-cash', target : '#/event/konfirmasipembayaran', status : 'enabled', click : ''},
		 // { id: 4 , name : 'Cek Ongkir', icon : 'icon ion-android-mail', target : '#/event/cekongkir', status : 'enabled', click : ''},
		 // { id: 5 , name : 'Cek Resi', icon : 'icon ion-android-mail', target : '#/event/cekresi', status : 'enabled', click : ''},
		 { id: 6 , name : 'Kotak Masuk', icon : 'icon ion-android-mail', target : '#/event/kotakmasuk', status : 'enabled', click : '', badge: true},
		 { id: 7 , name : 'Info', icon : 'icon ion-android-alert', target : '#/event/inforekening', status : 'enabled', click : ''},
		 { id: 8 , name : 'Pengaturan', icon : 'icon ion-android-settings', target : '#/event/pengaturan', status : 'enabled', click : ''},
		  // { id: 7 , name : 'Update', icon : 'icon ion-ios-refresh', target : '#/event/update', status : 'enabled', click : ''}
		  ];
		}
		else
		{
			$scope.sidemenu = [
			{ id: 0 , name : 'Beranda', icon : 'icon ion-android-home', target : '#/event/dashboard' , status : 'enabled', click : 'gotodashboard()'},
			{ id: 1 , name : 'Category', icon : 'icon ion-ios-copy', target : '#/event/dashboard' , status : 'enabled', click : 'kategoriSide("Ready Stock")'},
			{ id: 1 , name : 'Category PO', icon : 'icon ion-ios-copy', target : '#/event/dashboard' , status : 'enabled', click : 'kategoriSide("PO")'},
			{ id: 7 , name : 'Info', icon : 'icon ion-android-alert', target : '#/event/inforekening', status : 'enabled', click : ''},
			{ id: 8 , name : 'Login', icon : 'icon ion-android-settings', target : '#/event/login', status : 'enabled', click : ''},
			];

		}
		$scope.toggleLeft = function() {
			$ionicSideMenuDelegate.toggleLeft();
		};
		$scope.menuUtama = function  () {
			if(localStorage.getItem('customer_id') != null)
			{
				$scope.sidemenu = [
				{ id: 0 , name : 'Beranda', icon : 'icon ion-android-home', target : '#/event/dashboard' , status : 'enabled', click : 'gotodashboard()'},
				{ id: 1 , name : 'Category', icon : 'icon ion-ios-copy', target : '#/event/dashboard' , status : 'enabled', click : 'kategoriSide("Ready Stock")'},
				{ id: 1 , name : 'Category PO', icon : 'icon ion-ios-copy', target : '#/event/dashboard' , status : 'enabled', click : 'kategoriSide("PO")'},
				{ id: 2 , name : 'List Pesanan Barang', icon : 'icon ion-android-cart', target : '#/event/listpesananbarang', status : 'enabled', click : ''},
				{ id: 3 , name : 'Data Pesanan', icon : 'icon ion-document-text', target : '#', status : 'enabled', click : 'setJenisPesanan()'},
				{ id: 4 , name : 'Konfirmasi Pembayaran', icon : 'icon ion-cash', target : '#/event/konfirmasipembayaran', status : 'enabled', click : ''},
		 // { id: 4 , name : 'Cek Ongkir', icon : 'icon ion-android-mail', target : '#/event/cekongkir', status : 'enabled', click : ''},
		 // { id: 5 , name : 'Cek Resi', icon : 'icon ion-android-mail', target : '#/event/cekresi', status : 'enabled', click : ''},
		 { id: 6 , name : 'Kotak Masuk', icon : 'icon ion-android-mail', target : '#/event/kotakmasuk', status : 'enabled', click : '', badge: true},
		 { id: 7 , name : 'Info', icon : 'icon ion-android-alert', target : '#/event/inforekening', status : 'enabled', click : ''},
		 { id: 8 , name : 'Pengaturan', icon : 'icon ion-android-settings', target : '#/event/pengaturan', status : 'enabled', click : ''},
		  // { id: 7 , name : 'Update', icon : 'icon ion-ios-refresh', target : '#/event/update', status : 'enabled', click : ''}
		  ];
		}
		else
		{
			$scope.sidemenu = [
			{ id: 0 , name : 'Beranda', icon : 'icon ion-android-home', target : '#/event/dashboard' , status : 'enabled', click : 'gotodashboard()'},
			{ id: 1 , name : 'Category', icon : 'icon ion-ios-copy', target : '#/event/dashboard' , status : 'enabled', click : 'kategoriSide("Ready Stock")'},
			{ id: 1 , name : 'Category PO', icon : 'icon ion-ios-copy', target : '#/event/dashboard' , status : 'enabled', click : 'kategoriSide("PO")'},
			{ id: 7 , name : 'Info', icon : 'icon ion-android-alert', target : '#/event/inforekening', status : 'enabled', click : ''},
			{ id: 8 , name : 'Login', icon : 'icon ion-android-settings', target : '#/event/login', status : 'enabled', click : ''},
			];

		}
	}

	$scope.kategoriSide = function(status) {
		$ionicLoading.show()
		$scope.sidemenu = [
		{ id: 0 , name : ' Back', icon : 'icon ion-ios-arrow-back', target : '#/event/dashboard' , status : 'enabled', click : 'menuUtama()'}
		];

		var link = base_url+'get_list_product_category';
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:window.localStorage['customer_id'],
				status:status,
				token:token
			},
			timeout: 10000
		}).then(
		function(res) {
			if (res.data.status == 'Member Not Active') {
				check_status_member();
				message_alert = res.data.pesan;
			}
			if (res.data.status === 'Success') {
				$scope.category = res.data;
				var json = res.data.category;

				for(var x=0;x<json.length;x++){
					$scope.sidemenu.push({id: json[x].id, name : json[x].name, icon : "", target : "", status : "enabled", click : "filterCategory("+json[x].id+",'"+json[x].name+"')"});
				}
			} else {
				$ionicPopup.alert({
					title: "Alert",
					template: "No Data"
				});
			}
			$ionicLoading.hide()
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});

		$scope.filterCategory = function (id,name) {
			$ionicSideMenuDelegate.toggleLeft();
			menuUtama();
			category = id;
			page = 1;
			productService.category = id;
			productService.categoryName = name;
			productService.page = page;

			$ionicHistory.clearCache().then(function() {
				$ionicHistory.nextViewOptions({
					disableBack: true
				});
				$state.go('eventmenu.dashboardCategory', {}, {reload: true});
			});
		}

		$scope.allCategory = function () {
			category = "all";
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard', {}, {reload: true});
		}
		$scope.gotodashboard = function () {
			$ionicHistory.clearCache().then(function(){
				$state.go('eventmenu.dashboard', {}, {reload: true});
			});

		}


		function  menuUtama(){
			if(localStorage.getItem('customer_id') != null)
			{
				$scope.sidemenu = [
				{ id: 0 , name : 'Beranda', icon : 'icon ion-android-home', target : '#/event/dashboard' , status : 'enabled', click : 'gotodashboard()'},
				{ id: 1 , name : 'Category', icon : 'icon ion-ios-copy', target : '#/event/dashboard' , status : 'enabled', click : 'kategoriSide("Ready Stock")'},
				{ id: 1 , name : 'Category PO', icon : 'icon ion-ios-copy', target : '#/event/dashboard' , status : 'enabled', click : 'kategoriSide("PO")'},
				{ id: 2 , name : 'List Pesanan Barang', icon : 'icon ion-android-cart', target : '#/event/listpesananbarang', status : 'enabled', click : ''},
				{ id: 3 , name : 'Data Pesanan', icon : 'icon ion-document-text', target : '#', status : 'enabled', click : 'setJenisPesanan()'},
				{ id: 4 , name : 'Konfirmasi Pembayaran', icon : 'icon ion-cash', target : '#/event/konfirmasipembayaran', status : 'enabled', click : ''},
				{ id: 6 , name : 'Kotak Masuk', icon : 'icon ion-android-mail', target : '#/event/kotakmasuk', status : 'enabled', click : '', badge: true},
				{ id: 7 , name : 'Info', icon : 'icon ion-android-alert', target : '#/event/inforekening', status : 'enabled', click : ''},
				{ id: 8 , name : 'Pengaturan', icon : 'icon ion-android-settings', target : '#/event/pengaturan', status : 'enabled', click : ''},
				];
			}
			else
			{
				$scope.sidemenu = [
				{ id: 0 , name : 'Beranda', icon : 'icon ion-android-home', target : '#/event/dashboard' , status : 'enabled', click : 'gotodashboard()'},
				{ id: 1 , name : 'Category', icon : 'icon ion-ios-copy', target : '#/event/dashboard' , status : 'enabled', click : 'kategoriSide("Ready Stock")'},
				{ id: 1 , name : 'Category PO', icon : 'icon ion-ios-copy', target : '#/event/dashboard' , status : 'enabled', click : 'kategoriSide("PO")'},
				{ id: 7 , name : 'Info', icon : 'icon ion-android-alert', target : '#/event/inforekening', status : 'enabled', click : ''},
				{ id: 8 , name : 'Login', icon : 'icon ion-android-settings', target : '#/event/login', status : 'enabled', click : ''},
				];

			}
		}

	};

})
//DASHBOARD
.controller("katalogController", function($scope, $state, $http, $ionicLoading, $timeout, $ionicHistory,$window, $ionicPopup, $ionicSlideBoxDelegate, $rootScope,$location, productService, $ionicScrollDelegate) {
	var _this = this

	$scope.loadMoreLink = 'get_list_product';
	$scope.showMoreData = true;

	$scope.toWhatsapp = function() {
		var link = 'https://wa.me/62' + $rootScope.no_wa;
		window.open(link, '_system','location=yes,enableViewportScale=yes,hidden=no');
	}

	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState) {
		if (toState.name === 'eventmenu.dashboard' && fromState.name !== 'eventmenu.detailbarang' && fromState.name) {
			$scope.loadMoreLink = 'get_list_product';
			$ionicScrollDelegate.scrollTop();
			$scope.doRefresh();
			$scope.keyword = '';
		}
	});

	$scope.doRefresh = function() {
		$scope.showMoreData = true;
		page = 1;
		getdashboarddata();
		getcart();
		get_list_product();

	};

	getdashboarddata();
	getcart();

	function getcart(){
		var link = base_url+'get_cart_total';
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:window.localStorage['customer_id'],
				token:token
			},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide()
			/* check */
			if(res.data.status == 'Invalid Token')
			{
				check_token();
			}
			if(res.data.status == 'OFF')
			{
				check_status_aplikasi(res.data.message);
			}
			if(res.data.status == 'Member Not Found')
			{
				check_status_member_not_found();
			}
			if(res.data.status == 'Member Not Active')
			{
				check_status_member();
				message_alert = res.data.pesan;
			}
			message_notif = res.data.status;
			/* end check */

			total_cart = res.data.total_cart;
			$rootScope.total_cart = total_cart;
			$rootScope.no_wa = res.data.no_wa;
			$rootScope.total_message = res.data.total_message;
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.slideChanged = function(index) {
		$scope.slideIndex = index;
	};

	function getdashboarddata(){

		var link = base_url+'get_dashboard_data';
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:window.localStorage['customer_id'],
				category:category,
				page:page,
				token:token
			},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide()
			/* check */
			if(res.data.status == 'Invalid Token')
			{
				check_token();
			}
			if(res.data.status == 'OFF')
			{
				check_status_aplikasi(res.data.message);
			}
			if(res.data.status == 'Member Not Found')
			{
				check_status_member_not_found();
			}
			if(res.data.status == 'Member Not Active')
			{
				check_status_member();
				message_alert = res.data.pesan;
			}
			message_notif = res.data.status;
			/* end check */


			$scope.list_image = res.data.slider;
			$timeout(function(){
				$ionicSlideBoxDelegate.update();
				$ionicSlideBoxDelegate.loop(true);
			},10);

			$scope.best_seller = res.data.best_seller;
			$scope.new_product = res.data.new_product;
			if(res.data.status == "Not_found"){
				var alertPopup = $ionicPopup.alert({
					title: "Alert",
					template: "No Data"
				});
			}
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.data_dashboard = function(){
		var link = base_url+'get_dashboard_data';
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:window.localStorage['customer_id'],
				category:category,
				page:page,
				token:token
			},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide()
			/* check */
			if(res.data.status == 'Invalid Token')
			{
				check_token();
			}
			if(res.data.status == 'OFF')
			{
				check_status_aplikasi(res.data.message);
			}
			if(res.data.status == 'Member Not Found')
			{
				check_status_member_not_found();
			}
			if(res.data.status == 'Member Not Active')
			{
				check_status_member();
				message_alert = res.data.pesan;
			}
			message_notif = res.data.status;
			/* end check */


			$scope.list_image = res.data.slider;
			$timeout(function(){
				$ionicSlideBoxDelegate.update();
				$ionicSlideBoxDelegate.loop(true);
			},10);

			$scope.best_seller = res.data.best_seller;
			$scope.new_product = res.data.new_product;
			if(res.data.status == "Not_found"){
				var alertPopup = $ionicPopup.alert({
					title: "Alert",
					template: "No Data"
				});
			}
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}
	function get_list_product() {
		var link = base_url+'get_list_product';
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:window.localStorage['customer_id'],
				category: 'all',
				page: 1,
				token:token
			},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide()
			/* check */
			if(res.data.status == 'Invalid Token')
			{
				check_token();
			}
			if(res.data.status == 'OFF')
			{
				check_status_aplikasi(res.data.message);
			}
			if(res.data.status == 'Member Not Found')
			{
				check_status_member_not_found();
			}
			if(res.data.status == 'Member Not Active')
			{
				check_status_member();
				message_alert = res.data.pesan;
			}
			message_notif = res.data.status;
			/* end check */

			$scope.katalog = res.data.product;
			if(res.data.status == "Not_found"){
				var alertPopup = $ionicPopup.alert({
					title: "Alert",
					template: "No Data"
				});
			}
			$scope.view_stock = res.data.view_stock;
			if (res.data.total > 1) {
				$timeout(function() {
					$scope.showMoreData = true;
				});
			}
			$scope.$broadcast('scroll.refreshComplete');
		}, function(response) {
			$scope.$broadcast('scroll.refreshComplete');
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	get_list_product();

	$scope.allProduct = function () {
		productService.category = "all";
		page = 1;
		productService.page = page;

		$ionicHistory.clearCache().then(function(){
			$state.go('eventmenu.dashboardCategory', {}, {reload: true});
		});
	}

	$scope.cari_produk = function(){
		var pencarian = $scope.keyword;
		page = 1;
		$scope.loadMoreLink = 'get_search_product';
		$ionicLoading.show()
		var link = base_url+'get_search_product';
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:window.localStorage['customer_id'],
				category:'all',
				page:page,
				token:token,
				tipe : productService.selectedTipe,
				q : pencarian
			},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide()
			/* check */
			if(res.data.status == 'Invalid Token')
			{
				check_token();
			}
			if(res.data.status == 'OFF')
			{
				check_status_aplikasi(res.data.message);
			}
			if(res.data.status == 'Member Not Found')
			{
				check_status_member_not_found();
			}
			if(res.data.status == 'Member Not Active')
			{
				check_status_member();
				message_alert = res.data.pesan;
			}
			message_notif = res.data.status;
			/* end check */

			$scope.katalog = res.data.product;
			if(res.data.status == "Not_found"){
				var alertPopup = $ionicPopup.alert({
					title: "Alert",
					template: "No Data"
				});
			}
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	};

	$scope.detailBarang = function(id) {
		productService.selectedProduct = id;
		$state.go('eventmenu.detailbarang');
	}

	$scope.moreDataCanBeLoaded = function () {
		return true;
	}
	$scope.loadMoreData=function(){
		$scope.showMoreData = false;
		$ionicLoading.show()
		page += 1;

		var link = base_url+ $scope.loadMoreLink;
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:window.localStorage['customer_id'],
				category:'all',
				page:page,
				token:token,
				q : $scope.keyword
			},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide()
			if (res.data.status == 'Member Not Active') {
				check_status_member();
				message_alert = res.data.pesan;
			}
			var json = res.data;
			if(json!=null){
				if(json.status!="Failed"){
					var length_j = Object.keys(json.product).length;

					if($scope.katalog.length < json.total_product){
						for(var x=0;x<length_j;x++){
							img_thumbnail = json.product[x].img_thumbnail;
							$scope.katalog.push(json.product[x]);
						}
						$scope.showMoreData=true;
						$scope.$broadcast('scroll.infiniteScrollComplete');
					}
				}
			}
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});


	};

})
.controller("katalogCategoryController", function($scope, $state, $http, $ionicLoading, $timeout, $ionicHistory,$window, $ionicPopup, productService) {
	var _this = this;
	$scope.loadMoreLink = 'get_list_product_dashboard';
	$ionicLoading.show();
	$scope,showMoreData = false;

	function getdashboarddata() {
		$scope.kategori_name = productService.categoryName;
		var link = base_url+'get_list_product_dashboard';
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:window.localStorage['customer_id'],
				category:productService.category,
				page:productService.page,
				token:token
			},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide()
			/* check */
			if(res.data.status == 'Invalid Token')
			{
				check_token();
			}
			if(res.data.status == 'OFF')
			{
				check_status_aplikasi(res.data.message);
			}
			if(res.data.status == 'Member Not Found')
			{
				check_status_member_not_found();
			}
			if(res.data.status == 'Member Not Active')
			{
				check_status_member();
				message_alert = res.data.pesan;
			}
			message_notif = res.data.status;
			/* end check */

			$scope.katalog = res.data.product;
			if(res.data.status == "Not_found"){
				var alertPopup = $ionicPopup.alert({
					title: "Alert",
					template: "No Data"
				});
			}
			$scope.view_stock = res.data.view_stock;
			$scope.$broadcast('scroll.refreshComplete');
			if (res.data.total_page > 1) {
				$timeout(function() {
					$scope.showMoreData = true;
				}, 500)
			}
		}, function(response) {
			$scope.$broadcast('scroll.refreshComplete');
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	getdashboarddata();

	$scope.doRefresh = function() {
		$scope.showMoreData = true;
		page = 1;
		getdashboarddata();
	};

	$scope.cari_produk = function(){

		var pencarian = $scope.keyword;
		page = 1;
		$scope.loadMoreLink = 'get_search_product';
		$ionicLoading.show()
		var link = base_url+'get_search_product';
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:window.localStorage['customer_id'],
				category: productService.category,
				page:page,
				token:token,
				tipe : productService.selectedTipe,
				q : pencarian
			},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide()
			/* check */
			if(res.data.status == 'Invalid Token')
			{
				check_token();
			}
			if(res.data.status == 'OFF')
			{
				check_status_aplikasi(res.data.message);
			}
			if(res.data.status == 'Member Not Found')
			{
				check_status_member_not_found();
			}
			if(res.data.status == 'Member Not Active')
			{
				check_status_member();
				message_alert = res.data.pesan;
			}
			message_notif = res.data.status;
			/* end check */

			$scope.katalog = res.data.product;
			if(res.data.status == "Not_found"){
				var alertPopup = $ionicPopup.alert({
					title: "Alert",
					template: "No Data"
				});
			}
			$scope.view_stock = res.data.view_stock;
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	};

	$scope.detailBarang = function  (id) {
		productService.selectedProduct = id;
		productService.list_data = $scope.katalog;
		$state.go('eventmenu.detailbarang');
	}

	$scope.moreDataCanBeLoaded = function () {
		return true;
	}
	$scope.loadMoreData=function(){
		$scope.showMoreData = false;
		$ionicLoading.show()
		page += 1;
		var link = base_url+ $scope.loadMoreLink;
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:window.localStorage['customer_id'],
				category:productService.category,
				page:page,
				token:token,
				q: $scope.keyword
			},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide();
			if (res.data.status == 'Member Not Active') {
				check_status_member();
				message_alert = res.data.pesan;
			}
			var json = res.data;
			if(json!=null){
				if(json.status!="Failed"){
					var length_j = Object.keys(json.product).length;

					if($scope.katalog.length < json.total_product){
						for(var x=0;x<length_j;x++){
							$scope.katalog.push(json.product[x]);
						}
						$timeout(function() {
							$scope.showMoreData = true;
							$scope.$broadcast('scroll.infiniteScrollComplete');
						}, 500);
					}
				}
			}
			$scope.view_stock = res.data.view_stock;
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});

	};

	$scope.search_product = function() {
		var pencarian = $scope.keyword;
		page = 1;

		$ionicLoading.show()
		var link = base_url+'get_search_product';
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:window.localStorage['customer_id'],
				category:productService.category,
				page:page,
				token:token,
				tipe : productService.selectedTipe,
				q : pencarian
			},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide()
			/* check */
			if(res.data.status == 'Invalid Token')
			{
				check_token();
			}
			if(res.data.status == 'OFF')
			{
				check_status_aplikasi(res.data.message);
			}
			if(res.data.status == 'Member Not Found')
			{
				check_status_member_not_found();
			}
			if(res.data.status == 'Member Not Active')
			{
				check_status_member();
				message_alert = res.data.pesan;
			}
			message_notif = res.data.status;
			/* end check */

			$scope.katalog = res.data.product;
			if(res.data.status == "Not_found"){
				var alertPopup = $ionicPopup.alert({
					title: "Alert",
					template: "No Data"
				});
			}
			$state.go('eventmenu.dashboardSearch', {}, {reload: true});
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

})


.controller("detailBarangController", function($scope, $state, $http, $ionicLoading, $ionicSlideBoxDelegate, $ionicHistory, $window, $ionicPopup, $rootScope, $timeout, productService, $ionicActionSheet) {
	var _this = this
	$scope.productService = productService;
	$scope.postDataOrder = {};
	var array_image = [];


	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	if (typeof $scope.customer_id === "undefined") {
		$scope.isLogin = false;
	}else{
		$scope.isLogin = true;
	}

	$scope.slider = ['1','2','3'];

	$scope.changeSlider = function(index){
		$scope.$broadcast('slideBox.setSlide', index);
	}
	get_detail_product();

	function get_detail_product(){
		$ionicLoading.show()
		var link = base_url+'get_detail_product';
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:window.localStorage['customer_id'],
				product_id:productService.selectedProduct,
				token:token
			},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide();

			if(res.data.status == 'Member Not Active') {
				check_status_member();
				message_alert = res.data.pesan;
			}
			$scope.product_name = res.data.name_item;
			$scope.product_harga = res.data.harga;
			$scope.product_harga_formated = toRp(res.data.harga);
			$scope.product_keterangan = res.data.keterangan;

			$scope.bahan = res.data.bahan;
			$scope.model = res.data.model;
			$scope.warna = res.data.warna;
			$scope.panjang = res.data.panjang;
			$scope.ukuran = res.data.ukuran;
			$scope.lingkar_pinggang = res.data.lingkar_pinggang;
			$scope.img_url = res.data.img_large;

			$scope.product_min_order = res.data.min_order;
			$scope.product_id = res.data.product_id;
			$scope.product_harga_lama = res.data.harga_lama;
			$scope.product_img_large = res.data.img_large;
			$scope.product_img_medium = res.data.img_medium;
			$scope.product_img_thumbnail = res.data.img_thumbnail;
			$scope.product_type = res.data.product_type;
			$scope.tipe = res.data.product_type;
			$scope.list_image = res.data.image_data;
			$scope.customer_type = res.data.customer_type;
			$timeout(function(){
				$ionicSlideBoxDelegate.update();
				$ionicSlideBoxDelegate.loop(true);
			},10);

			for(var z = 0; z < res.data.image_data.length; z++){
				array_image.push(res.data.image_data[z].foto);
			}

			$scope.tipe_customer = res.data.status_harga_customer;
			$scope.list_variant = res.data.variant;
			$timeout( function() {
				$scope.slideboxStyle = true;
				$('#deskripsi').emojioneArea();
				$('#deskripsi').data('emojioneArea').enabled();
				$timeout(function() {
					$('.emojionearea-button').remove();
				}, 200);
			}, 100);



			for (i = 0; i < $scope.list_variant.length; i++) {
				angular.element(document.querySelector('#qty_'+i)).val(" ");
			}

			$scope.list_variant.sort(function(a, b) {
				return a.price - b.price;
			});
			$scope.price = $scope.list_variant[0].price;
			$scope.price_ecer = $scope.list_variant[0].price_ecer;
			$scope.price_old = $scope.list_variant[0].price_old;
			$scope.variant_id = $scope.list_variant[0].id_variant;
			$scope.view_stock = res.data.view_stock;

		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.changeVariant = function(index) {
		$scope.price = $scope.list_variant[index].price;
		$scope.price_ecer = $scope.list_variant[index].price_ecer;
		$scope.price_old = $scope.list_variant[index].price_old;
		$scope.variant_id = $scope.list_variant[index].id_variant;
	}

	$scope.share = function() {
		$ionicLoading.show();
		var files = [];
		$scope.list_image.forEach(function(image) {
			files.push(image.url);
		});
		var options = {
			message: $scope.product_keterangan,
			subject: $scope.product_name,
			files: files,
			chooserTitle: 'Bagikan ' + $scope.product_name,
		};

		var onSuccess = function() {
			$ionicLoading.hide();
		};

		var onError = function(msg) {
			$ionicLoading.hide();
			alert("Gagal membagikan " + msg);
		};

		window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
	}

	$scope.successCopy = function(e) {
		e.clearSelection();
		alert('Deskripsi berhasil disalin');
	}

	$scope.submit_order = function () {
		if(localStorage.getItem('customer_id') != '' && localStorage.getItem('customer_id') != null && localStorage.getItem('customer_id') != 'undefined' ){
			if(!productService.selectedProduct){
				var alertPopup = $ionicPopup.alert({
					title: "Alert",
					template: "Product ID Tidak Boleh Kosong"
				});
			}else if(!$scope.postDataOrder.variant){
				var alertPopup = $ionicPopup.alert({
					title: "Alert",
					template: "Variant Tidak Boleh Kosong"
				});
			}else if(!$scope.postDataOrder.qty){
				var alertPopup = $ionicPopup.alert({
					title: "Alert",
					template: "Quantity Tidak Boleh Kosong"
				});
			} else {
				var str = $scope.postDataOrder.variant;
				var variant = str.split("(");

				$ionicLoading.show()
				var link = base_url+'process_order_item';
				if($scope.postDataOrder.catatan != null && $scope.postDataOrder.catatan != '' ) {
					var catatan = $scope.postDataOrder.catatan;
				} else {
					var catatan = 'null';
				}
				$http({
					method : 'POST',
					url : link,
					data : {
						customer_id:window.localStorage['customer_id'],
						token:token,
						prod_id:productService.selectedProduct,
						variant_id:$scope.variant_id,
						qty:$scope.postDataOrder.qty,
						notes:catatan,
						tipe:$scope.tipe,
						price:$scope.price
					},
					timeout: 10000
				}).then(
				function(res) {
					$ionicLoading.hide()
					/* check */
					if (res.data.status == 'Invalid Token') {
						check_token();
					}
					if (res.data.status == 'OFF') {
						check_status_aplikasi(res.data.message);
					}
					if (res.data.status == 'Member Not Found') {
						check_status_member_not_found();
					}
					if (res.data.status == 'Member Not Active') {
						check_status_member();
						message_alert = res.data.pesan;
					}
					message_notif = res.data.status;
					/* end check */

					if(res.data.status=="Terima Kasih"){
						total_cart += parseInt(res.data.count);
						$rootScope.$broadcast('new-order', { any: {total_cart:total_cart} });
						$timeout( function() {
							$ionicHistory.goBack(-1);
						}, 1000);
					}

					var alertPopup = $ionicPopup.alert({
						title: res.data.status,
						template: res.data.message
					});

				}, function(response) {
					$ionicLoading.hide();
					alert('Failed to continue, please check your internet connection');
				});
			}
		} else {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.login');
		}
	}


	$scope.actionSaveImage = function() {
		if (typeof window.localStorage['customer_id'] === 'undefined' && localStorage.getItem('status_member') === 'undefined') {
			$state.go('eventmenu.login');
		} else {
			$ionicActionSheet.show({
				buttons: [
					{text: '<i class="icon ion-android-archive"></i> Save All Images'},
					{text: '<i class="icon ion-android-archive"></i> Save Current Images'}
				],
				titleText: 'Select Save Image Options',
				cancelText: 'Cancel',
				cancel: function() {
				},
				buttonClicked: function(index) {
					if (index === 0) {
						var img = $scope.list_image;

						var i = 0;
						function saveImage() {
							$ionicLoading.show();
							setTimeout(function() {
								$scope.save_image(img[i].foto, i);
								i++;
								if (i < img.length) {
									saveImage();
								} else {
									$ionicLoading.hide();
								}
							}, 800);
						}

						saveImage();
					} else if (index === 1) {
						$scope.save_image(undefined, 0);
					}
					return true;
				}
			});
		}
	};

	$scope.save_image = function(url_file, i) {
		if (url_file === undefined) {
			$scope.img_url = base_url_media + '/images/large/' + array_image[$ionicSlideBoxDelegate.currentIndex()];
		} else {
			$scope.img_url = base_url_media + '/images/large/' + url_file;
		}

		cordova.plugins.diagnostic.requestRuntimePermission(
			function(status) {
				switch (status) {
					case cordova.plugins.diagnostic.permissionStatus.GRANTED:
						break;
					case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
						break;
					case cordova.plugins.diagnostic.permissionStatus.DENIED:
						break;
					case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
						break;
				}
			},
			function(error) {
				console.error('The following error occurred: ' + error);
			},
			cordova.plugins.diagnostic.runtimePermission.WRITE_EXTERNAL_STORAGE
		);
		cordova.plugins.diagnostic.registerPermissionRequestCompleteHandler(successCallback(i));
	};

	function successCallback(i) {
		download_lagi2($scope.img_url, i);
	}

	function download_lagi2(url, i) {
		$ionicLoading.show();
		setTimeout(function() {
			var success = function(msg) {
				var img_length = $scope.list_image.length - 1;
				if (i === img_length) {
					alert('Image Successfully Downloaded');
				}
				$ionicLoading.hide();
			};

			var error = function(err) {
				console.error(err);
				alert('message: ' + err);
				$ionicLoading.hide();
			};

			saveImageToPhone(url, success, error);
		}, 3000);
	}

	function saveImageToPhone(url, success, error) {
		var canvas, context, imageDataUrl, imageData;
		var img = new Image();
		img.onload = function() {
			canvas = document.createElement('canvas');
			canvas.width = img.width;
			canvas.height = img.height;
			context = canvas.getContext('2d');
			context.drawImage(img, 0, 0);
			try {
				imageDataUrl = canvas.toDataURL('image/jpeg', 1.0);
				imageData = imageDataUrl.replace(/data:image\/jpeg;base64,/, '');
				cordova.exec(success, error, 'Canvas2ImagePlugin', 'saveImageDataToLibrary', [imageData, url]);
			} catch (e) {
				error(e.message);
			}
		};
		try {
			img.src = url;
		} catch (e) {
			error('ero saveImageToPhone' + e.message);
		}
	}

})
.controller("listpesananbarangController", function($scope, $state, $http, $ionicHistory, $ionicLoading, $ionicPopup, listPesananService, $window, $rootScope, dataPesananService) {

	get_cart();
	function get_cart() {
		$ionicLoading.show()
		var link = base_url+'get_cart_total';
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:window.localStorage['customer_id'],
				token:token
			},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide()
			/* check */
			if(res.data.status == 'Invalid Token')
			{
				check_token();
			}
			if(res.data.status == 'OFF')
			{
				check_status_aplikasi(res.data.message);
			}
			if(res.data.status == 'Member Not Found')
			{
				check_status_member_not_found();
			}
			if(res.data.status == 'Member Not Active')
			{
				check_status_member();
				message_alert = res.data.pesan;
			}
			message_notif = res.data.status;
			/* end check */

			total_cart = res.data.total_cart;
			$rootScope.$broadcast('new-order', { any: {total_cart:total_cart} });
			$rootScope.total_message = res.data.total_message;
			$rootScope.no_wa = res.data.no_wa;
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}
	if(localStorage.getItem('customer_id') != 0 && localStorage.getItem('customer_id') != null && localStorage.getItem('customer_id') != '' )
	{
		var _this = this
		$scope.postData = {};
		$scope.checkedOrder = [];
		$scope.checkItems = { }
		idx = 0;
		$ionicLoading.show()
		var link = base_url+'list_order';
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:window.localStorage['customer_id'],
				token:token
			},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide();
			if(res.data.status == 'Member Not Active') {
				check_status_member();
				message_alert = res.data.pesan;
			}
			$scope.list_order = res.data.order;

			$scope.total_amount = toRp(res.data.total_amount);
			$scope.total_qty = res.data.total_qty;
			$scope.total_weight = res.data.total_weight;
			$scope.satuan_berat = res.data.satuan_berat;
			localStorage.setItem('satuan_berat', $scope.satuan_berat);

			if(res.data.total_qty == 0){
				var alertPopup = $ionicPopup.alert({
					title: "Alert",
					template: "No Data"
				});
			}
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});

		$scope.setCheckedOrder = function (index,id,name,variant,qty,weight,price,subtotal) {
			if($scope.checkItems[index]==true){
				idx++;
				$scope.checkedOrder.push({idx:idx-1, id:id, name:name, variant : variant, qty : qty, weight : weight, price : price, subtotal : subtotal});
			}else{
				if($scope.checkedOrder.length==1){
					$scope.checkedOrder.splice(0,1);
				}else{
					var data_checked = JSON.stringify($scope.checkedOrder);
					$scope.checkedOrder.splice($scope.checkedOrder[idx-1].idx,1);
				}
				idx--;
			}
		}

		$scope.dropship1 = function () {
			if($scope.checkedOrder.length>=1){
				listPesananService.checkedOrder = $scope.checkedOrder;
				$state.go('eventmenu.dropship1');
			}else{
				var alertPopup = $ionicPopup.alert({
					title: "Notifikasi",
					template: "Silahkan Pilih Pesanan Terlebih Dahulu"
				});
			}

		}

		$scope.dropship2 = function () {
			if($scope.checkedOrder.length>=1){
				listPesananService.checkedOrder = $scope.checkedOrder;
				$state.go('eventmenu.dropship2');
			}else{
				var alertPopup = $ionicPopup.alert({
					title: "Notifikasi",
					template: "Silahkan Pilih Pesanan Terlebih Dahulu"
				});
			}
		}

		$scope.dropship3 = function () {
			if($scope.checkedOrder.length>=1){
				listPesananService.checkedOrder = $scope.checkedOrder;
				$state.go('eventmenu.dropship3');
			}else{
				var alertPopup = $ionicPopup.alert({
					title: "Notifikasi",
					template: "Silahkan Pilih Pesanan Terlebih Dahulu"
				});
			}
		}
	}
	else
	{
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
		$state.go('eventmenu.login');
	}

	$scope.ambil_ditoko = function() {
		if ($scope.checkedOrder.length >= 1) {
			var confirmPopup = $ionicPopup.confirm({
				title: 'Konfirmasi',
				template: 'Buat pesanan ambil di toko ?'
			});

			confirmPopup.then(function(res) {
				if (res) {
					$ionicLoading.show();
					var list_dropship = [];
					angular.forEach($scope.checkedOrder,function(value) {
						list_dropship.push(value.id);
					});
					var link = base_url + 'process_ambil_ditoko';
					$http({
						method : 'POST',
						url : link,
						data : {
							customer_id:window.localStorage['customer_id'],
							token:token,
							order_item_id: list_dropship,
							weight: $scope.total_weight,
						},
						timeout: 10000
					}).then(
					function(res) {
						$ionicLoading.hide();
						if(res.data.status == 'Member Not Active') {
							check_status_member();
							message_alert = res.data.pesan;
						}
						var alertPopup = $ionicPopup.alert({
							title: 'Notifikasi',
							template: res.data.status
						});
						dataPesananService.selectedPesananID = res.data.order_id;
						$state.go('eventmenu.listdatadetailpesanan');
					}, function(response) {
						$ionicLoading.hide();
						alert('Failed to continue, please check your internet connection');
					});
				}
			});
		} else {
			var alertPopup = $ionicPopup.alert({
				title: "Notifikasi",
				template: "Silahkan Pilih Pesanan Terlebih Dahulu"
			});
		}
	}

})


//KIRIM ALAMAT SENDIRI
.controller("kirimAlamatSendiriController",function($scope,$state, $http, $ionicLoading,listPesananService,dataPesananService, $window, $ionicPopup, $timeout, $ionicHistory){
	$scope.postData = {};

	$scope.arr_prov = [];
	$scope.arr_kota = [];
	$scope.arr_kecamatan = [];
	$scope.arr_ekspedisi = [];
	$scope.listPesananService = listPesananService;
	$scope.checkedOrder = listPesananService.checkedOrder;
	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	$scope.total_all = 0;
	$scope.ongkir = 0;

	var prov_id;
	var kota_id;
	var kec_id;

	var total_amount = 0;
	var total_qty = 0;
	var total_weight = 0;
	var array = $scope.checkedOrder;
	var length_arr = array.length;


	for(var x=0;x<length_arr;x++){
		total_amount += parseFloat(array[x].subtotal);
		total_qty += parseFloat(array[x].qty);
		total_weight += parseFloat(array[x].weight);
	}



	$scope.total_amount = toRp(total_amount);
	$scope.total_qty = total_qty;
	$scope.total_weight = total_weight.toFixed(2);

	$ionicLoading.show()
	var link = base_url+"get_customer_info";
	$http({
		method : 'POST',
		url : link,
		data : {
			customer_id:window.localStorage['customer_id'],
			token:token
		},
		timeout: 10000
	}).then(
	function(res) {

		if(res.data.status == 'Member Not Active') {
			check_status_member();
			message_alert = res.data.pesan;
		}

		prov_id = res.data.prov_id;
		kota_id = res.data.kota_id;
		kec_id = res.data.kecamatan_id;

		$scope.arr_prov.push({provinsi_id:res.data.prov_id, provinsi:res.data.prov});
		$scope.arr_kota.push({kota_id:res.data.kota_id, kota:res.data.kota});
		$scope.arr_kecamatan.push({kecamatan_id:res.data.kecamatan_id, kecamatan:res.data.kecamatan});

		$scope.provinsi = res.data.prov;
		$scope.kota = res.data.kota;
		$scope.kecamatan = res.data.kecamatan;
		$scope.dari = shop_name;
		$scope.kepada = res.data.name;
		$scope.alamat = res.data.address;
		$scope.kodepos = res.data.postcode;
		$scope.telepon = res.data.phone;

		$scope.postData.dari = shop_name;
		$scope.postData.kepada = res.data.name;
		$scope.postData.alamat = res.data.address;
		$scope.postData.kodepos = res.data.postcode;
		$scope.postData.telepon = res.data.phone;
		$scope.postData.prov_id = res.data.prov_id;
		$scope.postData.provinsi = res.data.provinsi;
		$scope.postData.kota = res.data.kota_id;
		$scope.postData.kecamatan = res.data.kecamatan_id;
		$ionicLoading.hide();
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	var link = base_url+"get_content";
	$http({
		method : 'POST',
		url : link,
		data : {
			customer_id:window.localStorage['customer_id'],
			token:token
		},
		timeout: 10000
	}).then(
	function(res) {
		var json = res.data;

		if(res.data.status == 'Member Not Active') {
			check_status_member();
			message_alert = res.data.pesan;
		}

		$window.localStorage['origin_city_id'] = json[19].value;
		$window.localStorage['origin_city_name'] = json[24].value;
		$window.localStorage['satuan_berat'] = json[25].value;

		var x = 0;
		if(json[20].value=="available"){
			$scope.arr_ekspedisi.push({"code":"jne"});
			x++;
		}
		if(json[21].value=="available"){
			$scope.arr_ekspedisi.push({"code":"tiki"});
			x++;
		}
		if(json[22].value=="available"){
			$scope.arr_ekspedisi.push({"code":"pos"});
			x++;
		}
		if(json[23].value=="available"){
			$scope.arr_ekspedisi.push({"code":"wahana"});
			x++;
		}
		if(json[26].value=="available"){
			$scope.arr_ekspedisi.push({"code":"jnt"});
			x++;
		}
		if(json[27].value=="available"){
			$scope.arr_ekspedisi.push({"code":"sicepat"});
			x++;
		}


		$scope.satuan_berat = $window.localStorage['satuan_berat'];
		$ionicLoading.hide()
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.getTarif = function (val) {
		$ionicLoading.show()
		var param="?token="+token_api+"&domain="+domain_api+"&origin_city_id="+$window.localStorage['origin_city_id']+"&destination_id="+kec_id+"&destination_type=subdistrict&weight="+total_weight+"&satuan="+$window.localStorage['satuan_berat']+"&courier="+val;
		var link = base_url_api+"/cost"+param;
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:window.localStorage['customer_id'],
				token:token
			},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide();
			if(res.data.status == 'Member Not Active') {
				check_status_member();
				message_alert = res.data.pesan;
			}
			$scope.listTarif = res.data.result[0].costs;
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});

	}

	$scope.setOngkir = function (val) {
		val = val.split("#");
		$scope.ongkir = val[0];
		var subtotal = $scope.total_amount.replace(".","");
		var ongkir = $scope.ongkir.replace(".","");
		$scope.tarif_tipe = val[1];

		$scope.total_all = toRp(parseInt(subtotal) + parseInt(ongkir));
	}

	$scope.process_dropship1 = function () {
		var dari = $scope.postData.dari;
		var kepada = $scope.postData.kepada;
		var alamat = $scope.postData.alamat;
		var provinsi = $scope.postData.provinsi;
		var kota = $scope.postData.kota;
		var kecamatan = $scope.postData.kecamatan;
		var ekspedisi = $scope.postData.ekspedisi;
		var tarif = $scope.postData.tarif;
		var kodepos = $scope.postData.kodepos;
		var telepon = $scope.postData.telepon;

		var list_dropship = new Array();
		angular.forEach($scope.checkedOrder,function(value,index){
			list_dropship.push(value.id);
		})


		if(ekspedisi==null){
			var alertPopup = $ionicPopup.alert({
				title: "Notifikasi",
				template: "Ekspedisi Tidak Boleh kosong"
			});
		}else if(tarif==null){
			var alertPopup = $ionicPopup.alert({
				title: "Notifikasi",
				template: "Tarif Tidak Boleh kosong"
			});
		}else{
			$ionicLoading.show()
			var link = base_url+"process_dropship";
			$http({
				method : 'POST',
				url : link,
				data : {
					customer_id: $window.localStorage['customer_id'],
					from: dari ,
					to: kepada,
					provinsi: $scope.provinsi,
					kota: $scope.kota,
					kecamatan: $scope.kecamatan,
					address_recipient: alamat,
					phone_recipient:telepon ,
					postal_code:kodepos,
					ongkir: $scope.ongkir,
					total: $scope.total_all,
					weight: $scope.total_weight,
					order_item_id:  list_dropship,
					ekspedisi: ekspedisi,
					tarif_tipe: $scope.tarif_tipe,
					fee_kg : "",
					origin_city_id: $window.localStorage['origin_city_id'],
					prov_id:prov_id,
					kota_id:kota,
					kecamatan_id:kecamatan,
					token: token
				},
				timeout: 10000
			}).then(
			function(res) {
				$ionicLoading.hide();
				if(res.data.status == 'Member Not Active') {
					check_status_member();
					message_alert = res.data.pesan;
				}
				var alertPopup = $ionicPopup.alert({
					title: "Notifikasi",
					template: res.data.status
				});


				dataPesananService.selectedPesananID = res.data.order_id;
				$state.go('eventmenu.listdatadetailpesanan');

			}, function(response) {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}


	}
})


//KIRIM ALAMAT LAIN
.controller("kirimAlamatLainController",function($scope,$state, $http, $ionicLoading,listPesananService,dataPesananService, $window, $ionicPopup, $timeout, $ionicHistory){
	$scope.postData = {};

	$scope.arr_prov = [];
	$scope.arr_kota = [];
	$scope.arr_kecamatan = [];
	$scope.arr_ekspedisi = [];
	$scope.listPesananService = listPesananService;
	$scope.checkedOrder = listPesananService.checkedOrder;
	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	$scope.total_all = 0;
	$scope.ongkir = 0;

	var prov_id;
	var kota_id;
	var kec_id;

	var total_amount = 0;
	var total_qty = 0;
	var total_weight = 0;
	var array = $scope.checkedOrder;
	var length_arr = array.length;


	for(var x=0;x<length_arr;x++){
		total_amount += parseFloat(array[x].subtotal);
		total_qty += parseFloat(array[x].qty);
		total_weight += parseFloat(array[x].weight);
	}



	$scope.total_amount = toRp(total_amount);
	$scope.total_qty = total_qty;
	$scope.total_weight = total_weight.toFixed(2);

	$ionicLoading.show()
	var param = "?token="+token_api+"&domain="+domain_api;
	var link = base_url_api+"/province"+param;
	$http({
		method : 'POST',
		url : link,
		data : {},
		timeout: 10000
	}).then(
	function(res) {
		if(res.data.status == 'Member Not Active') {
			check_status_member();
			message_alert = res.data.pesan;
		}
		$scope.list_provinsi = res.data.result;
		$scope.ListProvinsi = true;
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});


	$scope.getKota = function (val) {
		val = val.split("#");
		prov_id = val[0];
		$scope.provinsi = val[1];

		$ionicLoading.show()
		var param = "?token="+token_api+"&domain="+domain_api+"&province_id="+val;
		var link = base_url_api+"/city"+param;
		$http({
			method : 'POST',
			url : link,
			data : {},
			timeout: 10000
		}).then(
		function(res) {
			$scope.city_name = "-Pilih kota-";
			$scope.city_id = "0";
			$scope.ListKota = true;

			$ionicLoading.hide();
			if(res.data.status == 'Member Not Active') {
				check_status_member();
				message_alert = res.data.pesan;
			}
			$scope.list_kota = res.data.result;
			$scope.list_kecamatan = [];
			$scope.kecamatan = "-Pilih Kecamatan-";
			$scope.kecamatan_id = "0";
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}



	$scope.getKecamatan = function (val) {
		val = val.split("#");
		kota_id = val[0];
		$scope.kota = val[1];

		$ionicLoading.show()
		var param = "?token="+token_api+"&domain="+domain_api+"&city_id="+$scope.postData.kota;
		var link = base_url_api+"/subdistrict"+param;
		$http({
			method : 'POST',
			url : link,
			data : {},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide();
			if(res.data.status == 'Member Not Active') {
				check_status_member();
				message_alert = res.data.pesan;
			}
			$scope.kecamatan = "-Pilih Kecamatan-";
			$scope.kecamatan_id = "0";
			$scope.ListKecamatan = true;

			$scope.list_kecamatan = res.data.result;
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	var link = base_url+"get_content";
	$http({
		method : 'POST',
		url : link,
		data : {
			customer_id:window.localStorage['customer_id'],
			token:token
		},
		timeout: 10000
	}).then(
	function(res) {
		$ionicLoading.hide();
		if(res.data.status == 'Member Not Active') {
			check_status_member();
			message_alert = res.data.pesan;
		}
		var json = res.data;

		$window.localStorage['origin_city_id'] = json[19].value;
		$window.localStorage['origin_city_name'] = json[24].value;
		$window.localStorage['satuan_berat'] = json[25].value;

		var x = 0;
		if(json[20].value=="available"){
			$scope.arr_ekspedisi.push({"code":"jne"});
			x++;
		}
		if(json[21].value=="available"){
			$scope.arr_ekspedisi.push({"code":"tiki"});
			x++;
		}
		if(json[22].value=="available"){
			$scope.arr_ekspedisi.push({"code":"pos"});
			x++;
		}
		if(json[23].value=="available"){
			$scope.arr_ekspedisi.push({"code":"wahana"});
			x++;
		}
		if(json[26].value=="available"){
			$scope.arr_ekspedisi.push({"code":"jnt"});
			x++;
		}
		if(json[27].value=="available"){
			$scope.arr_ekspedisi.push({"code":"sicepat"});
			x++;
		}

		$scope.satuan_berat = $window.localStorage['satuan_berat'];

	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.setKecamatan = function (val){
		val = val.split("#");
		kec_id = val[0];
		$scope.kecamatan = val[1];
	}

	$scope.getTarif = function (val) {
		$ionicLoading.show()
		var param="?token="+token_api+"&domain="+domain_api+"&origin_city_id="+$window.localStorage['origin_city_id']+"&destination_id="+kec_id+"&destination_type=subdistrict&weight="+total_weight+"&satuan="+$window.localStorage['satuan_berat']+"&courier="+val;
		var link = base_url_api+"/cost"+param;
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:window.localStorage['customer_id'],
				token:token
			},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide();
			if(res.data.status == 'Member Not Active') {
				check_status_member();
				message_alert = res.data.pesan;
			}

			$scope.listTarif = res.data.result[0].costs;
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.setOngkir = function (val) {
		val = val.split("#");
		$scope.ongkir = val[0];
		var subtotal = $scope.total_amount.replace(".","");
		var ongkir = $scope.ongkir.replace(".","");
		$scope.tarif_tipe = val[1];

		$scope.total_all = toRp(parseInt(subtotal) + parseInt(ongkir));
	}


	$scope.process_dropship1 = function () {
		var dari = $scope.postData.dari;
		var kepada = $scope.postData.kepada;
		var alamat = $scope.postData.alamat;
		var provinsi = $scope.postData.provinsi;
		var kota = $scope.postData.kota;
		var kecamatan = $scope.postData.kecamatan;
		var ekspedisi = $scope.postData.ekspedisi;
		var tarif = $scope.postData.tarif;
		var kodepos = $scope.postData.kodepos;
		var telepon = $scope.postData.telepon;

		var list_dropship = new Array();
		angular.forEach($scope.checkedOrder,function(value,index){
			list_dropship.push(value.id);
		})

		if(dari==null){
			var alertPopup = $ionicPopup.alert({
				title: "Notifikasi",
				template: "Dari Tidak Boleh kosong"
			});
		}else if(kepada==null){
			var alertPopup = $ionicPopup.alert({
				title: "Notifikasi",
				template: "Kepada Tidak Boleh kosong"
			});
		}else if(alamat==null){
			var alertPopup = $ionicPopup.alert({
				title: "Notifikasi",
				template: "Alamat Tidak Boleh kosong"
			});
		}else if(provinsi==null){
			var alertPopup = $ionicPopup.alert({
				title: "Notifikasi",
				template: "Provinsi Tidak Boleh kosong"
			});
		}else if(kota==null){
			var alertPopup = $ionicPopup.alert({
				title: "Notifikasi",
				template: "Kota Tidak Boleh kosong"
			});
		}else if(kecamatan==null){
			var alertPopup = $ionicPopup.alert({
				title: "Notifikasi",
				template: "Kecamatan Tidak Boleh kosong"
			});
		}else if(ekspedisi==null){
			var alertPopup = $ionicPopup.alert({
				title: "Notifikasi",
				template: "Ekspedisi Tidak Boleh kosong"
			});
		}else if(tarif==null){
			var alertPopup = $ionicPopup.alert({
				title: "Notifikasi",
				template: "Tarif Tidak Boleh kosong"
			});
		}else if(kodepos==null){
			var alertPopup = $ionicPopup.alert({
				title: "Notifikasi",
				template: "Kodepos Tidak Boleh kosong"
			});
		}else if(telepon==null){
			var alertPopup = $ionicPopup.alert({
				title: "Notifikasi",
				template: "Telepon Penerima Tidak Boleh kosong"
			});
		}else{
			$ionicLoading.show()
			var link = base_url+"process_dropship";
			$http({
				method : 'POST',
				url : link,
				data : {
					customer_id: $window.localStorage['customer_id'],
					from: dari ,
					to: kepada,
					address_recipient: alamat,
					phone_recipient:telepon ,
					postal_code:kodepos,
					ongkir: $scope.ongkir,
					total: $scope.total_all,
					weight: $scope.total_weight,
					order_item_id:  list_dropship,
					ekspedisi: ekspedisi,
					tarif_tipe: $scope.tarif_tipe,
					fee_kg : "",
					origin_city_id: $window.localStorage['origin_city_id'],
					provinsi: $scope.provinsi,
					kota: $scope.kota,
					kecamatan: $scope.kecamatan,
					prov_id:prov_id,
					kota_id:kota_id,
					kecamatan_id:kec_id,
					token: token
				},
				timeout: 10000
			}).then(
			function(res) {
				$ionicLoading.hide();
				if(res.data.status == 'Member Not Active') {
					check_status_member();
					message_alert = res.data.pesan;
				}
				var alertPopup = $ionicPopup.alert({
					title: "Notifikasi",
					template: res.data.status
				});

				dataPesananService.selectedPesananID = res.data.order_id;
				$state.go('eventmenu.listdatadetailpesanan');
			}, function(response) {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}
	}
})

//TITIP TOKO
.controller('titipTokoController',function($scope,$state, $http, $ionicLoading,listPesananService,dataPesananService, $window, $ionicPopup, $timeout, $ionicHistory){
	$scope.postData = {};

	$scope.arr_prov = [];
	$scope.arr_kota = [];
	$scope.arr_kecamatan = [];
	$scope.arr_ekspedisi = [];
	$scope.listPesananService = listPesananService;
	$scope.checkedOrder = listPesananService.checkedOrder;
	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	$scope.total_all = 0;
	$scope.ongkir = 0;

	var prov_id;
	var kota_id;
	var kec_id;

	var total_amount = 0;
	var total_qty = 0;
	var total_weight = 0;
	var array = $scope.checkedOrder;
	var length_arr = array.length;


	for (var  x= 0;x < length_arr; x++){
		total_amount += parseFloat(array[x].subtotal);
		total_qty += parseFloat(array[x].qty);
		total_weight += parseFloat(array[x].weight);
	}

	$scope.total_amount = toRp(total_amount);
	$scope.total_qty = total_qty;
	$scope.total_weight = total_weight.toFixed(2);


	$scope.groups = [];
	for (var i = 0; i < 1; i++) {
		$scope.groups[i] = {
			name: i,
			items: []
		};
	}

	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};

	$scope.process_dropship3 = function () {
		var dari = $scope.postData.dari;
		var kepada = $scope.postData.kepada;
		var alamat = $scope.postData.alamat;
		var provinsi = $scope.postData.provinsi;
		var kota = $scope.postData.kota;
		var kecamatan = $scope.postData.kecamatan;
		var ekspedisi = $scope.postData.ekspedisi;
		var tarif = $scope.postData.tarif;
		var kodepos = $scope.postData.kodepos;
		var telepon = $scope.postData.telepon;
		var telepon_pengirim = $scope.postData.telepon_pengirim;
		var nama_toko = $scope.postData.nama_toko;
		var alamat_toko = $scope.postData.alamat_toko;
		var telpon_toko = $scope.postData.telpon_toko;
		var penerima_toko = $scope.postData.penerima_toko;

		var list_dropship = new Array();
		angular.forEach($scope.checkedOrder,function(value,index){
			list_dropship.push(value.id);
		});
		if(nama_toko==null){
			var alertPopup = $ionicPopup.alert({
				title: "Notifikasi",
				template: "Nama Toko Tidak Boleh kosong"
			});
		}else if(alamat_toko==null){
			var alertPopup = $ionicPopup.alert({
				title: "Notifikasi",
				template: "Alamat Toko Tidak Boleh kosong"
			});
		} else {
			$ionicLoading.show()
			var link = base_url+"process_dropship";
			$http({
				method : 'POST',
				url : link,
				data : {
					customer_id: $window.localStorage['customer_id'],
					from: dari ,
					to: kepada,
					address_recipient: alamat,
					phone_recipient:telepon ,
					phone_pengirim:telepon_pengirim ,
					nama_toko:nama_toko ,
					alamat_toko:alamat_toko ,
					telpon_toko:telpon_toko ,
					penerima_toko:penerima_toko ,
					postal_code:kodepos,
					ongkir: $scope.ongkir,
					total: $scope.total_all,
					weight: $scope.total_weight,
					order_item_id:  list_dropship,
					ekspedisi: ekspedisi,
					tarif_tipe: $scope.tarif_tipe,
					fee_kg : "",
					origin_city_id: $window.localStorage['origin_city_id'],
					provinsi: $scope.provinsi,
					kota: $scope.kota,
					kecamatan: $scope.kecamatan,
					prov_id:prov_id,
					kota_id:kota_id,
					kecamatan_id:kec_id,
					token: token
				},
				timeout: 10000
			}).then(
			function(res) {
				$ionicLoading.hide();
				if(res.data.status == 'Member Not Active') {
					check_status_member();
					message_alert = res.data.pesan;
				}
				var alertPopup = $ionicPopup.alert({
					title: "Notifikasi",
					template: res.data.status
				});
				dataPesananService.selectedPesananID = res.data.order_id;
				$state.go('eventmenu.listdatadetailpesanan');
			}, function(response) {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}
	}
})

.controller("datapesananController", function($scope, $state, $http, $ionicLoading, dataPesananService) {
	var _this = this

	$scope.listPesanan = function  (val) {
		$state.go('eventmenu.listdatapesanan');
		dataPesananService.jenisPesanan = val;
	}

})
.controller("listdatapesananController", function($scope, $state, $http, $ionicLoading, dataPesananService, $ionicPopup, konfirmasipembayaranService) {
	var _this = this
	$scope.dataPesananService = dataPesananService;
	$scope.data_id = ['1','2','3','4'];

	$scope.formatRupiah = function(val) {
		return 'Rp. ' + Number(val).toLocaleString('id');
	}
	$ionicLoading.show()
	var link = base_url+'get_data_order';
	$http({
		method : 'POST',
		url : link,
		data : {
			customer_id:window.localStorage['customer_id'],
			token:token,
			order_payment: 'Unpaid',
			page:page_pesanan
		},
		timeout: 10000
	}).then(
	function(res) {
		$ionicLoading.hide();
		if (res.data.status == 'Member Not Active') {
			check_status_member();
			message_alert = res.data.pesan;
		}
		if(res.data.status == 'Success'){
			$scope.data_pesanan = res.data.list;
		} else {
			var alertPopup = $ionicPopup.alert({
				title: 'Notifikasi',
				template: 'No Data'
			});
		}
		$scope.status_pesanan = 'Unpaid';
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});
	$scope.setJenisPesanan = function(status_pesanan) {
		$ionicLoading.show()
		var link = base_url+'get_data_order';
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:window.localStorage['customer_id'],
				token:token,
				order_payment:status_pesanan,
				page:page_pesanan
			},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide();
			if (res.data.status == 'Member Not Active') {
				check_status_member();
				message_alert = res.data.pesan;
			}
			if(res.data.status == 'Success')
			{
				$scope.data_pesanan = res.data.list;
			}
			else
			{
				$scope.data_pesanan = null;
				var alertPopup = $ionicPopup.alert({
					title: 'Notifikasi',
					template: 'No Data'
				});
			}

			$scope.status_pesanan = status_pesanan;

		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.gotoKonfirmasi = function (id) {
		konfirmasipembayaranService.order_id = id;
		$state.go('eventmenu.konfirmasipembayaran');
	}
	$scope.detailPesanan = function (id) {
		dataPesananService.selectedPesananID = id;
		$state.go('eventmenu.listdatadetailpesanan');
	}

})
.controller("listdatadetailpesananController", function($scope, $state, $http, $ionicLoading,$window, dataPesananService,konfirmasipembayaranService, $ionicHistory, $rootScope) {
	var _this = this

	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState) {
		if ((toState.name === 'eventmenu.dropship1' || toState.name === 'eventmenu.dropship2' || toState.name === 'eventmenu.dropship3') && fromState.name === 'eventmenu.listdatadetailpesanan') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$ionicHistory.clearCache().then(function(){
				$state.go('eventmenu.listdatapesanan', {}, {reload: true});
			});
		}
	});

	$scope.dataPesananService = dataPesananService;
	var order_id = dataPesananService.selectedPesananID;

	$ionicLoading.show()
	var link = base_url+'get_data_order_detail';
	$http({
		method : 'POST',
		url : link,
		data : {
			customer_id:window.localStorage['customer_id'],
			token:token,
			order_id:dataPesananService.selectedPesananID
		},
		timeout: 10000
	}).then(
	function(res) {
		$ionicLoading.hide();
		if (res.data.status == 'Member Not Active') {
			check_status_member();
			message_alert = res.data.pesan;
		}
		$scope.data_pesanan = res.data.list;

		$scope.order_id = res.data.order_id;
		$scope.nama_toko = res.data.nama_toko;
		$scope.alamat_toko = res.data.alamat_toko;
		$scope.telpon_toko = res.data.telpon_toko;
		$scope.order_datetime = res.data.order_datetime;
		$scope.order_status = res.data.order_status;
		$scope.order_payment = res.data.order_payment;
		$scope.shipping_from = res.data.shipping_from;
		$scope.shipping_to = res.data.shipping_to;
		$scope.address_recipient = res.data.address_recipient;
		$scope.provinsi = res.data.provinsi;
		$scope.kota = res.data.kota;
		$scope.kecamatan = res.data.kecamatan;
		$scope.resi = res.data.resi;
		$scope.shipping_status = res.data.shipping_status;
		$scope.ekspedisi = res.data.ekspedisi;
		$scope.tarif_tipe = res.data.tarif_tipe;
		$scope.confirm_status = res.data.confirm_status;

		$scope.list_order = res.data.orders_item;

		$scope.shipping_fee = res.data.shipping_fee;
		$scope.total = res.data.total;
		$rootScope.total_cart = res.data.total_cart;
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});
	$scope.gotoKonfirmasi = function (id) {
		konfirmasipembayaranService.order_id = id;
		$state.go('eventmenu.konfirmasipembayaran');
	}


})
.controller("konfirmasipembayaranController", function($scope, $state, $http, $ionicLoading, $ionicPopup, $ionicHistory, $window,konfirmasipembayaranService) {
	var _this = this
	$scope.postData = {};

	$scope.konfirmasipembayaranService = konfirmasipembayaranService;
	var order_id = konfirmasipembayaranService.order_id;

	$ionicLoading.show()
	var link = base_url+"get_data_order_unpaid";
	$http({
		method : 'POST',
		url : link,
		data : {
			customer_id:window.localStorage['customer_id'],
			token:token
		},
		timeout: 10000
	}).then(
	function(res) {
		$ionicLoading.hide();
		if (res.data.status == 'Member Not Active') {
			check_status_member();
			message_alert = res.data.pesan;
		}
		$scope.order_id = order_id;
		$scope.postData.order_id = order_id;
		$scope.data_order_unpaid = res.data.list;
		$scope.tipe_customer = res.data.status_harga_customer;
		$scope.metode = res.data.metode;

	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.formatRupiah = function(val) {
		return 'Rp. ' + Number(val).toLocaleString('id');
	}
	$scope.changeOrderID = function(id){
		$scope.postData.order_id = id;
	}
	$scope.confirm_payment = function(){
		var order_id = $scope.postData.order_id;
		var nama = $scope.postData.nama;
		var transfer_via = $scope.postData.transfer_via;
		var jumlah_transfer = $scope.postData.jumlah_transfer;
		var atas_nama = $scope.postData.atas_nama;
		var metode = $scope.postData.metode;
		var tipe = $scope.postData.tipe;

		var confirmPopup = $ionicPopup.confirm({
			title: "Notifikasi",
			template: "Konfirmasi Pembayaran ?"
		});

		confirmPopup.then(function(res) {
			if(res) {
				if(order_id==null){
					var alertPopup = $ionicPopup.alert({
						title: "Notifikasi",
						template: "Pilih Pesanan terlebih dahulu !"
					});
				}
				else if (tipe == null) {
					var alertPopup = $ionicPopup.alert({
						title: "Notifikasi",
						template: "Jumlah Tipe Pembayaran Tidak Boleh Kosong !"
				});
				}else if(nama==null){
				var alertPopup = $ionicPopup.alert({
					title: "Notifikasi",
					template: "Nama Tidak Boleh Kosong!"
				});
				}else if(transfer_via==null){
					var alertPopup = $ionicPopup.alert({
						title: "Notifikasi",
						template: "Transfer Via Bank Tidak Boleh Kosong !"
					});
				}else if(jumlah_transfer==null){
					var alertPopup = $ionicPopup.alert({
						title: "Notifikasi",
						template: "Jumlah Transfer Tidak Boleh Kosong !"
					});
				}else if(atas_nama==null){
					var alertPopup = $ionicPopup.alert({
						title: "Notifikasi",
						template: "Atas Nama Tidak Boleh Kosong !"
					});
				}else{
					$ionicLoading.show()
					var link = base_url+"confirm_payment";
					$http({
						method : 'POST',
						url : link,
						data : {
							customer_id:window.localStorage['customer_id'],
							token:token,
							nama : nama,
							bank : transfer_via,
							jumlah : jumlah_transfer,
							rekening : atas_nama,
							order_id : order_id,
							metode: metode,
							tipe: tipe
						},
						timeout: 10000
					}).then(
					function(res) {
						$ionicLoading.hide();
						if (res.data.status == 'Member Not Active') {
							check_status_member();
							message_alert = res.data.pesan;
						}
						$window.location.reload(true);
					}, function(response) {
						$ionicLoading.hide();
						alert('Failed to continue, please check your internet connection');
					});
				}
			}
		});


	}
})
.controller("pesanmasukController", function($scope, $state, $http, $ionicLoading, dataMessageService, $rootScope) {
	var _this = this

	$ionicLoading.show()
	var link = base_url+"get_list_message";
	$http({
		method : 'POST',
		url : link,
		data : {
			customer_id:window.localStorage['customer_id'],
			token:token,
			page: page_pesan
		},
		timeout: 10000
	}).then(
	function(res) {
		$ionicLoading.hide()
		if (res.data.status == 'Member Not Active') {
			check_status_member();
			message_alert = res.data.pesan;
		}
		$scope.data_message = res.data.message;
		$rootScope.total_message = res.data.total_message;
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});



	$scope.detailMessage = function (id) {
		dataMessageService.selectedMessageId = id;
		$state.go('eventmenu.pesanmasukdetail');
	}

})
.controller("pesanmasukdetailController", function($scope, $state, $http, $ionicLoading, dataMessageService){
	var _this = this
	$scope.dataMessageService = dataMessageService;
	var message_id = dataMessageService.selectedMessageId;

	$ionicLoading.show()
	var link = base_url+"get_detail_message";
	$http({
		method : 'POST',
		url : link,
		data : {
			customer_id:window.localStorage['customer_id'],
			token:token,
			message_id: message_id
		},
		timeout: 10000
	}).then(
	function(res) {
		$ionicLoading.hide();
		if (res.data.status == 'Member Not Active') {
			check_status_member();
			message_alert = res.data.pesan;
		}
		$scope.message_subject = res.data.subject;
		$scope.message_content = res.data.content;
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

})
.controller("inforekeningController", function($scope, $state, $http, $ionicLoading,$window, $rootScope) {
	var _this = this

	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	$scope.toWhatsapp = function() {
		var link = 'https://wa.me/62' + $rootScope.no_wa;
		window.open(link, '_system','location=yes,enableViewportScale=yes,hidden=no');
	}

	if (typeof $scope.customer_id === "undefined") {
		$scope.isLogin = false;
	}else{
		$scope.isLogin = true;
	}

	$ionicLoading.show()
	var link = base_url+"get_info";
	$http({
		method : 'POST',
		url : link,
		data : {
			customer_id:window.localStorage['customer_id'],
			token:token
		},
		timeout: 10000
	}).then(
	function(res) {
		$ionicLoading.hide()
		if (res.data.status == 'Member Not Active') {
			check_status_member();
			message_alert = res.data.pesan;
		}
		$scope.kontak = res.data.kontak;
		$scope.info = res.data.info;
		$scope.rekening = res.data.rekening;
		$rootScope.no_wa = res.data.no_wa;
		$rootScope.total_message = res.data.total_message;
		$scope.tipe_customer = res.data.status_harga_customer;
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

})
.controller("pengaturanController", function($scope, $state, $http, $ionicLoading,$ionicPopup,$window,$ionicHistory) {
	var _this = this
	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	$scope.editProfil = function  () {
		$state.go('eventmenu.editprofil');
	}

	$scope.logout = function  () {
		var confirmPopup = $ionicPopup.confirm({
			title: 'Logout',
			template: 'Anda Yakin Keluar Aplikasi ?'
		});

		confirmPopup.then(function(res) {
			if(res) {
				$window.localStorage.clear();
				$ionicHistory.clearCache();
				$ionicHistory.clearHistory();
				document.location.href = 'index.html';
			}
		});
	}

})
.controller("editprofilController", function($scope, $state, $http, $ionicLoading, $ionicPopup, $window) {
	var _this = this
	$scope.postData = {};

	$ionicLoading.show()
	var link = base_url+"get_customer_info";
	$http({
		method : 'POST',
		url : link,
		data : {
			customer_id:window.localStorage['customer_id'],
			token:token
		},
		timeout: 10000
	}).then(
	function(res) {
		if (res.data.status == 'Member Not Active') {
			check_status_member();
			message_alert = res.data.pesan;
		}
		$scope.postData.id = res.data.id;
		$scope.postData.nama = res.data.name;
		$scope.postData.email = res.data.email;
		$scope.postData.phone = res.data.phone;
		$scope.postData.pin_bb = res.data.pin_bb;
		$scope.postData.postcode = res.data.postcode;
		$scope.postData.address = res.data.address;
		$scope.postData.prov = res.data.prov;

		$scope.postData.status = res.data.status;
		$scope.tipe_customer = res.data.status_harga_customer;


		$scope.prov = res.data.prov;
		$scope.prov_id = res.data.prov_id;
		$scope.kota = res.data.kota;
		$scope.kota_id = res.data.kota_id;
		$scope.kecamatan = res.data.kecamatan;
		$scope.kecamatan_id = res.data.kecamatan_id;
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.editProfilKota = false;
	$scope.editProfilKecamatan = false;

	var param = "?token="+token_api+"&domain="+domain_api;
	var link = base_url_api+"/province"+param;
	$http({
		method : 'GET',
		url : link,
		data : {},
		timeout: 10000
	}).then(
	function(res) {
		$ionicLoading.hide();
		if(res.data.status == 'Member Not Active') {
			check_status_member();
			message_alert = res.data.pesan;
		}
		$scope.data_provinsi = res.data.result;
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});


	$scope.getKotaByProvinsi = function () {
		$ionicLoading.show()
		var param = "?token="+token_api+"&domain="+domain_api+"&province_id="+$scope.postData.prov;
		var link = base_url_api+"/city"+param;
		$http({
			method : 'GET',
			url : link,
			data : {},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide();
			if(res.data.status == 'Member Not Active') {
				check_status_member();
				message_alert = res.data.pesan;
			}
			$scope.kota = "-Pilih Kota-";
			$scope.kota_id = "0";
			$scope.kecamatan = "-Pilih Kecamatan-";
			$scope.kecamatan_id = "0";

			$scope.editProfilKota = true;
			$scope.data_kota = res.data.result;
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});

	}

	$scope.getKecamatanByKota = function () {
		$ionicLoading.show()
		var param = "?token="+token_api+"&domain="+domain_api+"&city_id="+$scope.postData.kota;
		var link = base_url_api+"/subdistrict"+param;
		$http({
			method : 'GET',
			url : link,
			data : {},
			timeout: 10000
		}).then(
		function(res) {
			$ionicLoading.hide();
			if(res.data.status == 'Member Not Active') {
				check_status_member();
				message_alert = res.data.pesan;
			}
			$scope.kecamatan = "-Pilih Kecamatan-";
			$scope.kecamatan_id = "0";

			$scope.editProfilKecamatan = true;
			$scope.data_kecamatan = res.data.result;
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.submit_edit_profile = function () {

		var nama = $scope.postData.nama;
		var email = $scope.postData.email;
		var phone = $scope.postData.phone;
		var alamat = $scope.postData.address;
		var pinbb = $scope.postData.pin_bb;
		var kodepos = $scope.postData.postcode;

		var password = $scope.postData.password;
		var confirm_password = $scope.postData.confirm_password;

		var provinsi = $scope.postData.prov;
		var kota = $scope.postData.kota;
		var kecamatan = $scope.postData.kecamatan;

		if(provinsi == "0" || provinsi==null){
			provinsi = $scope.prov_id;
		}
		if(kota == "0" || kota==null){
			kota = $scope.kota_id;
		}
		if(kecamatan == "0" || kecamatan==null){
			kecamatan = $scope.kecamatan_id;
		}

		if(password == confirm_password){
			$ionicLoading.show()
			var link = base_url+"update_settings";
			$http({
				method : 'POST',
				url : link,
				data : {
					customer_id:window.localStorage['customer_id'],
					token:token,
					nama: nama,
					email: email,
					phone: phone,
					password: password,
					alamat: alamat,
					pinbb: pinbb,
					kodepos: kodepos,
					provinsi: provinsi,
					kota: kota,
					kecamatan: kecamatan
				},
				timeout: 10000
			}).then(
			function(res) {
				$ionicLoading.hide();
				if (res.data.status == 'Member Not Active') {
					check_status_member();
					message_alert = res.data.pesan;
				}
				var confirmPopup = $ionicPopup.confirm({
					title: "Notifikasi",
					template: res.data.status
				});

				confirmPopup.then(function(res) {
					if(res) {
						$window.location.reload(true);
					}
				});
			}, function(response) {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}else{
			var alertPopup = $ionicPopup.alert({
				title: "Notifikasi",
				template: "Password Tidak Sama !"
			});
		}

	}

})

.controller("updateController", function($scope, $state, $http, $ionicLoading) {
	var _this = this

})

.controller("notifikasiController", function($scope, $state, $http, $ionicLoading) {
	var _this = this

	if (message_alert != null) {
		$scope.message = message_alert;
	} else {
		$scope.message = '';
	}
})
