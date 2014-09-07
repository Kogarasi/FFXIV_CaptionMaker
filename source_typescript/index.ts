/// <reference path="jquery.d.ts" />
/// <reference path="angular.d.ts" />
/// <reference path="font.ts" />
/// <reference path="image.ts" />
/// <reference path="renderer.ts" />

angular.module( 'CaptionMaker', [] )
	.controller( 'CaptionMakerController', [ '$scope', ( $scope )=>{

		var canvas = <HTMLCanvasElement>$("#canvas")[0];
		$scope.renderer = new CaptionMaker.Renderer( canvas );
		$scope.image = new CaptionMaker.Image();
		$scope.font = new CaptionMaker.Font();

		$scope.image.src = 'images/caption0.jpg';

		$scope.renderer.render( (context)=>{
			$scope.image.render( context );
			$scope.font.render( context );
		});

		$scope.fonts = [
			"sanserif",
			"serif",
			"Arial",
			"Meiryo",
			"MS UI Gothic",
			"MS Gothic",
			"MS Mincho",
			"Osaka",
			"Hiragino Kaku Gothic Pro",
			"Hiragino Maru Gothic Pro",
			"YuGothic",
			"Yu Gothic",
			"YuMincho",
			"Yu Mincho",
		];
	}]);

